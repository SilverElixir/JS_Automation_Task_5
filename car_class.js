import Vehicle from './vehicle.js';

export default class Car extends Vehicle{
    constructor(vehicleModel, vehicleYear, maxSpeed){
        super(vehicleModel, vehicleYear, maxSpeed);
        this.type = "car";
    }

    drive(){
        console.log('Driving back and forth around the city! 🚗');
    }
}


class Motorcycle extends Vehicle{
    constructor(vehicleModel, vehicleYear, maxSpeed){
        super(vehicleModel, vehicleYear, maxSpeed);
        this.type = "motorcycle";
    }

    driveCrazy(){
        console.log('Driving a motorcycle off-road!🏍️')
    }
}