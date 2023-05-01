import React from 'react'
import ProductCard from '../../../../components/Card/ProductCard/ProductCard'
import { useFilter } from '../../../../context/filter/filterContext'

export default function ProductList() {
  const filter = useFilter()
  console.log(filter, 'this is ')
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
