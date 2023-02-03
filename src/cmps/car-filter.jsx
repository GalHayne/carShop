import React from "react";

export class CarFilter extends React.Component {

    state = {
        filterBy: {
            vendor: '',
            minSpeed: '',
            maxSpeed: '',

        }
    }

    handleVendorChange = ({ target }) => {
        const { value } = target;
        this.setState({ filterBy: { ...this.state.filterBy, vendor: value } })
    }

    handleMinSpeedChange = ({ target }) => {
        const { value } = target;
        this.setState({ filterBy: { ...this.state.filterBy, minSpeed: value } })
    }

    handleMaxSpeedChange = ({ target }) => {
        const { value } = target;
        this.setState({ filterBy: { ...this.state.filterBy, maxSpeed: value } })
    }

    componentDidUpdate() {

    }



    render() {
        const { vendor, minSpeed, maxSpeed } = this.state.filterBy;
        return <section className="car-filter">
            Filter By
            <form>
                <label htmlFor="by-vendor">Vender:</label>
                <input id="by-vendor" type="text" value={vendor} onChange={this.handleVendorChange} />
            </form>

            <form>
                <label htmlFor="by-min-speed">Minimum Speed:</label>
                <input id="by-min-speed" type="number" value={minSpeed} onChange={this.handleMinSpeedChange} />
            </form>

            <form>
                <label htmlFor="by-max-speed">Maximum Speed:</label>
                <input id="by-max-speed" type="number" value={maxSpeed} onChange={this.handleMaxSpeedChange} />
            </form>
        </section>
    }

}