import {hotels, categories} from '../data';

export const filterByCategories = (category) => {
  return [...hotels].filter((item) => item.categoryId === category);
};

export function getCategoryNameById(id) {
  let category = categories.filter((a) => a.id === id);

  if (category.length > 0) {
    return category[0].name;
  }

  return '';
}

export const sortHotels = (id) => {
  let _hotels = [...hotels];

  if (id === 2) {
    const sortByPopular = (a, b) => {
      return parseFloat(a.views) - parseFloat(b.views);
    };
    return _hotels.sort(sortByPopular).reverse();
  } else if (id === 3) {
    const sortByTopRated = (a, b) => {
      return parseFloat(a.ratings) - parseFloat(b.ratings);
    };
    return _hotels.sort(sortByTopRated).reverse();
  }

  return _hotels;
};
