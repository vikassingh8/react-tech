import React from 'react'
import {Carousel} from "react-responsive-carousel"
import img from "../assets/3.jpg"
import img1 from "../assets/4.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"

export default function Services() {
  return (
    <div>
      <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000} showThumbs={false}>
        <div>
          <img src={img} alt="services1" />
          <p className='legend'>full stack</p>
        </div>
        <div>
          <img src={img1} alt="services2" />
          <p className='lagend'>web devolpment</p>
        </div>
      </Carousel>
    </div>
  )
}

