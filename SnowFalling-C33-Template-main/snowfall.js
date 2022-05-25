class Snowfall{
    constructor() {
        var option = {isStatic:false}
        this.snowfall = Bodies.rectangle(random(1,800),0,10,10,option)
        World.add(world,this.snowfall)
        this.trajectory = [];
       this.snowImg = loadImage("snow5.webp");
    }

    display(){
        image(this.snowImg,this.snowfall.position.x,this.snowfall.position.y,10,10)
       
    }
} 