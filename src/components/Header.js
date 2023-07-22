import React from 'react'
import "../style/header.css"
import {HashLink} from "react-router-hash-link"
const Header = () => {
  return (
    <>
      <nav>
      <h1>techystar..</h1>
      <main>
        <HashLink to="/">home</HashLink>
        <HashLink to="/contact">contact</HashLink>
        <HashLink to="/#about">about</HashLink>
        <HashLink to="/#brands">brand</HashLink>
        <HashLink to="/services">services</HashLink>
        </main>
      </nav>
    </>
  )
}

export default Header
