import Cookies from 'js-cookie'

const setCookie = (name, value) => Cookies.set(name, value, { expires: 365 })

export const get = () => {
  const { consented } = Cookies.getJSON()
  return { consented }
}

export const set = () => {
  setCookie('consented', true)
}
