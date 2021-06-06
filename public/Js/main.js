let playlist = document.querySelector('.playlist');
let options = document.querySelector('.options');
let button = document.getElementsById('play-btn');
let previous = document.querySelector('#prev');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let slider = document.querySelector('#slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let title = document.querySelector('#title');
let artist = document.querySelector('#artist');

let timer;
let autoplay = 0;

let index_no = 0;
let playing_song = false;

//create an audio element
let track = document.createElement('audio');

//All songs list 
let All_song = [{
        name: "First Song",
        path: "music/song1.mp3",
        img: "img/1.jpg",
        singer: "First Singer",
    },

    {
        name: "Second Song",
        path: "music/song3.mp3",
        img: "img/2.jpg",
        singer: "Second Singer",
    },

    {
        name: "Third Song",
        path: "music/song4.mp3",
        img: "img/3.jpg",
        singer: "Third Singer",
    },

    {
        name: "Fourth Song",
        path: "music/song5.mp3",
        img: "img/4.jpg",
        singer: "Fourth Singer"
    },

    {
        name: "Fifth Song",
        path: "music/song1.mp3",
        img: "img/5.jpg",
        singer: "Fifth Singer",
    }
];

//All functions


//function load the track
function load_track(index_no) {
    track.src = All_song[index_no].path;
    title.innerHTML = All_song[index_no].name;
    track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();
}

load_track(index_no);

//checking the song status
if (playing_song == false) {
    playsong();
} else {
    pausesong();
}

//play song 
function playsong() {
    track.play();
    playing_song = true;
    play.innerHTML = '<i class="bx bx-pause"></i>'
}

function open_p() {
    playlist.classList.toggle('active');
}

function sidebar() {
    options.classList.toggle('active2');
}