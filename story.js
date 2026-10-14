// Copies the title, subtitle, logo, footer, and each chapter's title, image,
// caption, and description from story-text.js onto config.
// Map settings stay in config.js.
async function applyStory(config) {
  const story = parseStory(storySource);
  if (story.chapters.length !== config.chapters.length) {
    throw new Error(
      `story-text.js has ${story.chapters.length} chapters and config.js has ${config.chapters.length}. Keep them in the same order.`,
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
      const href = /^https?:\/\//i.test(text) ? text : `https://${text}`;
      const id = href.match(/[?&]v=([\w-]{11})/)?.[1];
      const title =
        id === "nG_LjkWNY1E"
          ? 'Video: "The Ogiek Story: Community-led conservation in Mount Elgon, Kenya" (Rights and Resources Institute)'
          : "Watch on YouTube";
      return `<a class="video-link" href="${escapeHtml(href)}" target="_blank"><svg viewBox="0 0 24 17" aria-hidden="true"><path fill="#ff0033" d="M23.5 2.6A3 3 0 0 0 21.4.5C19.5 0 12 0 12 0S4.5 0 2.6.5A3 3 0 0 0 .5 2.6 32 32 0 0 0 0 8.5a32 32 0 0 0 .5 5.9 3 3 0 0 0 2.1 2.1C4.5 17 12 17 12 17s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1 32 32 0 0 0 .5-5.9 32 32 0 0 0-.5-5.9z"/><path fill="#fff" d="M9.6 12.1V4.9l6.3 3.6z"/></svg><span>${escapeHtml(title)}</span></a>`;
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
