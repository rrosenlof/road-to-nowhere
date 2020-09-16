import React from 'react';
import Byrne from "../static/byrne.gif"

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageStatus: props.imageStatus
    }

    this.handleImageLoaded = this.handleImageLoaded.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.imageStatus !== prevProps.imageStatus) {
      this.setState({ imageStatus: this.props.imageStatus })
    }
  }

  handleImageLoaded() {
    this.setState({ imageStatus: "loaded" });
  }

  renderSpinner() {
    if (this.state.imageStatus === "loaded") {
      return null;
    }
    return <img style={{ width: `70px`, marginBottom: 0 }} src={Byrne} alt="talking heads gif" />
  }

  renderImage() {
    if (!this.props.address) {
      return (
        <div></div>
      )
    } else {
      return (
        <div>
          <img onLoad={this.handleImageLoaded}
            src={`https://www.mapquestapi.com/staticmap/v5/map?key=${process.env.GATSBY_MAPQUEST_KEY}&center=${this.props.address['latitude']},${this.props.address['longitude']}&zoom=16&scalebar=false&traffic=false&size=800,800@2x&type=sat`}
            alt='Selected map area'
          />
        </div>
      );
    }
  }

  render() {
    return <div>
      {this.renderSpinner()}
      {this.renderImage()}
    </div>
  }
}

export default Map