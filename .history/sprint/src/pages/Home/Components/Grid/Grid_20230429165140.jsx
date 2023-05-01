import React from 'react'
import { useQuery } from '@tanstack/react-query'

import { useNavigate } from 'react-router-dom'
import { useFilter } from '../../../../context/filter/filterContext'
import getCategories from '../../../../querys/getCategories'
import GridLoader from '../../../../loaders/GirdLoader'

impoer GridLoader



export default function Grid() {
  const navigate = useNavigate()
  const filter = useFilter()
  const categories = useQuery(['categories'], getCategories)

  console.log(categories, 'categories.data')
  if (categories.isLoading)
    return (
      <section class="collections">
        <h1>
          <Skeleton />
        </h1>
        <ul>
          {['a', 'b', 'c', 'd', 'e', 'f'].map((n, i) => (
            <li key={n._id}>
              <Skeleton height={400} className="figure" />
            </li>
          ))}
        </ul>
      </section>
    )
  if (categories.isSuccess)
    return (
      <div>
        <section class="collections">
          <h2>Shop by Category</h2>
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
