import React from "react"

import Layout from "../components/layout"
import JSONData from "../../content/taco-bells.json"
import STATES from "../../content/states.json"
import Answer from "../components/answer"
import Map from "../components/map"
import { Link } from "gatsby"

export default class IndexPage extends React.Component {
  constructor() {
    super();
    // const add = this.getAddress();

    this.state = {
      address: "",
      imageStatus: "loading",
      submitStatus: "unanswered",
      province: "",
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
        <p style={{ fontStyle: 'italic', margin: '-.5rem 0 .3rem' }}><b>How to play:</b> Look at the image below and enter a guess where the location is found from the dropdown list of states. Now try with <Link to='/airports'>international airports</Link> or <Link to='/us-airports'>US airports</Link>!</p>
        
        <div className="input-row">
          <span>
            <label>
              State:
              <select name="province" onBlur={this.handleInputChange}>
                <option defaultValue value="1"> -- </option>
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
          <button style={{ margin: `.6rem 0`}} type="button" className="button" onClick={this.reloadPage}>Next Map</button>
        </div>
      }
      <Map address={this.state.address} imageStatus={this.state.imageStatus} />

    </Layout>
  }
}
