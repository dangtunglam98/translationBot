require("dotenv").config();

module.exports = {
  translate : async function (new_text ,
    projectId = process.env.GOOGLE_APPLICATION_CREDENTIALS // Your GCP Project Id
  ) {
    // [START translate_quickstart]
    // Imports the Google Cloud client library
    const {Translate} = require('@google-cloud/translate');

    // Instantiates a client
    const translate = new Translate({projectId});

    // The text to translate
    const text = new_text;

    // The target language
    const target = 'vi';

    // Translates some text into Russian
    const [translation] = await translate.translate(text, target);
    console.log(`Text: ${text}`);
    console.log(`Translation: ${translation}`);
  }
};

// var a = function(){
// }
