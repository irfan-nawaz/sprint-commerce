import React from 'react'
import ProductCard from '../../../../components/Card/ProductCard/ProductCard'
import { useFilter } from '../../../../context/filter/filterContext'
import getProducts from '../../../../query/getProducts'

export default function ProductList() {
  const categories = useQuery(['categories'], getCategories)

  if (categories.isLoading) return <GridLoader items={6} />
  if (categories.isSuccess)
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
