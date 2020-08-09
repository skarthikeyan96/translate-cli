const fetch = require('node-fetch')
const { URLSearchParams } = require('url')

const url = 'https://translate.google.com/translate_a/single?client=at&dt=t&dt=ld&dt=qca&dt=rm&dt=bd&dj=1&hl=%25s&ie=UTF-8&oe=UTF-8&inputm=2&otf=2&iid=1dd3b944-fa62-4b55-b330-74909a99969e&'
const sl = 'en'
const tl = 'de'
const q = 'Hello'

const params = new URLSearchParams()

params.append('sl', encodeURIComponent(`${sl}`))
params.append('tl', encodeURIComponent(`${tl}`))
params.append('q', encodeURIComponent(`${q}`))

fetch(url, { method: 'POST', body: params, headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(er => console.log(er))
