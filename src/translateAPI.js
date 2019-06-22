
export default async function translation() {
    const Translate = require('@google-cloud/translate');
    const projectId = 'translationbot-1560840064175';
    const translate = new Translate.Translate({projectId: projectId, })
    const target = 'vi';
    const [translation] = await translate.translate("Hello", target);
    console.log(`Text: ${"Hello"}`);
    console.log(`Translation: ${translation}`);
}

// const translate = require('google-translate-api');

// export async function translation(text) {
//     const origin = `en`;
//     const target = `vn`;
//     translate(text, {from: origin, to: target}).then(res => {
//         // console.log(`Text: ${text}`);
//         // console.log(`Translation: ${res.text}`);
//         return res.text
//     }).catch(err =>{
//         console.error(err);
//     });
    
// }

translation().catch(console.error);