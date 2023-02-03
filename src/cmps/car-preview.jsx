export function CarPreview({ car }) {
    return <section className="car-preview">
        <h3>Vendor: {car.vendor}</h3>
        <h3>Speed: {car.speed}</h3>
        <div className="img-container">
            <img src={require(`../assets/img/${car.vendor}.png`)} alt=""></img>
        </div>
    </section>
}