import React from 'react'
import ProductCard from '../../../../components/Card/ProductCard/ProductCard'
import { useFilter } from '../../../../context/filter/filterContext'

export default function ProductList() {
  const filter = useFilter()
  console.log(filter, 'this is a filter')
  if (filter.products.isLoading) return <h1>Loading...</h1>
  if (filter.products.isSuccess)
    return (
      <div class="products-container">
        <section id="cards">
          <div className="articlewrap">
            {filter.filteredList.map((data) => (
              <ProductCard data={data} />
            ))}
          </div>
        </section>
      </div>
    )
}
