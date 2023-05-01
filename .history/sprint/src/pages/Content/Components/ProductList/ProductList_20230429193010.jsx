import React from 'react'
import ProductCard from '../../../../components/Card/ProductCard/ProductCard'
import {useF}

export default function ProductList() {
  const filter = useFilter()
  return (
    <div class="products-container">
      <section id="cards">
        <div className="articlewrap">
          {filter.productList.map((data) => (
            <ProductCard data={data} />
          ))}
        </div>
      </section>
    </div>
  )
}
