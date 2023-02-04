export function CarPreview({ car, onSelectCar }) {
    return <section className="car-preview" onClick={() => onSelectCar(car)}>
        <h3>Vendor: {car.vendor}</h3>
        <h3>Speed: {car.speed}</h3>
        <div className="img-container">
            <img src={require(`../assets/img/${car.vendor}.png`)} alt=""></img>
        </div>
    </section>
}