import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const About = () => (
  <Layout>
    <h1>About</h1>
    <p>This app was made by Ross Rosenlof, July 2020. Made using Gatsby. The satellite images are rendered using the Mapquest Static Map API, using coordinates of over 2000 Taco Bell restaurants in the United States. These coordinates come from a dataset from Kaggle. Enjoy! Send any feedback to <a href="mailto:rosenlof.ross@gmail.com">me</a>.</p>
    <p>Further plans:</p>
    <ul>
      <li>Let users change factors about the game – sat/road map, zoom level, labels, etc.</li>
      <li>Use a clickable map to answer, à la Geoguessr (which was an inspiration for this project)</li>
      <li>Get more coordinate datasets to play with, or allow user upload</li>
      <li>Switch to Google Maps API? This one works just fine, however :)</li>
    </ul>
    <Link to="/">Keep playing!</Link>
  </Layout>
)

export default About
