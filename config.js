/* ============================================================
   SITE CONFIG — edit this file to make the site yours.
   Change the text below and save. No coding required.
   ============================================================ */

window.SITE_CONFIG = {
  /* ---------- Your business ---------- */
  brand: {
    name: "Meridian & Co.",
    tagline: "Estate Brokerage"
  },

  /* ---------- Menu ---------- */
  nav: [
    { href: "#properties", label: "Properties" },
    { href: "#about", label: "The Firm" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Book a Tour", cta: true }
  ],

  /* ---------- Hero (top of the page) ---------- */
  hero: {
    overline: "Est. 1998 &nbsp;·&nbsp; Private Brokerage",
    title: "Homes Beyond<br />",
    titleEm: "Ordinary",
    lede:
      "Meridian &amp; Co. curates a private collection of extraordinary residences — matched to the people who will call them home.",
    primaryBtn: { href: "#properties", label: "Explore the Collection" },
    secondaryBtn: { href: "#contact", label: "Speak with an Advisor" },
    meta: "Current Portfolio — 48 residences",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80"
  },

  /* ---------- Featured properties ----------
     Add or remove listings here. Each property needs:
     name, location, price, beds, baths, sqft, status, image, alt
     (image: paste an image URL)                                  */
  properties: {
    overline: "01 — The Collection",
    title: "Featured Properties",
    note: "Six residences, curated from six thousand. Each one vetted, each one singular.",
    items: [
      {
        name: "Villa Lumiere",
        location: "Palm Crest, California",
        price: "$12,500,000",
        beds: 6,
        baths: 8,
        sqft: 12400,
        status: "Signature",
        image:
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
        alt: "Villa Lumiere exterior with pool"
      },
      {
        name: "The Meridian House",
        location: "Greenwich, Connecticut",
        price: "$8,900,000",
        beds: 5,
        baths: 6,
        sqft: 9200,
        status: "New",
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
        alt: "The Meridian House"
      },
      {
        name: "Stone & Cedar Estate",
        location: "Aspen, Colorado",
        price: "$15,750,000",
        beds: 7,
        baths: 9,
        sqft: 14800,
        status: "Private",
        image:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
        alt: "Stone and Cedar Estate in the mountains"
      },
      {
        name: "Observatory Penthouse",
        location: "Manhattan, New York",
        price: "$22,000,000",
        beds: 4,
        baths: 5,
        sqft: 7100,
        status: "Featured",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        alt: "Observatory Penthouse interior"
      },
      {
        name: "Serene Courtyard Home",
        location: "Scottsdale, Arizona",
        price: "$4,250,000",
        beds: 4,
        baths: 4,
        sqft: 5600,
        status: "New",
        image:
          "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
        alt: "Serene Courtyard Home"
      },
      {
        name: "Glasshouse on the Bay",
        location: "Malibu, California",
        price: "$19,800,000",
        beds: 5,
        baths: 7,
        sqft: 10300,
        status: "Signature",
        image:
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
        alt: "Glasshouse on the Bay"
      }
    ]
  },

  /* ---------- Numbers row ---------- */
  stats: [
    { value: 27, label: "Years of Practice" },
    { value: 1400, label: "Homes Placed" },
    { value: 98, label: "Percent Client Satisfaction" },
    { value: 41, label: "Industry Awards" }
  ],

  /* ---------- About ("The Firm") ----------
     Use <br /> for a line break, <em>text</em> for italic accent. */
  about: {
    overline: "02 — The Firm",
    title: "A quieter way<br />to buy a <em>home</em>.",
    body:
      "For over a quarter century, Meridian &amp; Co. has represented a deliberately small number of residences and clients. No volume. No noise. Only discretion, taste, and a standard we refuse to compromise.",
    quote: "The finest homes are never listed. They are spoken of.",
    button: "Meet Our Advisors",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
    caption: "The drawing room at Villa Lumiere, our 2019 Collection."
  },

  /* ---------- Testimonials ---------- */
  testimonials: {
    overline: "03 — In Their Words",
    title: "Testimonials",
    items: [
      {
        quote:
          "They understood the house before we did. Three showings, one signature — and a home we will keep for a lifetime.",
        name: "Eleanor & Marcus Hale",
        role: "Purchased · Villa Lumiere, California"
      },
      {
        quote:
          "Discreet, exacting, and entirely without pressure. Meridian turned a daunting search into a pleasure.",
        name: "James Whitfield",
        role: "Purchased · Observatory Penthouse, New York",
        alt: true
      },
      {
        quote:
          "They sold our family estate for a sum we considered impossible — quietly, and on our timetable.",
        name: "The Cavendish Family",
        role: "Sold · The Meridian House, Connecticut"
      }
    ]
  },

  /* ---------- Contact ---------- */
  contact: {
    overline: "04 — Enquiries",
    title: "Begin the conversation",
    note: "All enquiries are treated with complete discretion.",
    phone: "415 · 555 · 0148",
    phoneHref: "tel:+14155550148",
    email: "private@meridianandco.com",
    address: ["1200 Montgomery Street", "San Francisco, California"],
    hours: "Monday — Saturday · 9am to 6pm",
    form: {
      /* ---------- How to receive enquiries (choose ONE) ----------
         Option A — Formspree (easiest, free tier):
           1. Sign up at https://formspree.io
           2. Create a form, copy its URL like "https://formspree.io/f/abcdwxyz"
           3. Paste it below.
         Option B — EmailJS (sends straight to your inbox):
           1. Sign up at https://www.emailjs.com, add an Email service,
              create a template, get your Service ID, Template ID and
              Public Key, then paste them below.
         Leave BOTH empty for demo mode — the form will just pretend to
         submit so you can preview the site.                                    */
      endpoint: "",
      emailjs: {
        serviceId: "",
        templateId: "",
        publicKey: ""
      },
      subjectPrefix: "New enquiry from website",
      successMessage:
        "Thank you. Your enquiry has been received — our advisors will be in touch within one business day."
    }
  },

  /* ---------- Footer ---------- */
  footer: {
    note: "Cultivating exceptional homes and the people who live in them since 1998.",
    columns: [
      {
        heading: "Explore",
        links: [
          { href: "#properties", label: "The Collection" },
          { href: "#about", label: "The Firm" },
          { href: "#testimonials", label: "Testimonials" },
          { href: "#contact", label: "Book a Tour" }
        ]
      },
      {
        heading: "Contact",
        links: [
          { href: "tel:+14155550148", label: "415 · 555 · 0148" },
          { href: "mailto:private@meridianandco.com", label: "private@meridianandco.com" }
        ],
        flat: ["1200 Montgomery Street, San Francisco"]
      }
    ]
  }
};
