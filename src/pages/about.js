import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const About = () => (
  <Layout>
    <h1>About</h1>
    <h3>How to Play</h3>
    <p>Using the map image on the page, enter a guess for the location of the image and click submit.</p>
    <h3>More Info</h3>
    <p>This app was made by Ross Rosenlof, July 2020. Made using Gatsby. The satellite images are rendered using the MapQuest Static API, using coordinates of over 2000 Taco Bell restaurants in the United States for the random locations. These coordinates come from a dataset from Kaggle. Enjoy! Send any feedback to <a href="mailto:rosenlof.ross@gmail.com">me</a>.</p>
    <p>See the GitHub <a href="https://github.com/rrosenlof/road-to-nowhere/blob/master/README.md">README</a> for more info.</p>
    <Link to="/">Keep playing!</Link>
  </Layout>
)

export default About
