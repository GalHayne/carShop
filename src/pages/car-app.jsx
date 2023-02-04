import React from "react"

import { carService } from '../services/car.service'
import { CarList } from "../cmps/car-list"
import { CarFilter } from "../cmps/car-filter"
import { CarDetails } from "../cmps/car-details"

export class CarApp extends React.Component {
    state = {
        cars: [],
        filterBy: null,
        selectedCar: null
    }

    componentDidMount() {
        this.loadCars();
    }

    loadCars = () => {
        carService.query(this.state.filterBy)
            .then(cars => {
                this.setState({ cars })
            })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => {
            this.loadCars()
        })
    }

    onSelectCar = (car) => {
        this.setState({ selectedCar: car })

    }

    onRemoveCar = (carId) => {
        carService.remove(carId)
            .then(() => {
                this.loadCars();
                this.onSelectCar(null);
            });
    }

    render() {
        const { cars, selectedCar } = this.state;
        return <section className="car-app">
            {!selectedCar && <React.Fragment>

                <CarFilter onSetFilter={this.onSetFilter} />
                <CarList cars={cars} onSelectCar={this.onSelectCar} />
            </React.Fragment>
            }

            {selectedCar && <CarDetails car={selectedCar} onRemoveCar={this.onRemoveCar} onGoBack={() => { this.onSelectCar(null) }} />}

        </section>

    }
}