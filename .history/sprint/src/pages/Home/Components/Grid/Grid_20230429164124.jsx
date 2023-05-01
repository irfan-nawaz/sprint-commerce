import React from 'react'
import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'

import { useNavigate } from 'react-router-dom'
import { useFilter } from '../../../../context/filter/filterContext'
import getCategories from '../../../../querys/getCategories'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Grid() {
  const navigate = useNavigate()
  const filter = useFilter()
  const categories = useQuery(['categories'], getCategories)
  // const [categories, setCategories] = useState([])
  // useEffect(() => {
  //   const getRecipes = async () => {
  //     try {
  //       const {
  //         status,
  //         data: { categories },
  //       } = await fetchCategories('https://sprint/sprint-api/v1/categories')
  //       if (status === 200) {
  //         setCategories(categories)
  //         console.log('hello', categories)
  //       }
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }

  //   getRecipes()
  // }, [])

  console.log(categories, 'categories.data')
  if (categories.isLoading)
    return (
      <section class="collections">
        <Skeleton />
        <ul>
          {['a', 'b', 'c', 'd', 'e', 'f'].map((n, i) => (
            <li key={n._id}>
              <Skeleton height={400} className="collections figure" style={{border: ''}}/>
            </li>
          ))}
        </ul>
      </section>
    )
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
