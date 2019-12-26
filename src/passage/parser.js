import DOMPurify from 'dompurify'
import { addChapterNumbers } from './chapter-numbers'
import { pipe } from '../utils'
import React from 'react'

const superScriptVerseNumbers = (text) => text.replace(/\[(\d+:?\d*)]\s/g, '<sup style="font-size: calc(4px + 1vmin)">$1</sup>&nbsp;')

export const parse = (passage, settings) => {
  if (!passage.query) {
    return ''
  }

  const text = settings.withVerseNumbers ? passage.withVerseNumbers : passage.withoutVerseNumbers

  const parsedTest = pipe(addChapterNumbers, superScriptVerseNumbers, DOMPurify.sanitize)(passage.query, text)

  return <div dangerouslySetInnerHTML={{ __html: parsedTest }}></div>
}
