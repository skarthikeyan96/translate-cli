// Imports the Google Cloud client library
const { Translate } = require('@google-cloud/translate').v2

// Instantiates a client
const translate = new Translate()

function findCode (targetLang, langs) {
  let response

  langs.forEach(language => {
    if (language.name.toLowerCase() === targetLang) {
      response = language.code
    }
  })
  return (response)
}

async function translateLang () {
  const text = process.argv[2]
  const [langs] = await translate.getLanguages()
  const target = findCode(process.argv[3], langs)
  const [translation] = await translate.translate(text, target)
  console.log(`Text: ${text}`)
  console.log(`Translation: ${translation}`)
}

translateLang()
