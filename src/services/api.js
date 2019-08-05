const axios = require('axios')

// FIXME Don't use env variable as they are embedded into the build
async function getPassage(query) {
  return await axios.get('https://api.esv.org/v3/passage/text/', {
    headers: { 'Authorization': `Token ${process.env.REACT_APP_ESV_AUTHORISATION_TOKEN}` },
    params: {
      'q': query,
      'include-passage-references': false,
      'include-verse-numbers': false,
      'include-first-verse-numbers': false,
      'include-footnotes': false,
      'include-footnote-body': false,
      'include-headings': false,
      'include-short-copyright': false,
      'include-copyright': false,
    },
    timeout: 1000,
  })
}

export { getPassage }
