import React from 'react'
import { useQuery } from '@tanstack/react-query'

import { useNavigate } from 'react-router-dom'
import { useFilter } from '../../../../context/filter/filterContext'
import getCategories from '../../../../query/getCategories'
import GridLoader from '../../../../loader/GirdLoader'
import useProducts from '../../../../query/getProducts'
import useFilteredProducts from '../../../../hooks/useFilteredProducts'

export default function Grid() {
  
  console.log(useFilteredProducts)
  const navigate = useNavigate()
  const { filterState, filterDispatch } = useFilter()
  console.log(filterState)
  const categories = useQuery(['categories'], getCategories)
  const products = useQuery(['products', filterState], useProducts)
  console.log(products)

  if (categories.isLoading) return <GridLoader items={6} />
  if (categories.isSuccess)
    return (
      <div>
        <section class="collections">
          <h1>Shop by Category</h1>
          <ul>
            {categories.data.map((n, i) => (
              <li key={n._id}>
                <figure className={`color${i}`}>
                  <img src={n.imgSrc} alt="category" />
                  <figcaption>
                    <p
                      onClick={() => {
                        navigate('/category')
                        filterDispatch({ type: 'menssd' })
                      }}
                    >
                      {n.categoryName}
                    </p>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </section>
      </div>
    )
}
