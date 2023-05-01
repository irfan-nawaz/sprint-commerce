import React from 'react'
import ProductCard from '../../../../components/Card/ProductCard/ProductCard'


export default function ProductList() {
  const filteredList = useProducts()
  return (
    <div class="products-container">
      <section id="cards">
        <div className="articlewrap">
          {filteredList.map((data) => (
            <ProductCard data={data} />
          ))}
        </div>
      </section>
    </div>
  )
}
