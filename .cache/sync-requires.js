const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/jenil/Desktop/code/showtime-nft/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/jenil/Desktop/code/showtime-nft/src/pages/404.js"))),
  "component---src-pages-auth-js": hot(preferDefault(require("/Users/jenil/Desktop/code/showtime-nft/src/pages/auth.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/jenil/Desktop/code/showtime-nft/src/pages/index.js"))),
  "component---src-pages-profile-js": hot(preferDefault(require("/Users/jenil/Desktop/code/showtime-nft/src/pages/profile.js")))
}

