import { v4 as uuid } from 'uuid'

import { casual, fitness, track, sports, men, women } from '../../assets/index'

export const fetchCategories = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://sprint/sprint-api/v1/categories') {
        resolve({
          status: 200,
          message: 'success',
          data: {
            categories: [
              {
                _id: uuid(),
                categoryName: 'casual',
                imgSrc: casual,
              },
              {
                _id: uuid(),
                categoryName: 'fitness',
                imgSrc: fitness,
              },
              {
                _id: uuid(),
                categoryName: 'track',
                imgSrc: track,
              },
              {
                _id: uuid(),
                categoryName: 'sports',
                imgSrc: sports,
              },
              {
                _id: uuid(),
                categoryName: 'mens',
                imgSrc: men,
              },
              {
                _id: uuid(),
                categoryName: 'womens',
                imgSrc: women,
              },
            ],
          },
        })
      } else {
        reject({
          status: 404,
          message: 'Food list not found.',
        })
      }
    })
  })
}

// export const categories = [
//   {
//     _id: uuid(),
//     categoryName: 'casual',
//     imgSrc: casual,
//   },
//   {
//     _id: uuid(),
//     categoryName: 'fitness',
//     imgSrc: fitness,
//   },
//   {
//     _id: uuid(),
//     categoryName: 'track',
//     imgSrc: track,
//   },
//   {
//     _id: uuid(),
//     categoryName: 'sports',
//     imgSrc: sports,
//   },
//   {
//     _id: uuid(),
//     categoryName: 'mens',
//     imgSrc: men,
//   },
//   {
//     _id: uuid(),
//     categoryName: 'womens',
//     imgSrc: women,
//   },
// ]
