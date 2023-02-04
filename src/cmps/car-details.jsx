export function CarDetails({ car, onGoBack, onRemoveCar }) {
    return <section className="car-details">
        <h3>Vendor: {car.vendor}</h3>
        <h3>Speed: {car.speed}</h3>
        <div className="img-container-review">
            <img src={require(`../assets/img/${car.vendor}.png`)} />
        </div>
        <p>{car.desc}</p>

        <button onClick={onGoBack}>Go Back!</button>
        <button onClick={() => onRemoveCar(car.id)}>Delete</button>
    </section>
}