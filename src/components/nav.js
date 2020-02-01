
import { Link } from "gatsby"
import React from "react"

const Navbar = ({siteTitle}) => {
    return (
        <nav>
            <div className="siteName">
                {siteTitle}
            </div>
        
            <input type="checkbox" id="nav-toggle" />
            <label htmlFor="nav-toggle" className="burger-menu">&#9776;</label>

            <div className="siteMenuLinks">
                <a href="#">About Us</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </div>         

        </nav>
    )
}

export default Navbar