module.exports = {
  //-- SITE SETTINGS -----
  author: "@zenje",
  siteTitle: "Gatsby Starter Portfolio Minimal",
  siteShortTitle: "Jessica Zeng", // Used as logo text in header, footer, and splash screen
  isShouldShowLogo: false,
  siteDescription:
    "A modern one-page portfolio with a clean yet expressive design.",
  siteUrl: "https://zenje.github.io/",
  siteLanguage: "en_US",
  siteIcon: "content/sunflower-favicon.png", // Relative to gatsby-config file
  seoTitleSuffix: "Jessica Zeng", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#000000",
      secondary: "#FFF4D9",
      tertiary: "#F2F2F2",
      text: "#000000",
      highlight: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#FAFAFA",
      secondary: "#2A2926",
      tertiary: "#252525",
      text: "rgba(255, 255, 255, 0.87)",
      highlight: "#43AA8B",
      subtext: "#F9C74F",
      background: "#171f26",
      card: "#1C1C1C",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  // fonts are imported in globalStyle.js
  fonts: {
    primary: "Karla, sans-serif",
    header: "Josefin Sans, sans-serif",
  },

  //-- ARTICLES SECTION SETTINGS -----
  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
  mediumRssFeed:
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40konstantinmuenster",
  // rssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.theguardian.com%2Finternational%2Frss",

  shownArticles: 3,

  //-- SOCIAL MEDIA SETTINGS -----
  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance, E-Mail
  socialMedia: [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/jessica-zeng-4425b366/",
    },
    {
      name: "Github",
      url: "https://github.com/zenje/",
    },
    // {
    //   name: "Mail",
    //   url: "mailto:mail@konstantin.digital",
    // },
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: "about",
        url: "/#about",
      },
      {
        name: "projects",
        url: "/#projects",
      },
      {
        name: "art",
        url: "https://art.jessiesday.com",
      },
      {
        name: "contact",
        url: "/#contact",
      },
    ],
    button: {
      useFileName: true,
      name: "Resume",
      fileName: "Jessica Zeng - resume (2022-01).pdf", // the file has to be placed inside the static folder at the root level
      url: "", // if useFileName=false, you can set an anchor link here and use the button for navigational purposes
    },
  },
  footerLinks: [
    {
      name: "Privacy",
      url: "/privacy",
    },
    {
      name: "Imprint",
      url: "/imprint",
    },
  ],
}
