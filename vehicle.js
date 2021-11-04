export default class Vehicle{
    constructor(vehicleModel, vehicleYear, maxSpeed){
        this.model = vehicleModel;
        this.year = vehicleYear;
        this.maxSpeed = maxSpeed;
    }

   displayInfo(){
        console.log(`Name: ${this.model});
        Year: ${this.year};
        Max Speed: ${this.maxSpeed};
        Type: ${this.type}`);
    }

    ignite(){
        console.log(`${this.model} is preparing to start...`)
    }

    static fillInFuel(vehicle){
        console.log(`Filling the fuel into ${vehicle.model} ${vehicle.type}`);
    }
}
