/* ==========================================================================
   STEVE LINEHAN — SITE CONTENT
   --------------------------------------------------------------------------
   This is the ONLY file you need to edit to update the website.

   To ADD A SHOW: copy one of the { ... } blocks in "shows", paste it,
   and change the details. Keep the commas between blocks.
   Dates are written YEAR-MONTH-DAY, e.g. "2026-12-31".
   Shows disappear from the site automatically after their date passes.

   To ADD A PHOTO: put the image file in the "photos" folder, then add a
   line at the TOP of the "photos" list below, e.g.
     { src: "photos/my-pic.jpg", caption: "Hi" },
   The home page shows the first two rows of photos (so the newest ones);
   "See all photos" opens photos.html with every photo.

   Leave ticketUrl as "" if there's no ticket link. Add ticketHint: "..."
   to show a short note under a show (e.g. if the ticket page lists the headliner).
   ========================================================================== */

const SITE = {
  name: "Steve Linehan",
  tagline: "Stand-up comedy. Not for your grandma. Maybe for your grandma. What the hell, bring your Grandma.",
  realName: "Steve Linehan",
  instagram: "sl4par",
  facebook: "https://www.facebook.com/steve.linehan.7",
  youtube: "https://www.youtube.com/@stevelinehan22",
  bookingEmail: "booking@stevelinehancomedy.com", // PLACEHOLDER — change to the real email
  heroImage: "photos/onstage-blazer.jpg", // big photo at the top of the page
  headshot: "photos/headshot.jpg", // e.g. "photos/headshot.jpg" — leave "" to show a placeholder

  // Each paragraph is its own line in quotes.
  bio: [
    "New England based comedian utilizing quick wit, creative mind and self-deprecating awareness to entertain audiences of all ages throughout the region. Born and raised in a large Irish Catholic family setting whereby love, loyalty, friendship and perhaps a hint of alcoholism ruled the roost on a daily basis.",
    "Steve's creative style and warming stage presence have audience members laughing from start to finish. Steve quickly ingrained himself in the local comedy scene by becoming one of the top show hosts in the industry.",
    "His experience in hosting and opening shows creates a fun, energetic environment while setting the tone of the show for some of the top national headlining acts in the country. He has recently worked on shows with comedy legends Lenny Clarke, Don Gavin, Steve Sweeney, Juston McKinney, Christine Hurley, Frank Santorelli and many, many others.",
  ],

  // venue, time and ticketUrl are optional. Leave "" if unknown.
  shows: [
    { date: "2026-11-07", city: "Salisbury, MA", venue: "Wicked Funny Comedy Club at the Hungry Traveler", time: "8:00 PM (doors 7:00)", note: "Featuring · Merrimack Valley's Funniest Person Contest · $20", ticketUrl: "https://wickedfunnysalisbury.com" },
    { date: "2026-11-14", city: "Uxbridge, MA", venue: "Spanky's Comedy at The Polish Hall, 217 Mendon St", time: "8:00 PM", note: "Hosting · Headliner Frank Santorelli (The Sopranos) · $30", ticketUrl: "https://checkout.square.site/merchant/MLEGYX97KWR8P/checkout/XHUQKONEAFEMHKR74KY5JX35", ticketHint: "The ticket page is titled \"Spanky's Comedy Presents Frank Santorelli\". Steve is hosting this show." },
    { date: "2026-11-19", city: "Pembroke, MA", venue: "", time: "", note: "", ticketUrl: "" },
    { date: "2026-11-20", city: "Wakefield, MA", venue: "", time: "", note: "", ticketUrl: "" },
    { date: "2026-11-21", city: "Hudson, NH", venue: "", time: "", note: "", ticketUrl: "" },
    { date: "2026-11-27", city: "Turners Falls, MA", venue: "Montague Elks 2521, 1 Elks Ave", time: "7:30 PM (doors 6:30)", note: "With Dave Andrews & Dan Gill · Adults only · $20 advance / $25 cash at door", ticketUrl: "" },
    { date: "2026-11-28", city: "Swampscott, MA", venue: "", time: "", note: "", ticketUrl: "" },
    { date: "2026-12-03", city: "Bellingham, MA", venue: "", time: "", note: "", ticketUrl: "" },
    { date: "2026-12-06", city: "Middleborough, MA", venue: "", time: "", note: "", ticketUrl: "" },
    { date: "2026-12-31", city: "", venue: "New Year's Eve Show", time: "", note: "", ticketUrl: "" },
  ],

  photos: [
    { src: "photos/flyer-fall-2026.jpg", caption: "Fall 2026 tour dates" },
    { src: "photos/flyer-nov7-salisbury.jpg", caption: "Nov 7: Merrimack Valley's Funniest Person Contest, Salisbury MA" },
    { src: "photos/flyer-nov14-uxbridge.jpg", caption: "Nov 14: Spanky's Comedy Fall Series, Uxbridge MA" },
    { src: "photos/flyer-nov27-turnersfalls.jpg", caption: "Nov 27: Comedy Show at Montague Elks, Turners Falls MA" },
    { src: "photos/steve-onstage.jpg", caption: "On stage" },
    { src: "photos/onstage-blazer.jpg", caption: "Mid-bit" },
    { src: "photos/winners-circle.jpg", caption: "The Winners Circle Comedy Room" },
    { src: "photos/crowd-selfie.jpg", caption: "Packed house" },
    { src: "photos/backstage-selfie.jpg", caption: "Backstage" },
    { src: "photos/cpf-stage.jpg", caption: "On stage at a CPF Productions show" },
    { src: "photos/kowloon-komedy.jpg", caption: "Kowloon Komedy" },
    { src: "photos/the-tap-irish-pub.jpg", caption: "The Tap Irish Pub" },
    { src: "photos/outdoor-show.jpg", caption: "Outdoor show crowd" },
    { src: "photos/with-comics-group.jpg", caption: "With fellow comics" },
    { src: "photos/backstage-2.jpg", caption: "Green room" },
    { src: "photos/after-show-1.jpg", caption: "After the show" },
    { src: "photos/after-show-2.jpg", caption: "Out at a show" },
    { src: "photos/gala-night.jpg", caption: "Night out at a comedy event" },
    { src: "photos/with-a-friend.jpg", caption: "With a friend" },
  ],
};
