import Movies from '../data/movies'

export const byYear = (year = 2000) => Movies.filter(film => film.year === year)

export const yearRange = (after = 1900, before = 2016) =>
  Movies.filter(film => (film.year >= after && film.year <= before) )