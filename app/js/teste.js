const fs = require('fs');
const ytdl = require('ytdl-core');
const path = require('path');

console.log('oi');
let resultado = path.resolve(__dirname, './downloads');
// console.log(resultado);
// console.log("Current directory:", __dirname);

function getUserHome() {
    return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
  }

let name = getUserHome();

console.log(name);
// let url = 'https://www.youtube.com/watch?v=uRUxYUw42h0'

// async function downloadVideo(url){
//     let info = await ytdl.getBasicInfo(url);



//     let result =
//     ytdl(url, {
//         format: 'mp4',
//         filter: 'videoandaudio',
//     }).pipe(fs.createWriteStream(`${info.videoDetails.title}.mp4`))
// }


// downloadVideo(url);