/*
Abstract factory pattern provides an interface for creating families of 
related or dependent objects without specifying their concrete classes. 
In other words, it is a factory of factories.

*/

class Car {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }
}

class MercedesFactory {
    create(name) {
        switch (name) {
            case 'C300':
                return new Car(name, 2000, 'This is C300');
            case 'Maybach':
                return new Car(name, 5000, 'This is Maybach');
            default:
                return null;
        }
    }
}

class BMWFactory {
    create(name) {
        switch (name) {
            case 'X5':
                return new Car(name, 1000, 'This is X5');
            case 'X6':
                return new Car(name, 2000, 'This is X6');
            default:
                return null;
        }
    }
}

class CarAbstractFactory {
    static getFactory(type) {
        switch (type) {
            case 'Mercedes':
                return new MercedesFactory();
            case 'BMW':
                return new BMWFactory();
            default:
                return null;
        }
    }
}

const mercedesFactory = CarAbstractFactory.getFactory('Mercedes');

const car = mercedesFactory.create('Maybach');
console.log(car);