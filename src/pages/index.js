import React from "react"

import Layout from "../components/layout"
import Byrne from "../static/byrne.gif"
import JSONData from "../../content/taco-bells.json"
import STATES from "../../content/states.json"
import Answer from "../components/answer"
import Map from "../components/map"
import { Link } from "gatsby"

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    const add = this.getAddress();
    const u = this.getUrl(add);

    this.state = {
      city: "",
      province: "",
      address: add,
      url: u,
      imageStatus: "loading",
      submitStatus: ""
    }

    this.handleImageLoaded = this.handleImageLoaded.bind(this)
    this.reloadPage = this.reloadPage.bind(this)
  }

  getAddress() {
    const len = Object.keys(JSONData).length;
    const rand = Math.floor(Math.random() * Math.floor(len));
    return JSONData[rand]
  }

  getUrl(address) {
    let url_string = `https://www.mapquestapi.com/staticmap/v5/map?key=${process.env.GATSBY_MAPQUEST_KEY}&center=${address['latitude']},${address['longitude']}&zoom=16&scalebar=false&traffic=false&size=800,800@2x&type=sat`
    return url_string
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    this.setState({
      submitStatus: "answered"
    })
    event.preventDefault();
    console.log(this.state);
  }

  handleImageLoaded() {
    this.setState({ imageStatus: "loaded" });
  }

  renderSpinner() {
    if (this.state.imageStatus === "loaded") {
      return null;
    }
    return <img style={{ width: `50px`, marginBottom: 0 }} src={Byrne} alt="talking heads gif" />
  }

  renderImage(imageUrl) {
    return (
      <div>
        <img
          src={imageUrl}
          onLoad={this.handleImageLoaded}
          alt='Selected map area'
        />
      </div>
    );
  }

  reloadPage() {
    this.setState({
      address: this.getAddress(),
      submitStatus: "unanswered"
    })
  }

  render() {
    return <Layout>
      <form onSubmit={this.handleSubmit}>
        <div className="input-row">
          {/* <span>
            <label>
              City: 
              <input type="text" name="city" value={this.state.city} onChange={this.handleInputChange} />
            </label>
          </span> */}
          <span>
            <label>
              State:
              <select name="province" onBlur={this.handleInputChange}>
                <option defaultValue value=""> -- select an option -- </option>
                {STATES.map((data) => {
                  return <option key={data.abbreviation} value={data.abbreviation}>{data.name}</option>
                })}
              </select>
            </label>
          </span>
          <span>
            <button type="submit" className="button">Submit</button>
          </span>

        </div>

      </form>
      {this.state.submitStatus === "answered" &&
        <div>
          <Answer answer={this.state} />
          <button type="button" className="button" onClick={this.reloadPage}>Next Map</button>
        </div>
      }
      {/* {this.renderSpinner()} */}
      <Map address={this.state.address} />

    </Layout>
  }
}
