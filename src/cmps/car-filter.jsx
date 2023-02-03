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
        console.log(target);
        const { value } = target;
        this.setState({ filterBy: { ...this.state.filterBy, vendor: value } })
    }

    componentDidUpdate() {

    }



    render() {
        const { vendor, minSpeed, maxSpeed } = this.state.filterBy;
        return <section className="car-filter">
            <form>
                <label htmlFor="by-vendor">Vender</label>
                <input id="by-vendor" type="text" value={vendor} onChange={this.handleVendorChange} />

            </form>
        </section>
    }

}