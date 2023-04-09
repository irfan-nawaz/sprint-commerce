import React from 'react'
// import '../../Home.css'
import img from '../../../../assets/banners/hero_1200.jpg'

export default function Hero() {
  return (
    <div>
      <section id="hero">
        <picture>
          <img src={img} alt="" />
        </picture>
      </section>
    </div>
  )
}
