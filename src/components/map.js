import React from 'react';
import { render } from 'react-dom';

class Map extends React.Component {
  // url = `https://www.mapquestapi.com/staticmap/v5/map?key=${process.env.GATSBY_MAPQUEST_KEY}&center=${this.props.address['latitude']},${this.props.address['longitude']}&zoom=16&scalebar=false&traffic=false&size=800,800@2x&type=sat`;
  render() {
    return <div>
      <img
        src={`https://www.mapquestapi.com/staticmap/v5/map?key=${process.env.GATSBY_MAPQUEST_KEY}&center=${this.props.address['latitude']},${this.props.address['longitude']}&zoom=16&scalebar=false&traffic=false&size=800,800@2x&type=sat`}
        alt='Selected map area'
      />
    </div>
  }
}

export default Map