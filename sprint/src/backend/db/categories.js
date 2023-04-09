import { v4 as uuid } from 'uuid';

import {
    casual,
    fitness,
    track,
    sports,
    men,
    women,
} from '../../assets/index'

export const categories = [
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
      categoryName: 'men',
      imgSrc: men,
    },
    {
      _id: uuid(),
      categoryName: 'women',
      imgSrc: women,
    },
  ];