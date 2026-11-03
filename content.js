/* ==========================================================================
   DIRTY STEVE'S — SITE CONTENT
   --------------------------------------------------------------------------
   This is the ONLY file you need to edit to update the website.

   To ADD A SHOW: copy one of the { ... } blocks in "shows", paste it,
   and change the details. Keep the commas between blocks.
   Dates are written YEAR-MONTH-DAY, e.g. "2026-12-31".
   Shows disappear from the site automatically after their date passes.

   To ADD A PHOTO: put the image file in the "photos" folder, then add a
   line to "photos" below, e.g.  { src: "photos/my-pic.jpg", caption: "Hi" },

   Leave ticketUrl as "" if there's no ticket link.
   ========================================================================== */

const SITE = {
  name: "Dirty Steve",
  tagline: "Stand-up comedy. Not for your grandma. Maybe for your grandma.",
  realName: "Steve Linehan",
  instagram: "sl4par",
  // PLACEHOLDER link — paste the real channel URL, e.g. "https://www.youtube.com/@yourhandle"
  youtube: "https://www.youtube.com/results?search_query=comedian+Steve+Linehan",
  bookingEmail: "booking@dirtysteves.com", // PLACEHOLDER — change to the real email
  headshot: "photos/headshot.jpg", // e.g. "photos/headshot.jpg" — leave "" to show a placeholder

  // Each paragraph is its own line in quotes. PLACEHOLDER BIO — replace me.
  bio: [
    "Steve Linehan has been telling jokes on stages, in bars, and occasionally in parking lots for years. His act is honest, a little filthy, and built on the stuff most people only say in the group chat.",
    "He's a regular on the local club circuit and has opened for touring headliners. When he's not on stage he's probably writing, or arguing with his phone about it.",
    "Catch him live, follow along on Instagram, or book him for your room.",
  ],

  // venue, time and ticketUrl are optional. Leave "" if unknown.
  shows: [
    { date: "2026-11-07", city: "Salisbury, MA", venue: "Wicked Funny Comedy Club at the Hungry Traveler", time: "8:00 PM (doors 7:00)", note: "Featuring · Merrimack Valley's Funniest Person Contest · $20", ticketUrl: "https://wickedfunnysalisbury.com" },
    { date: "2026-11-14", city: "Uxbridge, MA", venue: "", time: "", note: "", ticketUrl: "" },
    { date: "2026-11-19", city: "Pembroke, MA", venue: "", time: "", note: "", ticketUrl: "" },
    { date: "2026-11-20", city: "Wakefield, MA", venue: "", time: "", note: "", ticketUrl: "" },
    { date: "2026-11-21", city: "Hudson, NH", venue: "", time: "", note: "", ticketUrl: "" },
    { date: "2026-11-27", city: "Turners Falls, MA", venue: "", time: "", note: "", ticketUrl: "" },
    { date: "2026-11-28", city: "Swampscott, MA", venue: "", time: "", note: "", ticketUrl: "" },
    { date: "2026-12-03", city: "Bellingham, MA", venue: "", time: "", note: "", ticketUrl: "" },
    { date: "2026-12-06", city: "Middleborough, MA", venue: "", time: "", note: "", ticketUrl: "" },
    { date: "2026-12-31", city: "", venue: "New Year's Eve Show", time: "", note: "", ticketUrl: "" },
  ],

  photos: [
    { src: "photos/flyer-fall-2026.jpg", caption: "Fall 2026 tour dates" },
    { src: "photos/flyer-nov7-salisbury.jpg", caption: "Nov 7: Merrimack Valley's Funniest Person Contest, Salisbury MA" },
    { src: "", caption: "Crowd work gone wrong" },
    { src: "", caption: "Headshot" },
    { src: "", caption: "Open mic night" },
    { src: "", caption: "On the road" },
  ],
};
