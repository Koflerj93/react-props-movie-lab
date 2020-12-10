import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import CardBack from './card-components/CardBack.js'
import CardFront from './card-components/CardFront.js'
import movieData from './data.js'   // think of it like you have access to them globally. 
// take the info for movieData and render a card for each object
export default class MovieShowcase extends Component {

  generateMovieCards = () => {
                                                  // props
    return movieData.map(movieEle => <MovieCard movieObject = {movieEle} 
    title = {movieEle.title} IMDBRating = {movieEle.IMDBRating} 
    genres = {movieEle.genres} poster = {movieEle.poster} />) 
    
    // map over your movieData array and return an array of the correct JSX
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}

// title: 
// IMDBRating: 
// genres: 
// poster: 