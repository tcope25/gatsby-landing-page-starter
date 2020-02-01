import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="main">
      <div class="mainLeft">
        <h1>Welcome to <span style={{color:`#6d2f9c`}}>Gatsby</span>.</h1>
        <p style={{
          color: `#869ab8`
        }}>
          Build a beautiful and super fast website.
        </p>
        <button style={{ backgroundColor: `#6d2f9c`, padding: `1rem`, borderRadius: `.5rem`, color: `white`, border: `none`}}>Start Here</button>
      </div> 
      <div className="mainRight">
        <Image />      
      </div>   
    </div>

    <hr />    
  
  </Layout>
)

export default IndexPage
