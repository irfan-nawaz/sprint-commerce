import React from 'react'
import { useQuery } from '@tanstack/react-query'

import { useNavigate } from 'react-router-dom'
import { useFilter } from '../../../../context/filter/filterContext'
// import getCategories from '../../../../querys/getCategories'
import 

export default function Grid() {
  const navigate = useNavigate()
  const filter = useFilter()
  const categories = useQuery(['categories'], async function getCategories() {
    const {
      status,
      data: { categories },
    } = await fetchCategories('https://sprint/sprint-api/v1/categories')
    console.log('this is a catogeries list')
    if (status === 200) {
      return categories
    } else {
      return 'no data available'
    }
  })
  console.log(categories, 'categories.data')
  return (
    <div>
      <section class="collections">
        <h2>Shop by Category</h2>
        <ul>
          {categories.map((n, i) => (
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
