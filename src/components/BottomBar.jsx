/* @flow */

import React, { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper'
import BottomNavigation from '@mui/material/BottomNavigation'
// import BottomNavigationItem from '@mui/material/BottomNavigationItem';
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
// import EmailICO from 'material-ui/svg-icons/communication/email';
import EmailICO from '@mui/icons-material/Email'
// import PhoneICO from 'material-ui/svg-icons/communication/phone';
// import PhoneICO from '@mui/icons-material/Phone';
// import WebsiteICO from 'material-ui/svg-icons/av/web';
import WebsiteICO from '@mui/icons-material/Language'
// import GitICO from 'react-icons/lib/fa/github-square';
import GitICO from '@mui/icons-material/GitHub'
// import LinkedInICO from 'react-icons/lib/fa/linkedin-square';
import LinkedInICO from '@mui/icons-material/LinkedIn'


const DELAY = 1000
const iconStyle = {
  height: '24px',
}



function BottomBar() {

  const [selectedIndex, updateSelectedIndex] = useState(-1)
  const [selectedValue, updateSelectedValue] = useState(null)
  const [loading, updateLoading] = useState(true)
  const [email, setEmail] = useState('loading...')
  // const [phone, setPhone] = useState('loading...')
  const [cv, setCV] = useState('loading...')
  const [linkedin, setLinkedin] = useState('loading...')

  // let serverRequest = null

  function navigate(value, site, content, external = false) {
    updateSelectedValue(value)
    //navigate after a nice animation
    window.setTimeout(() => {
      if (external) {
        window.open(site + content, '_blank')
      } else {
        window.location = site + content
      }
    }, DELAY)
  }

  useEffect(() => {
    fetch('/data/author.txt')
      .then((response) => response.text())
      .then((txt) => {
          var vars = txt.split("\n")
          if(vars?.length){
              // convert
              vars = vars.map((item) => item.rot14())
              // store new state
              setEmail(vars[1])
              // setPhone(vars[2])
              setCV(vars[3])
              setLinkedin(vars[4])
          }
          updateLoading(false)
      })
  }, [])

  // abort the running request if component is unmounted
  // componentWillUnmount() {
  //     if (this.serverRequest) {
  //       this.serverRequest.abort();
  //     }
  // }

  return (
    <Paper style={{marginTop:'4em'}} elevation={1}>
      <BottomNavigation
        value={selectedValue}
      >
        <BottomNavigationAction
          label={email}
          showLabel={true}
          icon={<EmailICO />}
          onClick={() => navigate('email', 'mailto:', email)}
          value={'email'}
        />
        {/*
        <BottomNavigationAction
          label={phone}
          icon={<PhoneICO />}
          onClick={() => navigate('phone', 'phone:', phone)}
          value="phone"
        />
        */}
        <BottomNavigationAction
          label={linkedin}
          showLabel={true}
          icon={<LinkedInICO style={iconStyle} />}
          target={'linkedin'}
          onClick={() => navigate('linkedin', 'https://www.linkedin.com/in/', linkedin, true)}
          value={'linkedin'}
        />
        <BottomNavigationAction
          label={'joetm'}
          showLabel={true}
          icon={<GitICO style={iconStyle} />}
          target={'github'}
          onClick={() => navigate('github', 'https://github.com/', 'joetm', true)}
          value={'github'}
        />
        <BottomNavigationAction
          label={cv}
          showLabel={true}
          icon={<WebsiteICO />}
          onClick={() => navigate('cv', cv, '')}
          value={'cv'}
        />
      </BottomNavigation>
    </Paper>
  )

}

export default BottomBar
