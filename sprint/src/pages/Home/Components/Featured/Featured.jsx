import React from 'react'
// import '../../Home.css'
import img from '../../../../assets/banners/artiom-vallat-CHKaD8uRaDU-unsplash.jpg'

export default function Featured() {
  return (
    <div>
      <section id="featured" class="collections">
        <h2>Featured Collection</h2>
        <figure class="color6">
          <a href="#">
            <img src={img} alt="collection of shoes" />
          </a>
        </figure>
      </section>
    </div>
  )
}
