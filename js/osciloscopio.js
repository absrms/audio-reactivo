let mic;
let song; 
let fft;

async function setup(){
    createCanvas(windowWidth, windowHeight);
    song = await loadSound('BADRELIGION.mp3`);
     amplitude= new p5.Amplitude();
    fft = new p5.FFT(32);
    fft.setInput(song);
}

async function mousePressed() {
    await userStartAudio();
    song.play();
}
async function draw (){
    background(0);
    let level = amplitude.getLevel();
    const waveform= fft.waveform();
    noFill(); 
    stroke(0,255,120); 
    strokeWeight(2); 
    beginShape();
    for (let i = 0; i<waveform.length; i++){
        const x = map(i, 0, waveform.length, 0, width);
        const y = map(waveform[i], -1, 1, 0, height);
        vertex(x,y); 
    }
    endShape();
}
async function mousePressed() {
    await userStartAudio(); 
    
}

function windowResized() {
    resizeCanvas(windowWidth, win
}