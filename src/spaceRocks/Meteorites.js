import React, { Component, Fragment } from 'react'

import Meteorite from './Meteorite'

export default class extends Component {
  state = {}
  
  
  
  render() {
    const myMeteor = {
      "fall": "Fell",
      "geolocation": {
        "type": "Point",
        "coordinates": [
          6.08333,
          50.775
        ]
      },
      "id": "1",
      "mass": "21",
      "name": "Aachen",
      "nametype": "Valid",
      "recclass": "L5",
      "reclat": "50.775000",
      "reclong": "6.083330",
      "year": "1880-01-01T00:00:00.000"
    }
    return (
      <Fragment>
        <Meteorite meteor={myMeteor}/>
      </Fragment>
    )
  }
}