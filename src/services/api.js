const axios = require('axios')

const fetch = async (query, includeVerseNumbers) => {
  const response = await axios.get('https://api.esv.org/v3/passage/text/', {
    headers: { 'Authorization': `Token ${process.env.REACT_APP_ESV_AUTHORISATION_TOKEN}` },
    params: {
      'q': query,
      'include-verse-numbers': includeVerseNumbers,
      'include-first-verse-numbers': includeVerseNumbers,
      'include-passage-references': false,
      'include-footnotes': false,
      'include-footnote-body': false,
      'include-headings': false,
      'include-short-copyright': false,
      'include-copyright': false,
    },
    timeout: 1000,
  })
  return response.data
}

const getPassage = async (query) => {
  const [withVerseNumbers, withoutVerseNumbers] = await Promise.all([fetch(query, true), fetch(query, false)])

  return {
    withVerseNumbers: withVerseNumbers.passages[0],
    withoutVerseNumbers: withoutVerseNumbers.passages[0],
    query: withVerseNumbers.query,
  }
}

export { getPassage }
