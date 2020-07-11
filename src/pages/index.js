import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src={`${process.env.API_URL}key=${process.env.KEY}&center=New+York&size=1100,500@2x`} alt='Selected map area'></img>
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
