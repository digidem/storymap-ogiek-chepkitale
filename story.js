// Loads story.md and copies the title, subtitle, logo, footer, and each
// chapter's title, image, caption, and description onto config.
// Map settings stay in config.js.
async function applyStory(config) {
  const response = await fetch("./story.md");
  if (!response.ok) throw new Error("Could not load story.md");
  const story = parseStory(await response.text());
  if (story.chapters.length !== config.chapters.length) {
    throw new Error(
      `story.md has ${story.chapters.length} chapters and config.js has ${config.chapters.length}. Keep them in the same order.`,
    );
  }
  config.title = story.title;
  config.subtitle = story.subtitle;
  config.logo = story.logo;
  config.footer = story.footer;
  story.chapters.forEach((chapter, index) => {
    const target = config.chapters[index];
    target.title = chapter.title;
    target.image = chapter.image;
    target.caption = chapter.caption;
    target.description = chapter.description;
  });
}

function parseStory(markdown) {
  const lines = markdown.replace(/<!--[\s\S]*?-->/g, "").trim().split(/\r?\n/);
  const story = { title: "", subtitle: "", logo: "", footer: "", chapters: [] };
  let chapter = null;
  let footer = null;
  const subtitle = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim() === "---") {
      footer = [];
      chapter = null;
      continue;
    }
    if (footer) {
      footer.push(line);
      continue;
    }
    if (line.startsWith("## ")) {
      chapter = { title: line.slice(3).trim(), image: "", caption: "", body: [] };
      story.chapters.push(chapter);
      continue;
    }
    if (line.startsWith("# ")) {
      story.title = line.slice(2).trim();
      continue;
    }
    const image = line.match(/^!\[([^\]]*)\]\(([^)]+)\)\s*$/);
    if (image && !chapter) {
      story.logo = image[2].trim();
      continue;
    }
    if (image && chapter) {
      chapter.image = image[2].trim();
      const alt = image[1].trim();
      const next = lines[i + 1];
      if (alt) {
        chapter.caption = inlineMarkdown(alt);
      } else if (next && next.trim() && !next.startsWith("#")) {
        chapter.caption = inlineMarkdown(next.trim());
        i++;
      }
      continue;
    }
    if (!chapter) {
      if (line.trim()) subtitle.push(line.trim());
      continue;
    }
    chapter.body.push(line);
  }

  story.subtitle = subtitle.join(" ");
  story.footer = markdownToHtml((footer || []).join("\n"));
  for (const item of story.chapters) {
    item.description = markdownToHtml(item.body.join("\n"));
    delete item.body;
  }
  return story;
}

function markdownToHtml(markdown) {
  return markdown
    .trim()
    .split(/\n\s*\n/)
    .filter((block) => block.trim())
    .map(blockToHtml)
    .join("<br><br>");
}

function blockToHtml(block) {
  const text = block.trim().replace(/\s*\n\s*/g, " ");
  const video = text.match(
    /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})\S*$/,
  );
  if (video) {
    const src = `https://www.youtube-nocookie.com/embed/${video[1]}?controls=0`;
    return `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="${src}" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="fullscreen; picture-in-picture"></iframe></div>`;
  }
  return inlineMarkdown(text);
}

function inlineMarkdown(text) {
  const pattern = /\[([^\]]+)\]\(([^)\s]+)\)/g;
  let html = "";
  let last = 0;
  for (const match of text.matchAll(pattern)) {
    html += escapeHtml(text.slice(last, match.index));
    html += `<a href="${escapeHtml(match[2])}" target="_blank">${escapeHtml(match[1])}</a>`;
    last = match.index + match[0].length;
  }
  return html + escapeHtml(text.slice(last));
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
