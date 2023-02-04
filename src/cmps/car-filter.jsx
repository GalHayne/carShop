import React from "react";

export class CarFilter extends React.Component {

    state = {
        filterBy: {
            vendor: '',
            minSpeed: '',
            maxSpeed: '',

        }
    }

    handleChange = ({ target }) => {
        const value = target.type === 'number' ? + target.value : target.value;
        const { name } = target;
        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, [name]: value } }))
    }

    filterCars = () => {
        this.props.onSetFilter(this.state.filterBy)
    }

    render() {
        const { vendor, minSpeed, maxSpeed } = this.state.filterBy;
        return <section className="car-filter">
            Filter By
            <form>
                <label htmlFor="by-vendor">Vender:</label>
                <input id="by-vendor" type="text" value={vendor} onChange={this.handleChange} name="vendor" />
            </form>

            <form>
                <label htmlFor="by-min-speed">Minimum Speed:</label>
                <input id="by-min-speed" type="number" value={minSpeed} onChange={this.handleChange} name="minSpeed" />
            </form>

            <form>
                <label htmlFor="by-max-speed">Maximum Speed:</label>
                <input id="by-max-speed" type="number" value={maxSpeed} onChange={this.handleChange} name="maxSpeed" />
            </form>

            <button onClick={this.filterCars} >Filter!</button>
        </section>
    }

}