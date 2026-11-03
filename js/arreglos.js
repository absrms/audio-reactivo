const PALETTE =['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33F3', '#33FFF3', '#F333FF', '#FF8C00', '#8C00FF', '#00FF8C'];
const RADIO = 300;
let half_height = window.innerHeight / 2;
let TIEMPO= 0; 
let frequency= 0.002; 


function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw () {
    background(PALETTE[4]);
    Fill(PALETTE[5]);
    
    for (let x = 0; x<width; x++) {
        let angle =( x* frequency)+TIEMPO;
        let y = sin(angle)*RADIO + half_height;
        rect(x,y,1,1,);
    }
    TIEMPO += 0.1;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    half_height = windowHeight / 2;
}
