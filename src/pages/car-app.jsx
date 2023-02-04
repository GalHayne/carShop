import React from "react"

import { carService } from '../services/car.service'
import { CarList } from "../cmps/car-list"
import { CarFilter } from "../cmps/car-filter"

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
                console.log(cars);
                this.setState({ cars })
            })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => {
            this.loadCars()
        })

    }

    render() {
        const { cars } = this.state;
        return <section className="car-app">
            <CarFilter onSetFilter={this.onSetFilter} />
            <CarList cars={cars} />
        </section>
    }
}