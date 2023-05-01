import React from 'react'
import img from '../../../../assets/banners/hero_1200.jpg'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Hero() {
  return (
    <div>
      <section id="hero">
        <picture>
          {<img src={img} alt="" /> }
        </picture>
      </section>
    </div>
  )
}
