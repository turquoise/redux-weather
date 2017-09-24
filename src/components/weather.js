import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBar from './weather_search_bar';
import WeatherList from './weather_list';

class Weather extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <h4 className="weather">Weather</h4>
        <h6>Get a five-day forecast in your favourite cities.</h6>
        <SearchBar />
        <WeatherList />
      </div>
    )
  }
}


export default Weather;
