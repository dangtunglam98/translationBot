
require("dotenv").config();

const translate =  async function (new_text ,
    projectId = process.env.GOOGLE_APPLICATION_CREDENTIALS // Your GCP Project Id
  ) {
    try 
    {
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
    console.log(typeof(translation))
    return translation;
  } catch(err) {
      console.log(err)
  }
}
export default translate;

// var a = function(){
// }
