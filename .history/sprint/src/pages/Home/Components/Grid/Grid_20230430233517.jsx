import React from 'react'
import { useQuery } from '@tanstack/react-query'

import { useNavigate } from 'react-router-dom'
import { useFilter } from '../../../../context/filter/filterContext'
import getCategories from '../../../../query/getCategories'
import GridLoader from '../../../../loader/GirdLoader'
import useProducts from '../../../../reducer/useProducts'

export default function Grid() {
  const navigate = useNavigate()
  const filter = useFilter()
  const categories = useQuery(['categories'], getCategories)

  const [query, list, dispatch] = useProducts()
  query.isSuccess && console.log(query, list, dispatch, 'from custom hook')

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
                        filter.filterCategory(n.categoryName)
                        dispatch('mens')
                        return console.log(dispatch('mens'))
                        // filter.Products('mens')
                      }}
                    >
                      {n.categoryName}
                    </p>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
          <h1>{list.0}</h1>
        </section>
      </div>
    )
}
