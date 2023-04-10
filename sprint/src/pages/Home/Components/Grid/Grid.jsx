import React from 'react'
import { categories } from '../../../../backend/db/categories'
import { useNavigate } from 'react-router-dom'

export default function Grid() {
  const navigate = useNavigate()
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
