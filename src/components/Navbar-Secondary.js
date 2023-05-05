import './css/Navbar-Secondary.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { NavLink } from'react-router-dom'

export default function NavbarSecondary(){

    const [navBarOpen, setNavBarOpen] = useState(false)

    function toggleNavBar(){
        setNavBarOpen(prevState=> !prevState)
    }

    return(
        <nav className="navbar-secondary container">
            <ul className="nav-list-secondary" data-visible = {navBarOpen}>
                <li className="nav-list-item-secondary">
                    <NavLink to="/groomingservices">Grooming Services</NavLink>
                </li>
                <li className="nav-list-item-secondary">
                    <NavLink to="/">Shop</NavLink>
                </li>
                <li className="nav-list-item-secondary">Health & Advice</li>
                <li className="nav-list-item-secondary">Adopt</li>
                <li className="nav-list-item-secondary">Foster Care</li>
            </ul>
            <FontAwesomeIcon icon={navBarOpen? faClose: faBars} className="hamburger" onClick={toggleNavBar}></FontAwesomeIcon>
        </nav>
    )
}