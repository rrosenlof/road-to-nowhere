import React from "react"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import JSONData from "../../content/taco-bells.json"

export default class IndexPage extends React.Component {
  constructor() {
    super();
    const add = this.getAddress();
    const u = this.getUrl(add);

    this.state = {
      city: "",
      province: "",
      address: add,
      url: u
    }
  }

  getAddress() {
    const len = Object.keys(JSONData).length;
    const rand = Math.floor(Math.random() * Math.floor(len));
    return JSONData[rand]
  }
  
  getUrl(address) {
    const url = `${process.env.API_URL}key=${process.env.KEY}&center=${address['latitude']},${address['longitude']}&scalebar=true|bottom&imagetype=png&zoom=18&scalebar=false&traffic=false&size=1600,1600&type=sat`
    return url
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

  render() {
    return <Layout>
      <div>
        {JSON.stringify(this.state.address)}
      </div>
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
      <img style={{ width: `3000px` }} src={`${this.state.url}`} alt='Selected map area'></img>
    </Layout>
  }
}
