import * as React from "react"
import Layout from "./../components/Layout"
import Customers from "../components/shared/customers"

// markup
const IndexPage = () => {
  const CustomersPrimary = {
    title: "1300000+ tests completed Trusted by happy customers worldwide",
    logos: {
      logo1: {
        logo: '/',
        logoAlt: 'logo1'
      },
      logo2: {
        logo: '/',
        logoAlt: 'logo2'
      },
      logo3: {
        logo: '/',
        logoAlt: 'logo3'
      }
    }
  }

  const CustomersSecondaryWithTwoColumns = {
    title: "",
    subheading: "Trusted by happy customers worldwide",
    logos: {
      logo1: {
        logo: '/',
        logoAlt: 'logo1'
      },
      logo2: {
        logo: '/',
        logoAlt: 'logo2'
      },
      logo3: {
        logo: '/',
        logoAlt: 'logo3'
      }
    },
    para: "Enables everyone including SMEs & QAs to write automated tests using simple English. No coding skills required.",
    digits: "1300000+ No of Tests Executed"
  } 

  return (
    <Layout>
      <div className="container container--large">
        <h1>Index page</h1>
      </div>
      <div>
        <Customers {...CustomersPrimary} />
        <Customers {...CustomersSecondaryWithTwoColumns} />
      </div>
    </Layout>
  )
}

export default IndexPage
