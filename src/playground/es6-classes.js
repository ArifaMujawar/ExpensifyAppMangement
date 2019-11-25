class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hi, I am ${this.name}!`
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }
}
class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += `Their major is ${this.major}`;
        }
        return description;
    }
}
class Traveler extends Person {
    constructor(name, age, homeLocation =''){
        super(name,age);
        this.homeLocation = homeLocation;
    }
    hasLocation(){
        return !!this.homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if(this.hasLocation()){
            greeting += `I am visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}
const me = new Student('Arifa');
    console.log(me.getDescription());

 const you = new Student();
    console.log(you.getDescription());   

const desc = new Traveler('yusra', 10, 'belgaum');
    console.log(desc.getGreeting());    