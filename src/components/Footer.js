import React from 'react'
import { Link } from 'gatsby'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        {/*<section>
            <h2>Aliquam sed mauris</h2>
            <p>Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.</p>
            {/*<ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
            </ul>* /}
        </section>*/}
        <section>
            <h2>Contact Me</h2>
            <dl className="alt">
                <dt>Address</dt>
                <dd>5 Shazar St. / 66 &bull; Hod Hasharon, 4537203 &bull; ISRAEL</dd>
                <dt>USA</dt>
                <dd><a href="tel:+19177191990">(917) 719-1990</a></dd>
                <dt>ISRAEL</dt>
                <dd><a href="tel:+972523569713">(052) 3569713</a></dd>
                <dt>Email</dt>
                <dd><a href="mailto:ami.heines@gmail.com?Subject=Re%20eosinabox">ami.heines@gmail.com</a></dd>
            </dl>
            <ul className="icons">
                <li><a href="#" className="icon fa-telegram alt"><span className="label">Telegram</span></a></li>
                {/*<li><a href="#" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
                <li><a href="#" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
                <li><a href="#" className="icon fa-dribbble alt"><span className="label">Dribbble</span></a></li>*/}
            </ul>
        </section>
        <p className="copyright">&copy; 2018 Ami Heines</p>
    </footer>
)

export default Footer
