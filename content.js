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
  headshot: "", // e.g. "photos/headshot.jpg" — leave "" to show a placeholder

  // Each paragraph is its own line in quotes. PLACEHOLDER BIO — replace me.
  bio: [
    "Steve Linehan has been telling jokes on stages, in bars, and occasionally in parking lots for years. His act is honest, a little filthy, and built on the stuff most people only say in the group chat.",
    "He's a regular on the local club circuit and has opened for touring headliners. When he's not on stage he's probably writing, or arguing with his phone about it.",
    "Catch him live, follow along on Instagram, or book him for your room.",
  ],

  shows: [
    {
      date: "2026-11-14",
      time: "8:00 PM",
      venue: "The Laugh Factory (placeholder)",
      city: "Your City, ST",
      note: "Headlining",
      ticketUrl: "",
    },
    {
      date: "2026-11-21",
      time: "9:30 PM",
      venue: "Open Mic at The Dive (placeholder)",
      city: "Your City, ST",
      note: "Free entry",
      ticketUrl: "",
    },
    {
      date: "2026-12-05",
      time: "7:00 PM",
      venue: "Comedy Cellar (placeholder)",
      city: "Another City, ST",
      note: "Feature set",
      ticketUrl: "",
    },
    {
      date: "2026-12-31",
      time: "10:00 PM",
      venue: "New Year's Eve Roast (placeholder)",
      city: "Your City, ST",
      note: "",
      ticketUrl: "",
    },
  ],

  photos: [
    { src: "", caption: "Live at the club" },
    { src: "", caption: "Backstage" },
    { src: "", caption: "Crowd work gone wrong" },
    { src: "", caption: "Headshot" },
    { src: "", caption: "Open mic night" },
    { src: "", caption: "On the road" },
  ],
};
