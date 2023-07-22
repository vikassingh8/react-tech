import React from 'react'
import { Outlet} from 'react-router-dom'
import {HashLink} from "react-router-hash-link"
import "../style/contact.css"
export default function Contact() {
  return (
    <>
      <div className="contact">
        <main>
          <h1>contact us </h1>
        
        <form action="#">
          <div>
            <label htmlFor="name">name</label>
            <input type="text" id="name" required placeholder='enter your name' />
          </div>
          <div>
            <label htmlFor="name">email</label>
            <input type="email" id="email" required placeholder='enter your email' />
          </div>
          <div>
            <label htmlFor="message">message</label>
            <input type="text" id="message" required placeholder='enter your query..' />
          </div>
          <button type='submit'>submit</button>
        </form>
          </main>  
      </div>
      <HashLink to="/#about">about</HashLink>
      
    </>
  )
}
