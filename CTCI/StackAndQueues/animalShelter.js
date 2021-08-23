/*
An animal shelter, which holds only dogs and cats, operates on a strictly"first in, first 
out" basis. People must adopt either the "oldest" (based on arrival time) of all animals at the shelter, 
or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of 
that type). They cannot select which specific animal they would like. Create the data structures to 
maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog, 
and dequeueCat. You may use the built-in Linked list data structure. 
*/

/* 
    const animalObj = {
        type: "dog" || "cat",
        name: String
    }
*/

class AnimalShelter {
  constructor() {
    this.dogQueue = [];
    this.catQueue = [];
    this.allQueue = [];
  }

  enqueue(animal) {
    if (animal.type === "dog") {
      this.dogQueue.push(animal);
    } else {
      this.catQueue.push(animal);
    }
    this.allQueue.push(animal);
  }

  dequeueDog() {}
  dequeueCat() {}
  dequeueAny() {}
}
