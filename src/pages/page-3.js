import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./bulma.css"

function beregn() {
  const km = document.getElementById("km").value
  const gco2 = km * 500;
  document.getElementById("aftryk").innerHTML = "Dit daglige Co2 aftryk er indtil videre:" + gco2 + "g"
}

const side3 = () => (
  <Layout>
    <SEO title="side 3" />
    <h1>Velkommen til side 3</h1>
    <p id="aftryk"> Dit daglige Co2 aftryk er indtil videre: 0g</p>
    <p>Welcome to page 2</p>
    <input type="text" class="input is primary" id="km"/>
    <button onClick={beregn}>klik mig</button>

      <Link to="/">Tilbage til start</Link>
  </Layout>
    )
    
    export default side3
