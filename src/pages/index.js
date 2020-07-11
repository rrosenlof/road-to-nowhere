import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import JSONData from "../../content/taco-bells.json"

function getAddress(){
  const len = Object.keys(JSONData).length;
  console.log(len);
  const rand = Math.floor(Math.random() * Math.floor(len));
  console.log(rand)
  console.log(JSONData[rand])
  return [JSON.stringify(JSONData[rand]['latitude']), JSON.stringify(JSONData[rand]['longitude'])];
}

var obj = getAddress();

const IndexPage = () => (
  <Layout>
    
    <img style={{ width: `3000px` }}src={`${process.env.API_URL}key=${process.env.KEY}&center=${obj[0]},${obj[1]}&scalebar=true|bottom&imagetype=png&zoom=18&scalebar=false&traffic=false&size=1600,1600&type=sat`} alt='Selected map area'></img>
    
    <div>
      {obj[0]}
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
