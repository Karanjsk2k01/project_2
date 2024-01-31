import React, { Fragment } from 'react'
import './Navbar.css'
import NavbarCartButton from './NavbarCartButton'

const Navbar = () => {
  return (
    <Fragment>
      <header className="header">
        <h3>Clothify</h3>
        <NavbarCartButton />
      </header>
      <div className="main-image">
        <img src="https://img.freepik.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg" alt="A Quality Cloth at the Right Place" />
      </div>
    </Fragment>
  )
}

export default Navbar;