let options = document.querySelector('.options');
let previous = document.querySelector('#prev');
let play = document.getElementById('play');
let next = document.querySelector('#next');
let slider = document.querySelector('#slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let play_image = document.querySelector('#play_image');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let title = document.querySelector('#title');
let artist = document.querySelector('#artist');
let p_title = document.querySelector('#p-title');
let p_artist = document.querySelector('#p-artist');
let p_song = document.querySelector(".p-song");
let playInPlaylist = document.getElementById('play_list');
let mainPlayer = document.querySelector('.main');
let openPlayer = document.querySelector('#closePlayer');
let alterLibrary = document.querySelector('#library');
let alterShuffle = document.querySelector('#shuffle');
let changeShuffleState = document.querySelector('#shuffle_color');


let timer;
let autoplay = 0;

let index_no = 0;
let playing_song = false;

//create an audio element
let track = document.createElement('audio');



//All songs list 
let All_song = [{
        name: "Number One",
        path: "music/song1.mp3",
        img: "img/1.jpg",
        singer: "Rayvanny x Zuchu",
        album: "Single",
    },

    {
        name: "Do For Love",
        path: "music/song2.mp3",
        img: "img/2.jpg",
        singer: "2pac",
        album: "Single",
    },

    {
        name: "Tanana",
        path: "music/song3.mp3",
        img: "img/3.jpg",
        singer: "Davido x Tiwa Savage",
        album: "A better time",
    },

    {
        name: "Lost",
        path: "music/song4.mp3",
        img: "img/4.jpg",
        singer: "Humble_Savage x Nilla x Bubex x Friday",
        album: "Single",
    },

    {
        name: "Cabin Fever",
        path: "music/song5.mp3",
        img: "img/5.jpg",
        singer: "Jaden Smith",
        album: "CTV3: Cool Tape Version 3",
    },

    {
        name: "Mamiloo",
        path: "music/song6.mp3",
        img: "img/6.jpg",
        singer: "Dj Seven x Conboi x Salmin Swaggs",
        album: "Single",
    },

    {
        name: "Fly Far",
        path: "music/song7.mp3",
        img: "img/7.jpg",
        singer: "August Alsina",
        album: "PRODUCT III: State of Emergency (Emerge & see)",
    },

    {
        name: "U know what it is",
        path: "music/song8.mp3",
        img: "img/8.jpg",
        singer: "Nasty c",
        album: "Single",
    },

    {
        name: "Nuru",
        path: "music/song9.mp3",
        img: "img/9.jpg",
        singer: "Lady Jay Dee",
        album: "Single",
    },

    {
        name: "Wambela",
        path: "music/song10.mp3",
        img: "img/10.jpg",
        singer: "Jux x Ruby",
        album: "The Love Album",
    },

    {
        name: "Lucid Dreams",
        path: "music/song11.mp3",
        img: "img/11.jpg",
        singer: "Juice wrld",
        album: "Goodbye & Good Riddance",
    },

    {
        name: "Sound",
        path: "music/song12.mp3",
        img: "img/12.jpg",
        singer: "Fireboy DML",
        album: "APOLLO",
    },

    {
        name: "Soldier Boy",
        path: "music/song13.mp3",
        img: "img/13.jpg",
        singer: "Falz x Simi",
        album: "Single",
    },

    {
        name: "Ballin",
        path: "music/song14.mp3",
        img: "img/14.jpg",
        singer: "Mustard & Roddy Rich",
        album: "Perfect Ten",
    },

    {
        name: "Ojuelegba",
        path: "music/song15.mp3",
        img: "img/15.jpg",
        singer: "Wizkid",
        album: "Ayo",
    },

    {
        name: "Bullshit",
        path: "music/song16.mp3",
        img: "img/16.jpg",
        singer: "Danileigh",
        album: "In My Feelings",
    },

    {
        name: "Temptation",
        path: "music/song17.mp3",
        img: "img/17.jpg",
        singer: "Tiwa Savage x Sam Smith",
        album: "Celia",
    },

    {
        name: "Be Like That",
        path: "music/song18.mp3",
        img: "img/18.jpg",
        singer: "Kane Brown x Khalid x Swae Lee",
        album: "single",
    },

    {
        name: "Laugh Now Cry Later",
        path: "music/song19.mp3",
        img: "img/19.jpg",
        singer: "Drake x Lil Durk",
        album: "single",
    },

    {
        name: "Authors Of Forever",
        path: "music/song20.mp3",
        img: "img/20.jpg",
        singer: "Alicia Keys",
        album: "single",
    },

    {
        name: "Vunga",
        path: "music/song21.mp3",
        img: "img/21.jpg",
        singer: "Rapcha",
        album: "single",
    },

    {
        name: "Just Like Magic",
        path: "music/song22.mp3",
        img: "img/22.jpg",
        singer: "Ariana Grande",
        Album: "Positions",
    },
];

//All_song for song list


const randomSong = Math.floor(Math.random() * All_song.length);

//All functions


//function load the track
function load_track(index_no) {
    reset_slider();
    All_song.sort(function(a, b) {
        if (a.singer < b.singer) {
            return -1;
        }
        if (a.singer > b.singer) {
            return 1;
        }
        return 0;
    })
    track.src = All_song[index_no].path;
    title.innerHTML = All_song[index_no].name;
    track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

    timer = setInterval(range_slider, 1000);
}

load_track(index_no);

//reset slider
function reset_slider() {
    slider.value = 0;
}

//checking the song status
function justplay() {
    if (playing_song == false) {
        playsong();
    } else {
        pausesong();
    }
}

//play song 
function playsong() {
    track.play();
    playing_song = true;
    play.innerHTML = '<i class="bx bx-pause"></i>';
}

//pause song 
function pausesong() {
    track.pause();
    playing_song = false;
    play.innerHTML = '<i class="bx bx-play"></i>';
}

//next song 
function next_song() {
    if (index_no < All_song.length - 1) {
        index_no += 1;
        load_track(index_no);
        playsong();

    } else {
        index_no = 0;
        load_track(index_no);
        playsong();
    }

}

//previous song
function previous_song() {
    if (index_no > 0) {
        index_no -= 1;
        load_track(index_no);
        playsong();
    } else {
        index_no = All_song.length;
        load_track(index_no);
        playsong();
    }
}

//change duration
function change_duration() {
    slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;
}

function range_slider() {
    let position = 0;

    //update position
    if (!isNaN(track.duration)) {
        position = track.currentTime * (100 / track.duration);
        slider.value = position;
    }
}

//Opens up the playlist
function open_p() {
    playlist.classList.toggle('active');
}

function sidebar() {
    options.classList.toggle('active2');
}

var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');

btn.onclick = function() {
    modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//List of all songs

buildList(All_song);

function buildList(data) {
    var table = document.getElementById('myMusic');

    for (var i = 0; i < data.length; i++) {
        var row = `<tr>
                        <td>${data[i].singer}</td>
                        <td>${data[i].name}</td>
                        <td>${data[i].album}</td>
                    </tr>`

        table.innerHTML += row;

        row.onclick = function() {
            console.log("True");
        }
    }
}


let toggleLibrary = false;

function updateLibrary() {
    if (toggleLibrary == false) {
        openLibrary();
    } else {
        closeLibrary();
    }
}

function openLibrary() {
    toggleLibrary = true;
    alterLibrary.style.display = "block";
}

function closeLibrary() {
    toggleLibrary = false;
    alterLibrary.style.display = "none";
}