import React from "react"

import Layout from "../components/layout"
import Spinner from "../components/spinner"
import JSONData from "../../content/taco-bells.json"
import STATES from "../../content/states.json"
import Answer from "../components/answer"
import { Link } from "gatsby"

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    const add = this.getAddress();
    const u = this.getUrl(add, 1);

    this.state = {
      city: "",
      province: "",
      address: add,
      url: u,
      imageStatus: "loading",
      submitStatus: ""
    }

    this.handleImageLoaded = this.handleImageLoaded.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  getAddress() {
    const len = Object.keys(JSONData).length;
    const rand = Math.floor(Math.random() * Math.floor(len));
    console.log(JSONData[rand])
    return JSONData[rand]
  }
  
  getUrl(address, zoom) {
    let url_string = `https://maps.googleapis.com/maps/api/staticmap?center=${address['latitude']},${address['longitude']}&zoom=17&scale=2&size=600x600&maptype=roadmap&style=feature:poi|visibility:off&style=element:administrative:all|visibility:off&key=${process.env.KEY}`
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
    return <Spinner />
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

  render() {
    return <Layout>
      <form onSubmit={this.handleSubmit}>
        <label>
          City: 
          <input type="text" name="city" value={this.state.city} onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          State: 
          <select name="province" onBlur={this.handleInputChange}>
            <option disabled defaultValue value=""> -- select an option -- </option>
            {STATES.map((data) => {
              return <option key={data.abbreviation} value={data.abbreviation}>{data.name}</option>
            })}
          </select>
        </label>
        <br/>
        <button type="submit">Submit</button>
      </form>
      { this.state.submitStatus === "answered" &&
        <div>
          <Answer answer={this.state} />
          <Link to="/" state={{address: this.getAddress}}>Next Map</Link>
        </div>
      }
      <div>
        {this.renderSpinner()}
        <div className="images">
          {this.renderImage(this.state.url)}
        </div>
      </div>
      
    </Layout>
  }
}
