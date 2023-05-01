import React from 'react'
import ProductCard from '../../../../components/Card/ProductCard/ProductCard'
import { useFilter } from '../../../../context/filter/filterContext'

export default function ProductList() {
  const filter = useFilter()
  console.log(filter, 'this is a filter')
  if (filter.products.isLoading) return <></>
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
