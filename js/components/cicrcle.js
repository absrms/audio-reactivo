export default class Circle {
    constructor() {
        this.fill = null; 
        this.stroke = 'pink'
        this.radio = random(10,50);
    }

    resize () {
        this.radio = random(10,50);
        
    }
    draw () {
        this.fill(this.fill);
        this.stroke(this.stroke);
        strokeWeight(this.strokeWeight);
        Circle(this.x,this.y,this.radio);
    }
}