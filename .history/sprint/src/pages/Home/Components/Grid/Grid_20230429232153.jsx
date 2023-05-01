import React from 'react'
import { useQuery } from '@tanstack/react-query'

import { useNavigate } from 'react-router-dom'
import { useFilter } from '../../../../context/filter/filterContext'
import getCategories from '../../../../query/getCategories'
import GridLoader from '../../../../loader/GirdLoader'

export default function Grid() {
  const navigate = useNavigate()
  const filter = useFilter()
  const categories = useQuery(['categories'], getCategories)

  console.log(categories, 'categories.data')
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
                        // filter.filterCategory(n.categoryName)
                        filter.useProducts()
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
