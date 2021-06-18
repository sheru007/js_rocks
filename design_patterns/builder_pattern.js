/*

Builder pattern will help you to separate the construction of a complex 
object from its representations. We can reuse the same construction process 
to create various representations.


*/
class Cake {
    // you can put other properties for your cake <3.
    // I use sugar and strawberry for the demo purpose.
    constructor(hasSugar, hasStrawBerry) {
        this.hasSugar = hasSugar;
        this.hasStrawBerry = hasStrawBerry;
    }
}

class CakeBuilder {
    constructor() {
        this.cake = new Cake();
    }

    withSugar(hasSugar) {
        this.cake.hasSugar = hasSugar;
        return this;
    }

    withStrawberry(hasStrawBerry) {
        this.cake.hasStrawBerry = hasStrawBerry;
        return this;
    }

    makeCake() {
        return this.cake;
    }
}

const firstCakeBuilder = new CakeBuilder();

const cake = firstCakeBuilder.withSugar(true).withStrawberry(true).makeCake();

console.log(cake);