let song; 
let amplitude; 

function preload() {
    song = loadSound('audio/01.mp3');
    }

    function setup () {
    createCanvas(windowWidth, windowheight);
    amplitude = new p5.Amplitude();
    song.setInput(song);
    }

    function draw () {
        const level = amplitude.getLevel();