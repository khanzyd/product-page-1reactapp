import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
        <nav className="navbar">
            <div id="logo">
            </div>
            <main>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/products"}>Products</Link>
                <Link to={"/testimonials"}>Testimonials</Link>
            </main>
            <div id="buttons">
              <i className="fa-solid fa-magnifying-glass icons"></i>
              <i className="fa-solid fa-bag-shopping icons"></i>
              <button id="contactUs">Contact Us</button>
            </div>
            <span id="ham">|||</span>
        </nav>
    </>

  )
}

export default Header