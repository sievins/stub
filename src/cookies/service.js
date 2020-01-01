import Cookies from 'js-cookie'
import { forEachObjIndexed } from 'ramda'

export const get = () => {
  const { consented, theme, settings } = Cookies.getJSON()
  return { consented, theme, settings }
}

export const set = (cookies) => {
  forEachObjIndexed((value, name) => {
    if (name === 'consented' || get().consented === true) {
      Cookies.set(name, value, { expires: 365 })
    }
  }, cookies)
}
