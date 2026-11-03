(function () {
  const S = window.SITE || SITE;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s || "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const igUrl = "https://instagram.com/" + S.instagram;

  // Header / links
  $("tagline").textContent = S.tagline;
  ["ig-hero", "ig-more", "ig-foot", "ig-contact"].forEach((id) => ($(id).href = igUrl));
  ["yt-hero", "yt-btn", "yt-foot", "yt-contact"].forEach((id) => ($(id).href = S.youtube));
  ["fb-foot", "fb-contact"].forEach((id) => ($(id).href = S.facebook));
  $("ig-foot").textContent = "@" + S.instagram;
  $("email-btn").href = "mailto:" + S.bookingEmail;
  $("email-btn").textContent = S.bookingEmail;
  $("year").textContent = new Date().getFullYear();

  // Shows: drop past dates, sort soonest first
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const parse = (d) => { const [y, m, day] = d.split("-").map(Number); return new Date(y, m - 1, day); };
  const shows = (S.shows || [])
    .map((s) => ({ ...s, d: parse(s.date) }))
    .filter((s) => s.d >= today)
    .sort((a, b) => a.d - b.d);

  const gcal = (s) => {
    const ymd = s.date.replace(/-/g, "");
    const next = new Date(s.d); next.setDate(next.getDate() + 1);
    const ymd2 = next.getFullYear() + String(next.getMonth() + 1).padStart(2, "0") + String(next.getDate()).padStart(2, "0");
    const p = new URLSearchParams({
      action: "TEMPLATE",
      text: S.name + " – " + (s.venue || s.city),
      dates: ymd + "/" + ymd2,
      details: (s.time ? "Showtime " + s.time + ". " : "") + (s.ticketUrl || ""),
      location: [s.venue, s.city].filter(Boolean).join(", "),
    });
    return "https://calendar.google.com/calendar/render?" + p;
  };

  $("show-list").innerHTML = shows.length
    ? shows.map((s) => `
      <article class="show">
        <div class="show-date">
          <div class="m">${s.d.toLocaleString("en-US", { month: "short" })}</div>
          <div class="d">${s.d.getDate()}</div>
          <div class="w">${s.d.toLocaleString("en-US", { weekday: "short" })}</div>
        </div>
        <div>
          <div class="show-venue">${esc(s.venue || s.city)}</div>
          ${(s.venue && s.city) || s.time ? `<div class="show-meta">${[s.venue ? s.city : "", s.time].filter(Boolean).map(esc).join(" · ")}</div>` : ""}
          ${s.note ? `<span class="show-note">${esc(s.note)}</span>` : ""}
        </div>
        <div class="show-actions">
          ${s.ticketUrl ? `<a class="btn btn-primary btn-small" href="${esc(s.ticketUrl)}" target="_blank" rel="noopener">Tickets</a>` : ""}
          <a class="btn btn-ghost btn-small" href="${gcal(s)}" target="_blank" rel="noopener">+ Calendar</a>
        </div>
      </article>`).join("")
    : `<p class="empty">No shows on the calendar right now. Follow <a href="${igUrl}" target="_blank" rel="noopener">@${esc(S.instagram)}</a> for new dates.</p>`;

  // Hero photo
  if (S.heroImage) $("hero-photo").innerHTML = `<img src="${esc(S.heroImage)}" alt="${esc(S.realName || S.name)} on stage">`;
  else $("hero-photo").remove();

  // Bio + headshot
  $("bio").innerHTML = (S.bio || []).map((p) => `<p>${esc(p)}</p>`).join("");
  $("headshot").innerHTML = S.headshot
    ? `<img src="${esc(S.headshot)}" alt="${esc(S.name)}">`
    : `<div class="placeholder"><b>HEADSHOT</b>Add photos/headshot.jpg</div>`;

  // Gallery
  const photos = S.photos || [];
  $("gallery").innerHTML = photos.map((p, i) => `
    <button class="tile" data-i="${i}" aria-label="${esc(p.caption || "Photo")}">
      ${p.src ? `<img src="${esc(p.src)}" alt="${esc(p.caption)}" loading="lazy">` : `<div class="placeholder"><b>PHOTO</b>${esc(p.caption)}</div>`}
      ${p.caption ? `<span class="cap">${esc(p.caption)}</span>` : ""}
    </button>`).join("");

  // Lightbox
  const lb = $("lightbox");
  $("gallery").addEventListener("click", (e) => {
    const t = e.target.closest(".tile"); if (!t) return;
    const p = photos[t.dataset.i]; if (!p.src) return;
    $("lb-img").src = p.src; $("lb-img").alt = p.caption || "";
    $("lb-cap").textContent = p.caption || "";
    lb.hidden = false;
  });
  const close = () => (lb.hidden = true);
  lb.addEventListener("click", (e) => { if (e.target !== $("lb-img")) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
})();
