import React from 'react'
import { Link } from 'gatsby'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['intro', 'first', 'second', 'cta'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="intro">
                    <a href="#">Why</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="first">
                    <a href="#">Benefits</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="second">
                    <a href="#">How</a>
                </Scroll>
            </li>
            <li>
                <Link to="/getstarted2">Get Started</Link>
            </li>
            <li>
                <Link to="/blog20181211">blog</Link>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
