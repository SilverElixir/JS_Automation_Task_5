import Vehicle from './vehicle.js';

export default class Car extends Vehicle{
    constructor(vehicleModel, vehicleYear, maxSpeed){
        super(vehicleModel, vehicleYear, maxSpeed);
        this.type = "Car";
    }

    drive(){
        console.log('Driving back and forth around the city! 🚗');
    }
}

//export default new Car();
//export default class Car {};

//
class Motorcycle extends Vehicle{
    constructor(vehicleModel, vehicleYear, maxSpeed){
        super(vehicleModel, vehicleYear, maxSpeed);
        this.type = "Motorcycle";
    }

    driveCrazy(){
        console.log('Driving a motorcycle off-road!🏍️')
    }
}