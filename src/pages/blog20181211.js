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
          Today (2018-12-11) I created 3 new virtual box ubuntu computers on my laptop to test eosinabox.<br/>
          It took me a while to configure them.<br/>
          I gave them the minimum recommended RAM of 1GB and disk of 10GB.<br/>
          Called them eosinabox-a, eosinabox-b and eosinabox-c<br/>
          Used my plain user, ami and password: 123123 so it is easy to login and approve sudo commands.<br/>
          Installed guest additions, enabled bidirectional copy and paste, restarted to make sure this works.<br/>
          I installed ssh servers on all 3 computers using sudo apt install openssh-server<br/>
          Needed to add too many network adapters to the setup since my laptop uses wifi to connect to the world and there seems to be a mismatch when trying to configure bridge network so everyone can talk to everyone on the virtual and real world.<br/>
          So instead, I needed to have 1 network adapter as a NAT so the virtual computers can connect to the internet,<br/>
          Another network adapter as an internal network so all the virtual computers can talk to each other and<br/>
          The final network adapter as a host only adapter so the host can communicate with the virtual computers.<br/>
          I changed their power saving settings to never lock the screen as it annoyed me. I don’t really care for power savings, these are virtual computers and the host laptop is always connected to the charger so there’s infinite supply of power.<br/>
          I created a snapshot of the computers so I can get back to the same initial state later and start another experiment without needing to install and configure again.<br/>
          With some "ip -c a" I could find the ip addresses of the 3 virtual computeres and successfully ssh'd to them using "ssh ami@192.168.56.101"<br/>
          Now I can actually start experimenting. I will follow the process outlined in the EOSIO documentation and update here.<br/>
          I found a nice commandline alternative to VirtualBox window: 'VBoxHeadless -s a &' since I called the computers a, b and c, this is easy!<br/>
          Just need to remember to shut them down correctly with 'sudo shutdown now' from within the ssh.<br/>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Getstarted
