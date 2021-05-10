class Form {

  constructor() {
    this.input = createInput("Your Animal's Name");
    this.button = createButton('play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Infinite Animal Race");
    this.title.position(displayWidth/2 - 100, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
2
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.title.hide();
      animal.name = this.input.value();
      animalCount+=1;
      animal.index = animalCount;
      animal.update();
      animal.updateCount(animalCount);
      this.greeting.html("Welcome " + animal.name + " , press the right arrow to move forward" )
      this.greeting.position(displayWidth/2 - 100, displayHeight/4);
    });

  }
}
