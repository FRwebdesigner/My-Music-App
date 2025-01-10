// const music = new Audio('');

// // create Array

// const songs = [
//     {
//         id:"1",
//         songName:` Hung Up <br>
//         <div class="subtitle">Madonna</div>`,
//         poster: "img/71D5S3PHRmL.jpg"
//     },
//     {
//         id:"2",
//         songName:` Frozen <br>
//         <div class="subtitle">Madonna</div>`,
//         poster: "img/1235006.jpg"
//     },
//     {
//         id:"3",
//         songName:` Believe <br>
//         <div class="subtitle">Cher</div>`,
//         poster: "img/1900x1900.believe.jpg"
//     },
//     {
//         id:"4",
//         songName:` Song For The Lonely <br>
//         <div class="subtitle">Cher</div>`,
//         poster: "img/1200x1200bf-60.jpg"
//     },
//     {
//         id:"5",
//         songName:` Live To Tell <br>
//         <div class="subtitle">Madonna</div>`,
//         poster: "img/madonna-true-blue-album-cover.jpg"
//     },
//     {
//         id:"6",
//         songName:` If I Could Turn Back Time <br>
//         <div class="subtitle">Cher</div>`,
//         poster: "img/E4QwJ4cXoAQ2151.jpg"
//     },
//     {
//         id:"7",
//         songName:` Like A Prayer <br>
//         <div class="subtitle">Madonna</div>`,
//         poster: "img/91etw+5xmsL._UF1000,1000_QL80_.jpg"
//     },
//     {
//         id:"8",
//         songName:` Material Girl <br>
//         <div class="subtitle">Madonna</div>`,
//         poster: "img/1900x1900-000000-80-0-0.jpg"
//     },
//     {
//         id:"9",
//         songName:` La Isla Bonita <br>
//         <div class="subtitle">Madonna</div>`,
//         poster: "img/madonna-true-blue-album-cover.jpg"
//     },
// ]

// Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
//     element.getElementsByTagName('img')[0].src = songs[i].poster;
//     element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
// })


// let masterPlay = document.getElementById('master_Play');
// let wave = document.getElementsByClassName('wave')[0];

// masterPlay.addEventListener('click' ,()=>{
//     if (music.paused || music.currentTime <=0) {
//         music.play();
//         masterPlay.classList.remove('bi-play-fill');
//         masterPlay.classList.add('bi-pause-fill');
//         wave.classList.add('active2');
//     } else {
//         music.pause();
//         masterPlay.classList.add('bi-play-fill')
//         masterPlay.classList.remove('bi-pause-fill');
//         wave.classList.remove('active2');
//     }
// } )