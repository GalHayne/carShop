import { storageService } from "./storage.service";
import { utilService } from "./util.service";

export const carService = {
    getById,
    query,
    add,
    update,
    remove,
}

const KEY = 'carsDB';
let gVendors = ["audi", 'fiat', 'suzuki', 'honda', 'mazda'];

function query() {
    let cars = _loadFromStorage();
    if (!cars) {
        cars = _createCars();
        _saveToStorage(cars);
    }

    return Promise.resolve(cars);
}

function getById(carId) {
    const cars = _loadFromStorage();
    const car = cars.find(car => carId === car.id);

    return Promise.resolve(car);
}

function remove(carId) {
    let cars = _loadFromStorage();
    cars = cars.filter(car => car.id !== carId);
    _saveToStorage(cars);
    return Promise.resolve();
}


function add(vendor, speed) {
    let cars = _loadFromStorage();
    const car = _createCar(vendor, speed);
    cars = [car, ...cars];
    _saveToStorage(cars);
    return Promise.resolve(car);
}


function update(carId, speed) {
    let cars = _loadFromStorage();
    let car = cars.find(car => car.id === carId);
    car = { ...car, speed };
    _saveToStorage(cars);
    return Promise.resolve(car);
}

function _createCars() {
    const cars = []
    for (let i = 0; i < 20; ++i) {
        const vendor = gVendors[utilService.getRandomIntInclusive(0, gVendors.length - 1)];
        cars.push(_createCar(vendor));

    }

    return cars;
}

function _createCar(vendor, speed = utilService.getRandomIntInclusive(1, 200)) {
    return {
        id: utilService.makeId(),
        vendor,
        speed,
        desc: utilService.makeLorem(),
    }
}

function _saveToStorage(cars) {
    storageService.saveToStorage(KEY, cars);
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY);
}