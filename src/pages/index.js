import React from "react"
import { graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';

import Intro from "../components/intro"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render(){
    return(
      <Layout>
        <SEO title="Home" />
        <Intro introImage={this.props.data.introImage.childImageSharp}/>
        <h1>Hi people</h1>
        <p>Welcome to my site.</p>
        <p>Take a tour and let me know what you think of it.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
      </Layout>
    );
  }
}
  

export const data = graphql`
  query {
    introImage: file(relativePath: { eq: "photocv.png" }) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
