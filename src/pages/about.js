import * as React from "react"
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About page" />
      <div className="container container--large">
        <h1>About page</h1>
      </div>
    </Layout>
  )
}

export default AboutPage