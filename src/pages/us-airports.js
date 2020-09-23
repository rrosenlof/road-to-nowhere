import React from "react"

import Layout from "../components/layout"
import JSONData from "../../content/us-airports.json"
import AirportMap from "../components/airportMap"
import UsAirportAnswer from "../components/usAirportAnswer"
import { Link } from "gatsby"

export default class UsAirport extends React.Component {
  constructor() {
    super();
    // const add = this.getAddress();

    this.state = {
      address: "",
      imageStatus: "loading",
      submitStatus: "unanswered",
      country: "",
    }

    this.reloadPage = this.reloadPage.bind(this);
  }

  componentDidMount() {
    this.setState({
      address: this.getAddress()
    })
  }

  getAddress() {
    const len = Object.keys(JSONData).length;
    const rand = Math.floor(Math.random() * Math.floor(len));
    return JSONData[rand]
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
      submitStatus: "answered",
      imageStatus: "loaded"
    })
    event.preventDefault();
  }

  reloadPage() {
    this.setState({
      address: this.getAddress(),
      submitStatus: "unanswered",
      imageStatus: "loading"
    })

  }

  render() {
    return <Layout>
      <form onSubmit={this.handleSubmit}>
      <p style={{ fontStyle: 'italic', margin: '-.5rem 0 .3rem' }}><b>How to play:</b> Look at the image below and enter a guess which airport is shown from the list below. Try the <Link to='/'>Original Version!</Link></p>
        <div className="input-row">
          <span>
            <label>
              Airport:
              <select name="country" onBlur={this.handleInputChange}>
                <option defaultValue value="1"> -- </option>
                {JSONData.map((data) => {
                  return <option key={data.iso_code} value={data.iso_code}>{data.iso_code}: {data.name}</option>
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
          <UsAirportAnswer answer={this.state} />
          <button style={{ margin: `.6rem 0`}} type="button" className="button" onClick={this.reloadPage}>Next Map</button>
        </div>
      }
      <AirportMap address={this.state.address} imageStatus={this.state.imageStatus} />

    </Layout>
  }
}
