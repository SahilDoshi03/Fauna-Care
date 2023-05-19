import logo from'../assets/fauna-care-logo.svg'
import './css/Navbar-Primary.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { NavLink } from'react-router-dom'

export default function NavbarPrimary(){

    const [navBarOpen, setNavBarOpen] = useState(false)

    function toggleNavBar(){
        setNavBarOpen(prevState=> !prevState)
    }

    return(
        <nav className="navbar-primary container">
            <NavLink to="/">
                <img src={logo} alt="logo" className='logo'/>
            </NavLink>
            <ul className="nav-list-primary" data-visible = {navBarOpen}>
                <li className="nav-list-item-primary">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="nav-list-item-primary">
                    <NavLink to="/about">About</NavLink>
                </li>
                <li className="nav-list-item-primary">Contact</li>
                <li className="nav-list-item-primary">Cart</li>
                <li className="nav-list-item-primary">Sign In</li>
            </ul>
            <FontAwesomeIcon icon={navBarOpen? faClose: faBars} className="hamburger" onClick={toggleNavBar}></FontAwesomeIcon>
        </nav>
    )
}