// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    let array = []
    array.push(drivers[0])
    array.push(drivers[1])
    return array
}

const returnLastTwoDrivers = function(drivers) {
    let array = []
    array.push(drivers[drivers.length-2])
    array.push(drivers[drivers.length-1])
    
    return array
}



const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(int) {
    return function(fare) {
        return fare * int
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(array, func) {
    return func(array)
}