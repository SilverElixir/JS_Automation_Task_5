import {Car} from './car_class.js';
import {Airplane} from './airplane_class.js';

const car = new Car('BMW X1', 2020, '230');
car.ignite();
car.drive();

const wizzairPlane = new Airplane('Airbus A321ceo', 2014, '903', 'Wizzair', true);
const lufthansaPlane = new Airplane('Boeing 747-8', 2017, '920', 'Lufthansa', false);

wizzairPlane.ignite();
wizzairPlane.drive();

