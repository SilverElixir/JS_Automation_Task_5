import Car from './car_class.js';
import Airplane from './airplane_class.js';

const car = new Car('BMW X1', 2020, '230');
Car.fillInFuel(car);
car.ignite();
car.drive();
console.log('----------------------------------------------------------');

const wizzairPlane = new Airplane('Airbus A321ceo', 2014, '903', 'Wizzair', true);
const lufthansaPlane = new Airplane('Boeing 747-8', 2017, '920', 'Lufthansa', false);
Airplane.fillInFuel(wizzairPlane);
wizzairPlane.ignite();
wizzairPlane.fly();
console.log('----------------------------------------------------------');
