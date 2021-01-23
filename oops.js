// class -> property and methods
// methods -> constructor, prototype and static(can be call without using object)

class student{

    // constructor method
    constructor(name, age=22){
        this.name = name;
        this.age = age;
        console.log("constructor called")
    }

    // prototype method
    message(){
        console.log(`hello ${this.name} with age : ${this.age}`);
    }

    // static method
    static info(){
        console.log("static function");
    }
}

let a = new student("sheru",24);
// a.name = "sheru"
a.message();

let b = new student('heena', 22);
b.message()

student.info()


// inheritance
class parent{
    constructor(){
        console.log("constructor: parent")
    }

    info(){
        console.log("parent name : "+this.name)
    }
}

class child extends parent{
    constructor(name){
        super();
        this.name = name
        console.log("constructor: child")
    }

    info(){
        super.info()
        console.log("child name: " + this.name)
    }
}

let obj = new child("sheru");
obj.info()