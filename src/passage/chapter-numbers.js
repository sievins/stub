export const singleChapterBooks = [
  'Obadiah',
  'Philemon',
  '2 John',
  '3 John',
  'Jude',
]

const splitQuery = (query) => query.match(/(\d?\s?\w+)\s?(.*)/)

export const addChapterNumbers = (query, text) => {
  const [_, book, verses] = splitQuery(query) // eslint-disable-line no-unused-vars

  if (singleChapterBooks.includes(book)) {
    return text
  }

  // No colon = single chapter e.g. Colossians 1
  if (/^[^:]+$/.test(verses)) {
    const chapter = verses
    return text.replace(/\[1]/, `[${chapter}:1]`)
  }

  // Single colon no hyphen = single chapter e.g. Colossians 1:1
  if (/^[^–]+:[^–]+$/.test(verses)) {
    const [_, chapter] = verses.match(/(\d+)/) // eslint-disable-line no-unused-vars
    return text.replace(/\[1]/, `[${chapter}:1]`)
  }

  // Single colon preceding hyphen = single chapter e.g. Colossians 1:2–3
  if (/[^–]+:\d–[^:]$/.test(verses)) {
    const [_, chapter] = verses.match(/(\d+)/) // eslint-disable-line no-unused-vars
    return text.replace(/\[1]/, `[${chapter}:1]`)
  }

  // 2 Colons = multiple chapters e.g. Colossians 1:1–2:2
  if (/:.*:/.test(verses)) {
    let [_, startChapter, startVerse] = verses.match(/(\d+):(\d+)/) // eslint-disable-line no-unused-vars
    startVerse !== '1' && startChapter++
    return text.replace(/\[1]/g, (match) => (
      `[${startChapter++}:1]`
    ))
  }

  // Single colon post hyphen = multiple chapters e.g. Colossians 1–2:18
  if (/^\d+–/.test(verses)) {
    let [_, startChapter] = verses.match(/(\d+)/) // eslint-disable-line no-unused-vars
    return text.replace(/\[1]/g, (match) => (
      `[${startChapter++}:1]`
    ))
  }

  return text
}
