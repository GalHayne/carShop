import React from "react"

import { carService } from '../services/car.service'
import { CarList } from "../cmps/car-list"
import { CarFilter } from "../cmps/car-filter"

export class CarApp extends React.Component {
    state = {
        cars: [],
    }

    componentDidMount() {

        carService.query()
            .then(cars => this.setState({ cars }))

    }

    render() {
        const { cars } = this.state;
        return <section className="car-app">
            <CarFilter />
            <CarList cars={cars} />
        </section>
    }
}