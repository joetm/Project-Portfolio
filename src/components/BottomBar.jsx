/* @flow */

import React, {Component} from 'react';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationItem from '@mui/material/BottomNavigationItem';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import EmailICO from 'material-ui/svg-icons/communication/email';
import EmailICO from '@mui/icons-material/Email';
// import PhoneICO from 'material-ui/svg-icons/communication/phone';
// import PhoneICO from '@mui/icons-material/Phone';
// import WebsiteICO from 'material-ui/svg-icons/av/web';
import WebsiteICO from '@mui/icons-material/Language';
// import GitICO from 'react-icons/lib/fa/github-square';
import GitICO from '@mui/icons-material/GitHub';
// import LinkedInICO from 'react-icons/lib/fa/linkedin-square';
import LinkedInICO from '@mui/icons-material/LinkedIn';


const DELAY = 1000;
const iconStyle = {
  height: '24px'
};


class BottomBar extends Component {

  state = {
    selectedIndex: -1,
    loading: true,
    email: 'loading...',
    phone: 'loading...',
    cv: 'loading...',
    linkedin: 'loading...',
  };

  serverRequest = null;

  navigate = (index, site, content, external=false) => {
    this.setState({selectedIndex: index});
    //navigate after a nice animation
    window.setTimeout(() => {
      if (external) {
        window.open(site + content, '_blank');
      } else {
        window.location = site + content;
      }
    }, DELAY);
  }


  componentDidMount() {

        const authorInfo = '/data/author.txt';

        this.serverRequest = fetch(authorInfo)
        .then((response) => {
            return response.text();
        }).then((txt) => {
            var vars = txt.split("\n");
            if(vars && vars.length){
                // convert
                vars = vars.map(function(item) {return item.rot14();});
                // store new state
                this.setState({
                    // Name: vars[0],
                    email: vars[1],
                    phone: vars[2],
                    cv: vars[3],
                    linkedin: vars[4],
                    loading: false
                });
            } else {
                this.setState({loading: false});
            }
        });
  }

  // abort the running request if component is unmounted
  // componentWillUnmount() {
  //     if (this.serverRequest) {
  //       this.serverRequest.abort();
  //     }
  // }

  render() {
    return (
      <Paper style={{marginTop:'4em'}} elevation={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationAction
            label={this.state.email}
            showLabel={true}
            icon={<EmailICO />}
            onClick={() => this.navigate(0, 'mailto:', this.state.email)}
          />
          {/*
          <BottomNavigationAction
            label={this.state.phone}
            icon={<PhoneICO />}
            onClick={() => this.navigate(1, 'phone:', this.state.phone)}
          />
          */}
          <BottomNavigationAction
            label={this.state.linkedin}
            showLabel={true}
            icon={<LinkedInICO style={iconStyle} />}
            target={'linkedin'}
            onClick={() => this.navigate(2, 'https://www.linkedin.com/in/', this.state.linkedin, true)}
          />
          <BottomNavigationAction
            label={'joetm'}
            showLabel={true}
            icon={<GitICO style={iconStyle} />}
            target={'github'}
            onClick={() => this.navigate(3, 'https://github.com/', 'joetm', true)}
          />
          <BottomNavigationAction
            label={this.state.cv}
            showLabel={true}
            icon={<WebsiteICO />}
            onClick={() => this.navigate(4, this.state.cv, '')}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomBar;
