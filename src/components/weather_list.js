import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Chart from './weather_chart';
import GoogleMap from './weather_google_map';

class WeatherList extends Component {

  constructor(props) {
    super(props);
  }

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map( weather => weather.main.temp), (temp) => temp - 273);
    //console.log('temps ', temps);
    const pressures = cityData.list.map( weather => weather.main.pressure);
    const humidities = cityData.list.map( weather => weather.main.humidity);
    //const lon = cityData.city.coord.lon;
    //const lat = cityData.city.coord.lat;
    const { lat, lon } = cityData.city.coord;

    return (
      <tr key={name}>
        <td>{name}<GoogleMap lon={lon} lat={lat}/></td>
        <td><Chart data={temps} color="orange" units="C" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="blue" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (C)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>

            { this.props.weather.map( this.renderWeather)}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps)(WeatherList);
