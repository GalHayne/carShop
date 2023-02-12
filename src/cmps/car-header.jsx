import { NavLink } from "react-router-dom"

export function HeaderApp() {
    return (
        <header className="car-header">
            <h1>CarShop</h1>
            <nav>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')} exact>Car Shop</NavLink>
                <NavLink to="/home" className={({ isActive }) => (isActive ? 'otherActive' : 'inactive')}>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>About</NavLink>
            </nav>

        </header>
    )
}