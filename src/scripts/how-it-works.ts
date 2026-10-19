const imageDialog = document.querySelector<HTMLDialogElement>('#image-dialog')!;
const expandedImage = document.querySelector<HTMLImageElement>('#expanded-image')!;
let imageTrigger: HTMLAnchorElement | null = null;

const chapters = Array.from(document.querySelectorAll<HTMLElement>('[data-chapter]'));
const toggle = document.querySelector<HTMLButtonElement>('#presentation-toggle')!;
const controls = document.querySelector<HTMLElement>('#presentation-controls')!;
const previous = document.querySelector<HTMLButtonElement>('#previous-chapter')!;
const next = document.querySelector<HTMLButtonElement>('#next-chapter')!;
const counter = document.querySelector<HTMLElement>('#chapter-counter')!;
let presenting = false;
let current = 0;

function showChapter(index: number, focus = true) {
  current = Math.max(0, Math.min(chapters.length - 1, index));
  chapters.forEach((chapter, i) => { chapter.hidden = i !== current; });
  previous.disabled = current === 0;
  next.disabled = current === chapters.length - 1;
  counter.textContent = `${current + 1} / ${chapters.length}`;
  window.scrollTo({ top: 0, behavior: 'instant' });
  if (focus) chapters[current].querySelector<HTMLElement>('h1, h2')?.focus({ preventScroll: true });
}

function setPresentation(active: boolean, focus = true) {
  const visible = active ? chapters.findIndex(chapter => chapter.getBoundingClientRect().bottom > 100) : current;
  presenting = active;
  document.body.classList.toggle('presenting', active);
  toggle.setAttribute('aria-pressed', String(active));
  toggle.textContent = active ? 'Reading view' : 'Presentation view';
  controls.hidden = !active;
  if (active) {
    showChapter(visible < 0 ? 0 : visible, focus);
  } else {
    chapters.forEach(chapter => { chapter.hidden = false; });
    const url = new URL(window.location.href);
    if (url.searchParams.has('present')) {
      url.searchParams.delete('present');
      window.history.replaceState(null, '', url);
    }
    chapters[current].scrollIntoView({ block: 'start', behavior: 'instant' });
    if (focus) chapters[current].querySelector<HTMLElement>('h1, h2')?.focus({ preventScroll: true });
  }
}

toggle.hidden = false;
toggle.addEventListener('click', () => setPresentation(!presenting));
previous.addEventListener('click', () => showChapter(current - 1));
next.addEventListener('click', () => showChapter(current + 1));

document.addEventListener('keydown', event => {
  if (imageDialog.open) return;
  if (!presenting || event.altKey || event.ctrlKey || event.metaKey) return;
  if (event.key === 'Escape') {
    event.preventDefault();
    setPresentation(false);
    return;
  }
  if ((event.target as HTMLElement)?.closest?.('input, textarea, select, [contenteditable], details')) return;
  const positions: Record<string, number> = { ArrowRight: current + 1, ArrowLeft: current - 1, Home: 0, End: chapters.length - 1 };
  if (event.key in positions) {
    event.preventDefault();
    showChapter(positions[event.key]);
  }
});

document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    if (!presenting) return;
    const target = document.getElementById(link.hash.slice(1));
    const chapter = target?.closest<HTMLElement>('[data-chapter]');
    if (chapter) {
      event.preventDefault();
      showChapter(chapters.indexOf(chapter));
    }
  });
});

document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach(button => {
  button.hidden = false;
  button.addEventListener('click', async () => {
    const text = document.getElementById(button.dataset.copy!)?.textContent?.trim();
    const status = document.querySelector<HTMLElement>('#copy-status')!;
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      status.textContent = 'Instruction copied. Attach SEEING.md, then paste it into your conversation or project instructions.';
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(document.getElementById(button.dataset.copy!)!);
      selection?.removeAllRanges();
      selection?.addRange(range);
      status.textContent = 'Select and copy the highlighted instruction using your browser’s Copy command.';
    }
  });
});

if (new URLSearchParams(window.location.search).get('present') === '1') setPresentation(true, false);

// Native modal dialogs contain focus and keep the underlying chapter inactive.
// Without dialog support, the image links still open the original asset.
document.querySelectorAll<HTMLAnchorElement>('[data-expand-image]').forEach(link => {
  link.addEventListener('click', event => {
    if (event.button > 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (typeof imageDialog.showModal !== 'function') return;
    const image = link.querySelector<HTMLImageElement>('img');
    if (!image) return;
    event.preventDefault();
    imageTrigger = link;
    expandedImage.src = image.currentSrc || image.src;
    expandedImage.alt = image.alt;
    document.querySelector<HTMLElement>('#image-dialog-title')!.textContent =
      link.closest('figure')?.querySelector('figcaption')?.textContent || 'Expanded image';
    imageDialog.showModal();
    document.body.classList.add('image-expanded');
  });
});

document.querySelector<HTMLButtonElement>('#close-image')!.addEventListener('click', () => imageDialog.close());
imageDialog.addEventListener('cancel', event => {
  event.preventDefault();
  imageDialog.close();
});
imageDialog.addEventListener('click', event => {
  if (event.target === imageDialog) imageDialog.close();
});
imageDialog.addEventListener('close', () => {
  document.body.classList.remove('image-expanded');
  imageTrigger?.focus({ preventScroll: true });
});
