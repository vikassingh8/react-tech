import React from 'react'
import Header from './components/Header'
import "./style/App.css"
import{BrowserRouter, Routes,Route} from "react-router-dom"
import Home from './components/Home'
import Contact from './components/Contact'
import Footer from "./components/Footer"
import Services from './components/Services'
import "./style/mediaquary.css"


export default function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='services' element={<Services/>}/>
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </>
  )
}
