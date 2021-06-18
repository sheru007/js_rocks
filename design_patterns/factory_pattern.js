/*
Factory pattern defines an interface for creating a single object, 
but let subclasses decide which class to instantiate. Factory Method 
lets a class defer instantiation to subclasses.


*/

class AppleProduct {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }
}

class AppleProductFactory {
    static create(name) {
        switch (name) {
            case 'Iphone 12':
                return new AppleProduct(name, 2000, 'This is Iphone 12');
            case 'Ipad Pro 2021':
                return new AppleProduct(name, 2000, 'This is Ipad Pro 2021');
            default:
                return null;
        }
    }
}

const firstProduct = AppleProductFactory.create('Iphone 12');
const secondProduct = AppleProductFactory.create('Ipad Pro 2021');

console.log(firstProduct);
console.log(secondProduct);