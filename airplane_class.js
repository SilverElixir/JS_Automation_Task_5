import Vehicle from './vehicle.js';

export class Airplane extends Vehicle{
    constructor(vehicleModel, vehicleYear, maxSpeed, airlines, isLowCostAirline){
        super(vehicleModel, vehicleYear, maxSpeed);
        this.type = "Airplane";
        this.airlines = airlines;
        this.isLowCostAirline = isLowCostAirline;
    }

    fly(){
        console.log('Crew is ready to take off.... Політ нормальний 🧑‍✈️');
    }

    // overriding parent's method
    ignite(){
        console.log(`${this.model} is ready to fly`);
    }
}