class Ball extends BaseRect {
    constructor(x,y,width,height){
       var options={
        restitution : 0.7,
        friction : 1,
        density : 1
        }
        super(x,y,width,height)
        this.image=loadImage("ball1.png")
    }
    display(){
        super.display();
    }
}
