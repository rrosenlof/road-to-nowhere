import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const About = () => (
  <Layout>
    <h1>About</h1>
    <p>This app was made by Ross Rosenlof in the summer of 2020. The satellite images are rendered using the <a href="https://developer.mapquest.com/">MapQuest</a> Static API, using coordinates of over 2,000 Taco Bell restaurants in the United States for the semi-random locations. These coordinates come from a dataset from <a href="https://www.kaggle.com/datafiniti/fast-food-restaurants">Kaggle</a>. Enjoy!</p>
    <p>See the GitHub <a href="https://github.com/rrosenlof/road-to-nowhere/blob/master/README.md">README</a> for more info.</p>
    <Link to="/">Keep playing!</Link>
  </Layout>
)

export default About
