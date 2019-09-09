import { addChapterNumbers, singleChapterBooks } from './chapter-numbers'

const specs = {
  wholeChapter: {
    query: 'Colossians 1',
    text: '[1] Verse one [2] verse two [3] verse 3 ...',
    expected: '[1:1] Verse one [2] verse two [3] verse 3 ...',
  },
  singleVerseIncludingVerseOne: {
    query: 'Colossians 1:1',
    text: '[1] Verse one',
    expected: '[1:1] Verse one',
  },
  singleVerseNotIncludingVerseOne: {
    query: 'Colossians 1:2',
    text: '[2] verse two',
    expected: '[2] verse two',
  },
  singleChapterMultipleVersesIncludingVerseOne: {
    query: 'Colossians 1:1–2',
    text: '[1] Verse one [2] verse two',
    expected: '[1:1] Verse one [2] verse two',
  },
  singleChapterMultipleVersesNotIncludingVerseOne: {
    query: 'Colossians 1:2–3',
    text: '[2] verse two [3] verse 3',
    expected: '[2] verse two [3] verse 3',
  },
  multipleChaptersSingleVerseOne: {
    query: 'Colossians 1:2–2:2',
    text: '[2] verse two [3] verse 3 ... [1] Verse one [2] verse two',
    expected: '[2] verse two [3] verse 3 ... [2:1] Verse one [2] verse two',
  },
  multipleChaptersMultipleVerseOnesA: {
    query: 'Colossians 1:1–2:2',
    text: '[1] Verse one [2] verse two [3] verse 3 ... [1] Verse one [2] verse two',
    expected: '[1:1] Verse one [2] verse two [3] verse 3 ... [2:1] Verse one [2] verse two',
  },
  multipleChaptersMultipleVerseOnesB: {
    query: 'Colossians 1–2:2',
    text: '[1] Verse one [2] verse two [3] verse 3 ... [1] Verse one [2] verse two',
    expected: '[1:1] Verse one [2] verse two [3] verse 3 ... [2:1] Verse one [2] verse two',
  },
}

describe('chapter-numbers', () => {
  it('does not modify single chapter books', () => {
    const text = '[1] Verse one [2] verse two [3] verse 3 ...'

    expect(singleChapterBooks.every((book) => (
      addChapterNumbers(book, text) === text
    ))).toBeTruthy()
  })

  it('adds chapter number to first verse of chapter', () => {
    const result = Object.values(specs).every(({ query, text, expected }) => {
      const actual = addChapterNumbers(query, text)
      const isSuccess = actual === expected

      if (!isSuccess) {
        console.error('query: ', query)
        console.error('text: ', text)
        console.error('expected: ', expected)
        console.error('actual: ', actual)
      }

      return isSuccess
    })

    expect(result).toBeTruthy()
  })
})
