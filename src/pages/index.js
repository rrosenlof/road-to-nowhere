import React from "react"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import Spinner from "../components/spinner"
import JSONData from "../../content/caps.json"

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    const add = this.getAddress();
    const u = this.getUrl(add, 1);
    const u2 = this.getUrl(add, 2);
    const u3 = this.getUrl(add, 3);

    this.state = {
      city: "",
      province: "",
      address: add,
      url: u,
      url2: u2,
      url3: u3,
      imageStatus: "loading"
    }

    this.handleImageLoaded = this.handleImageLoaded.bind(this)
  }

  getAddress() {
    const len = Object.keys(JSONData).length;
    const rand = Math.floor(Math.random() * Math.floor(len));
    console.log(JSONData[rand])
    return JSONData[rand]
  }
  
  getUrl(address, zoom) {
    let url_string = ''
    if (zoom === 1) {
      url_string = `${process.env.API_URL}key=${process.env.KEY}&center=${address['latitude']},${address['longitude']}${process.env.FIRST_IMAGE_SETTINGS}`
    } else if (zoom === 2) {
      url_string = `${process.env.API_URL}key=${process.env.KEY}&center=${address['latitude']},${address['longitude']}${process.env.SECOND_IMAGE_SETTINGS}`
    } else {
      url_string = `${process.env.API_URL}key=${process.env.KEY}&center=${address['latitude']},${address['longitude']}${process.env.THIRD_IMAGE_SETTINGS}`
    }
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
    event.preventDefault()
    navigate("/answer", { state: this.state})
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
          style={{ width: `3000px` }} 
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
          <input type="text" name="province" value={this.state.province} onChange={this.handleInputChange} />
        </label>
        <br/>
        <button type="submit">Submit</button>
      </form>
      <div>
        {this.renderSpinner()}
        <div className="images">
          {this.renderImage(this.state.url)}
        </div>
      </div>
      
    </Layout>
  }
}
