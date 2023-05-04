import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useFilter } from '../../../../context/filter/filterContext'

import getCategories from '../../../../query/getCategories'
import GridLoader from '../../../../loader/GirdLoader'

export default function Grid() {
  const navigate = useNavigate()
  const categories = useQuery(['categories'], getCategories)
  const filter = useFilter()

  if (categories.isLoading && filter.productsQuery.isLoading)
    return <GridLoader items={6} />
  if (categories.isSuccess && filter.productsQuery.isSuccess)
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
                        // filter.dispatchCategory('mens')
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
