import React, { Component } from 'react'

export default class extends Component {
  render() {
    const film = this.props.picture
    return (
      <div className="box">
        <h4>{film.title}</h4>
        <ul>
          <li>Director: {film.director}</li>
          <li>Genre: {film.genre}</li>
          <li>Year: {film.year}</li>
        </ul>
      </div>
    )
  }
}