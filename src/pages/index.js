import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/pic01.jpg'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <Layout>
        <Helmet title="EOS in a box" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Why make a private EOSIO blockchain?</h2>
                </header>
                <p>EOS the blockchain and the token are akin to an expensive city. You can develop your dApp on it
                but you'll pay a premium for the real estate location. You can enjoy the benefits of the EOSIO stack
                on your very own servers.
                You already have your servers for regular apps, why not leverage the benefits of a blockchain aimed at developers?
                </p>
                {/*<ul className="actions">
                  <li><Link to="/generic" className="button">Learn More</Link></li>
                </ul>*/}
              </div>
              <span className="image"><img src={pic01} alt="" /></span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Benefits of a Private Blockchain</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code"></span>
                <h3>Full Resources</h3>
                <p>On your priate blockchain you own 100% of the resources, CPU, NET and RAM are all yours to work with</p>
              </li>
              <li>
                <span className="icon major style3 fa-copy"></span>
                <h3>EOS blockchain communication</h3>
                <p>With the upcoming IBC (Inter Blockchain Communication) you'll be able to interact with the main EOS blockchain,
                transfer value using any token and exchange information.</p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond"></span>
                <h3>Your own rules</h3>
                <p>Don't worry about violating the EOS constitution, on your private blockchain you make the rules. Don't want to
                open source your dApps? No problem!</p>
              </li>
            </ul>
            {/*<footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer>
            */}
          </section>

          <section id="second" className="main">
            <header className="major">
              <h2>How does it work?</h2>
            </header>
          {/*<p>Starting a new blockchain requires knowledge in many different fields and there are lots of decisions
            to be made along the way, but don't get discouraged. I believe this
            can be done by developers who know how to set up a linux server stack for a regular web app.<br />
            I'm writing a long checklist of things to do, you can print it and follow along. Once the list is done,
            you should have a working EOSIO private blockchain!</p>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork"></span>
                <strong>5,120</strong> Etiam
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o"></span>
                <strong>8,192</strong> Magna
              </li>
              <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>2,048</strong> Tempus
              </li>
              <li className="style4">
                <span className="icon fa-laptop"></span>
                <strong>4,096</strong> Aliquam
              </li>
              <li className="style5">
                <span className="icon fa-diamond"></span>
                <strong>1,024</strong> Nullam
              </li>
            </ul>
          */}
            <p className="content">Starting a new blockchain requires knowledge in many different fields and there are lots of decisions
            to be made along the way. Don't get that discourage you, eosinabox is here to help. Setting up a private blockchain
            can be done by developers who know how to set up a linux server stack for a regular web app.
            I'm writing a long checklist of things to do, you can print it and follow along. Once the list is done,
            you should have a working EOSIO private blockchain! Gradually I will convert parts of the checklist to automated
            scripts, this way, it will be quicker and less error prone process to start a new private EOSIO blockchain.
            That is the vision of eosinabox!
            </p>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/getstarted2" className="button">Get Started</Link></li>
              </ul>
            </footer>
          </section>

          {/*<section id="cta" className="main special">
            <header className="major">
              <h2>Congue imperdiet</h2>
              <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
              posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button special">Get Started</Link></li>
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>
          */}

        </div>

      </Layout>
    )
  }
}

export default Index
