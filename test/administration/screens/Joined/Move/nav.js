





const load = (items) => {
    for (var i in items) {
        pages[i] = items[i];
    }
}


//Chung 
import Booking from './Booking/nav'
load(Matching)

import CarDriver from './CarDriver/nav'
load(CarDriver)

import CarRental from './CarRental/nav'
load(Matching)

import Matching from './Matching/nav'
load(Matching)

import Mission from './Mission/nav'
load(Matching)


export default pages;
