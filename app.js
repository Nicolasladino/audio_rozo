const album = [
    {
        title: '7 years ',
        artist: 'lukas graham ',
        img: 'assets/img/7years.png',
        song: 'assets/audio/y2mate.com - Lukas Graham  7 Years Official Music Video.mp3'
    },
    {
        title: 'tu sin mi ',
        artist: 'dread mar',
        img: 'assets/img/tu sin mi.jpg',
        song: 'assets/audio/y2mate.com - Dread Mar I  Tu Sin Mi  Video Oficial HD Version .mp3'
    },
    {
        title: 'emociones',
        artist: "hades66",
        img: 'assets/img/emociones.png',
        song: 'assets/audio/y2mate.com - Hades66  Emociones Flagamiindustries.mp3'
    },
    {
        title: 'uwaie',
        artist: 'kapo',
        img: 'assets/img/uwaie.jpg',
        song: '/assets/audio/y2mate.com - UWAIE  Kapo Video Oficial.mp3'
    },
    {
        title: 'Ohnana ',
        artist: 'kapo',
        img: 'assets/img/ohnana.png',
        song: 'assets/audio/y2mate.com - OHNANA  Kapo Video Oficial.mp3'
    }
]

const audio = document.getElementById('audio')

const play = document.getElementById('play')

const pause = document.getElementById('pause')

const forward = document.getElementById('forward')

const rewind = document.getElementById('rewind')

const stop = document.getElementById('stop')

const next = document.getElementById('next')

const previous = document.getElementById('bx-previous')

play.addEventListener('click', () => {
    audio.play()
})

pause.addEventListener('click', () => {
    audio.pause()
})

rewind.addEventListener('click', () => {
    audio.currentTime -= 10
})

forward.addEventListener('click', () => {
    audio.currentTime += 10
})

stop.addEventListener('click', () => {
    audio.pause()
    audio.currentTime = 0
})

next.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % album.length
    loadSong(currentSongIndex)
    audio.play()
})

previous.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + album.length) % album.length
    loadSong(currentSongIndex)
    audio.play()
})

audio.addEventListener('ended', () => {
    currentSongIndex = (currentSongIndex + 1) % album.length
    loadSong(currentSongIndex)
    audio.play()
})


let currentSongIndex = 0

function loadSong(index) {
    const song = album[index]
    audio.src = song.song
    document.querySelector('.player__artist').textContent = song.artist
    document.querySelector('.player__song').textContent = song.title
    document.querySelector('.player__img').src = song.img
}

window.addEventListener('DOMContentLoaded', () => {
    loadSong(currentSongIndex)
})
