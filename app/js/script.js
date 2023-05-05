const fs = require('fs');
const path = require('path');
const ytdl = require('ytdl-core');

const note_submit_el = document.getElementById('downloadButton');
let url = document.getElementById('videoUrl');
let titleEl = document.querySelector('#downloadResultParagraph');
let progressBar = document.getElementsByClassName('progressBar')[0];

note_submit_el.addEventListener('click', async () => {
    downloadVideo(url.value);
})

function getUserHome() {
    return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
  }

async function downloadVideo(url){
    let info = await ytdl.getBasicInfo(url);
    let userprofile = getUserHome();
    let output = path.resolve(userprofile, `./Downloads/${info.videoDetails.title}.mp4`);
    console.log(output);

    let result =
    ytdl(url, {
        format: 'mp4',
        filter: 'videoandaudio',
        quality: 'highestvideo'
    })
    .on("progress", (chucklength, downloaded, total) => {
        
        let download_size= downloaded/total * 100;
        let download_size_integer = ~~download_size;
        titleEl.textContent = `${download_size_integer}% Downloaded`;


        if(download_size_integer == 100){
            titleEl.innerHTML = 'Download completed'
        }
    })
    .pipe(fs.createWriteStream(output))
}