import React from 'react'
import ProductCard from '../../../../components/Card/ProductCard/ProductCard'
import { useFilter } from '../../../../context/filter/filterContext'
import GridLoader from '../../../../loader/GirdLoader'

export default function ProductList() {
  const filter = useFilter()
  console.log(filter.state, 'init state')
  if (filter.productsQuery.isLoading) return <GridLoader items={6} />
  if (filter.productsQuery.isSuccess) {
    return (
      <div class="products-container">
        <section id="cards">
          {/* <button
            onClick={() => {
              filter.dispatchCategory('mens')
            }}
          >
            filter
          </button> */}
          <div className="articlewrap">
            {filter.state.map((data) => (
              <ProductCard data={data} />
            ))}
          </div>
        </section>
      </div>
    )
  }
}
