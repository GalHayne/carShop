import { CarPreview } from "./car-preview"

export function CarList(props) {
    const cars = props.cars;
    return <section className="car-list">
        {cars.map(car => <CarPreview car={car} key={car.id} onSelectCar={props.onSelectCar} />)}
    </section>





}