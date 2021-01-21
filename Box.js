class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
  }
  display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill(rgb(135, 206, 234));
    strokeWeight(1);
    rect(pos.x, pos.y, this.width, this.height);
  }
};
