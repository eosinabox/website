import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderGetstarted from '../components/HeaderGetstarted'
import logo from '../assets/images/website-icon.png'
import pic04 from '../assets/images/pic04.jpg'

class Getstarted extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Getstarted Page Title" />
        <HeaderGetstarted />
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={logo} alt="" /></span>
            <h2>Check list for starting your very own blockchain</h2>
            <ul>
            <li>Start 3 fresh Ubuntu servers with enough RAM (todo: need to check if can start with a cheap server with low RAM requirements) </li>
            <li>Write a list of their IP addresses</li>
            <li>One of the servers will be the initial one to launch the blockchain</li>
            <li>Use the script from <a href="https://developers.eos.io/eosio-nodeos/docs/bios-boot-sequence">the docs,</a> until a script will be ade here</li>
            </ul>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Getstarted
