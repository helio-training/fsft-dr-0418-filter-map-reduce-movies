import React, { Component, Fragment } from 'react'

import {byYear, yearRange} from '../filters'
import Movie from './Movie'

export default class extends Component {
  state = {
    after: 1900,
    before: 2016,
    movies: []
  }
  
  renderMovies = (after, before) => {
    return yearRange(after, before).map(film => <Movie picture={film}/> )
  }
  
  submitHandler = (event) => {
    event.preventDefault()
    this.setState({movies: this.renderMovies(this.state.after, this.state.before)})
  }
  
  render() {
    return (
      <Fragment>
        <form onSubmit={this.submitHandler}>
          Pick Years Between:
          <input type="number"
                 placeholder="1900"
                 min={1900}
                 max={2016}
                 onChange={event => this.setState({after: event.target.value})}
          />
          { " and: " }
          <input type="number"
                 placeholder="2016"
                 min={1900}
                 max={2016}
                 onChange={event => this.setState({before: event.target.value})}
          />
          <input type="submit" value="Search"/>
        </form>
        <div className="flexyMcFlex">
          {this.state.movies}
        </div>
      </Fragment>
    )
  }
}