import React from 'react'
import ProductCard from '../../../../components/Card/ProductCard'
import { useProducts } from '../../../../context/product/productContext'

export default function ProductList() {
  const products = useProducts()
  return (
    <div class="products-container">
      <section id="cards">
        <div class="articlewrap">
          {products.map((data) => (
            <ProductCard data={data} />
          ))}
        </div>
      </section>
    </div>
  )
}
