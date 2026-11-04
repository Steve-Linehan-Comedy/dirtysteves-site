/* Photo gallery shared by the home page (first rows only) and photos.html (all photos).
   Photos keep their own shape and sit in rows of equal height. */
function renderGallery({ maxRows = Infinity } = {}) {
  const S = window.SITE || SITE;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s || "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const photos = S.photos || [];
  const gallery = $("gallery");
  gallery.innerHTML = photos.map((p, i) => `
    <button class="tile" data-i="${i}" aria-label="${esc(p.caption || "Photo")}">
      ${p.src ? `<img src="${esc(p.src)}" alt="${esc(p.caption)}" loading="lazy">` : `<div class="placeholder"><b>PHOTO</b>${esc(p.caption)}</div>`}
      ${p.caption ? `<span class="cap">${esc(p.caption)}</span>` : ""}
    </button>`).join("");

  const tiles = [...gallery.querySelectorAll(".tile")];
  const more = $("gallery-more");

  // Only the first `maxRows` rows show; the rest are hidden and "See all photos" links to photos.html.
  const clampRows = () => {
    if (maxRows === Infinity) return;
    tiles.forEach((t) => (t.hidden = false));
    const tops = [...new Set(tiles.map((t) => t.offsetTop))].sort((a, b) => a - b);
    const cutoff = tops[maxRows];
    let hiddenCount = 0;
    if (cutoff !== undefined) tiles.forEach((t) => { if (t.offsetTop >= cutoff) { t.hidden = true; hiddenCount++; } });
  };
  let pending = false;
  const schedule = () => {
    if (pending) return;
    pending = true;
    requestAnimationFrame(() => { pending = false; clampRows(); });
  };

  // Size each tile to its photo's shape so nothing gets cropped
  gallery.querySelectorAll(".tile img").forEach((img) => {
    const fit = () => {
      if (!img.naturalWidth) return;
      const ar = img.naturalWidth / img.naturalHeight;
      const t = img.parentElement;
      // grow in proportion to width so every tile in a row ends up the same height, uncropped
      t.style.flex = `${ar} 1 calc(var(--row) * ${ar})`;
      t.style.height = "auto";
      t.style.aspectRatio = ar;
    };
    if (img.complete) fit();
    else img.addEventListener("load", () => { fit(); schedule(); });
  });
  window.addEventListener("resize", schedule);
  clampRows();

  // Lightbox
  const lb = $("lightbox");
  gallery.addEventListener("click", (e) => {
    const t = e.target.closest(".tile"); if (!t) return;
    const p = photos[t.dataset.i]; if (!p.src) return;
    $("lb-img").src = p.src; $("lb-img").alt = p.caption || "";
    $("lb-cap").textContent = p.caption || "";
    lb.hidden = false;
  });
  const close = () => (lb.hidden = true);
  lb.addEventListener("click", (e) => { if (e.target !== $("lb-img")) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
}
