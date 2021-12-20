import * as React from "react"
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = () => {
  return (
    <Layout>
      <Seo title="Blog page" />
      <div className="container container--large">
        <h1>Blog page</h1>
      </div>
    </Layout>
  )
}

export default BlogPage