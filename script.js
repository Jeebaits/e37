// Creating a class
class Vehicle{
    constructor(kms){
        this.kms = kms;
        }

    drive(){
        console.log("Driving");
        this.kms += 8;
    }

    reverse(){
        console.log("Reversing");
        if(this.kms <= 0){
            console.log("The car can no longer reverse!");
        } else this.kms -= 4;
    }
    
    info(){
        console.log(`Price:`, this.carCost, `Top Speed:`, this.topSpeed + `KPH`, `Kilometer/s:`, this.kms);
    }
}

class Car extends Vehicle{
    constructor(carCost, topSpeed){
        super(0);
        this.carCost = carCost;
        this.topSpeed = topSpeed;
    }
}

let toyota = new Car(120000, 90, 1999);
let kia = new Car(75000, 60);
let honda = new Car(150000, 120);

for (let index = 0; index < 4; index++) {
        toyota.drive();
    }
toyota.reverse();
toyota.info();

for (let index = 0; index < 3; index++) {
    kia.drive();
}
for (let index = 0; index < 4; index++) {
    kia.reverse();
}
kia.info();

for (let index = 0; index < 3; index++) {
    honda.reverse();
}
honda.info();