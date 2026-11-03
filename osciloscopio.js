let mic;
let fft;

function setup(){
    createCanvas(windowWidth, windowHeight);
    mic = new p5.AudioIn();
    fft = new p5.FFT();
    fft.setInput(mic); 
}

function draw (){
    background(10);
    const waveform= fft.waveform ();
    noFill(); 
    sttroke(0,255,120); 
    strokeweight(2); 
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
    mic.start(); 


}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}