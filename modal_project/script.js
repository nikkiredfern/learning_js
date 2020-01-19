  function $(sel) {
    return document.querySelector(sel);
  }

  class Person {
    constructor(name, age, food) {
      this.name = name;
      this.age = Number(age);
      this.food = food;
    }

    yummyFood() {
      console.log(this.name + " thinks " + this.food + " is yummy!");
    }
  }

  class Baby extends Person {
    constructor(name, age, food) {
      super(name, age, food);
      this.babyName = "Henry";
    }
  }

  const nikki = new Baby("Nikki", 36, "chocolate");
  console.log(nikki);
  nikki.yummyFood();
  const tom = new Person("Tom", 36, "chips");
  tom.yummyFood();
