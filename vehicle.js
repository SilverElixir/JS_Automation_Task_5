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
        console.log(`${this.type} is ready for a start`)
    }
}

//export default Vehicle
//export {displayInfo, ignite}

//export default class Vehicle {};