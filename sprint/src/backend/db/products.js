import { v4 as uuid } from 'uuid';

import {
    casualT1,
    casualT2,
    fitnessT1,
    fitnessT2,
    trackT1,
    trackT2,
    sportsT1,
    sportsT2,
    mensT1,
    mensT2,
    womensT1,
    womensT2
} from '../../assets/index'

export const products = [
    {
        _id: uuid(),
        title: 'Vans Old Skool',
        price: '5,499',
        categoryName: 'casual',
        inWishlist: true,
        imgSrc: casualT1,
        isBestSeller: true,
        rating: 4.5,
      },
      {
        _id: uuid(),
        title: 'Adidas Gazelle',
        price: '7,799',
        categoryName: 'casual',
        inWishlist: false,
        imgSrc: casualT2,
        rating: 3.0,
      },
      {
        _id: uuid(),
        title: 'Mizuno sneakers',
        price: '13,912',
        categoryName: 'fitness',
        inWishlist: true,
        imgSrc: fitnessT1,
        rating: 3.5,
      },
      {
        _id: uuid(),
        title: 'Reebok Hexaffect',
        price: '7,999',
        categoryName: 'fitness',
        inWishlist: false,
        imgSrc: fitnessT2,
        rating: 3.0,
      },
      {
        _id: uuid(),
        title: 'Air Jordan 1',
        price: '15,788',
        categoryName: 'mens',
        inWishlist: true,
        imgSrc: mensT1,
        rating: 4.5,
      },
      {
        _id: uuid(),
        title: 'Air Force 1',
        price: '13,990',
        categoryName: 'mens',
        inWishlist: false,
        imgSrc: mensT2,
        rating: 4.5,
      },
      {
        _id: uuid(),
        title: 'Asics GT-II',
        price: '7,199',
        categoryName: 'womens',
        inWishlist: true,
        imgSrc: womensT1,
        rating: 4,
      },
      {
        _id: uuid(),
        title: 'Converse Chuck 70',
        price: '5,999',
        categoryName: 'womens',
        inWishlist: true,
        imgSrc: womensT2,
        rating: 4,
      },
      {
        _id: uuid(),
        title: 'Brroks Hyperion Max',
        price: '5,999',
        categoryName: 'track',
        inWishlist: true,
        imgSrc: trackT1,
        rating: 3.5,
      },
      {
        _id: uuid(),
        title: 'Air Zoom Pegasus',
        price: '8,996',
        categoryName: 'track',
        inWishlist: true,
        imgSrc: trackT2,
        rating: 4.5,
      },
      {
        _id: uuid(),
        title: 'New Balance Revlitye',
        price: '5,890',
        categoryName: 'sports',
        inWishlist: true,
        imgSrc: sportsT1,
        rating: 4,
      },
      {
        _id: uuid(),
        title: 'Hummel Liga GK',
        price: '7,199',
        categoryName: 'sports',
        inWishlist: true,
        imgSrc: sportsT2,
        rating: 3.5,
      }

];