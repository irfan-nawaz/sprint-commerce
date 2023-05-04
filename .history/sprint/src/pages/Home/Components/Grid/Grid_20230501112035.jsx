import React from 'react'
import { useQuery } from '@tanstack/react-query'
import getProducts from '../../../../query/getProducts'

import { useNavigate } from 'react-router-dom'
import getCategories from '../../../../query/getCategories'
import GridLoader from '../../../../loader/GirdLoader'

const filterReducer = (state, action) => {
  console.log(state)
  switch (action) {
    case 'mens':
      return state.filter((i) => i.categoryName === 'mens')
    default:
      return state
  }
}

export default function Grid() {
  const navigate = useNavigate()
  const categories = useQuery(['categories'], getCategories)

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