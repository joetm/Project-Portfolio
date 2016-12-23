import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

import EmailICO from 'material-ui/svg-icons/communication/email';
import PhoneICO from 'material-ui/svg-icons/communication/phone';
import WebsiteICO from 'material-ui/svg-icons/av/web';
import GitICO from 'react-icons/lib/fa/github-square';
import LinkedInICO from 'react-icons/lib/fa/linkedin-square';


const DELAY = 1000;
const iconStyle = {
  height: '24px'
};


class BottomBar extends Component {

  state = {
    selectedIndex: -1,
    loading: true,
    Email: 'loading...',
    Phone: 'loading...',
    CV: 'loading...',
    Linkedin: 'loading...',
  };

  serverRequest = null;

  navigate = (index, site, content) => {
    this.setState({selectedIndex: index});
    //navigate after a nice animation
    window.setTimeout(() => {
        window.location = site + content;
    }, DELAY);
  }


  componentDidMount() {

        const authorInfo = './data/author.txt';

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
  componentWillUnmount() {
      if (this.serverRequest) {
        this.serverRequest.abort();
      }
  }

  render() {
    return (
      <Paper style={{marginTop:'4em'}} zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label={this.state.email}
            icon={<EmailICO />}
            onTouchTap={() => this.navigate(0, 'mailto:', this.state.email)}
          />
          <BottomNavigationItem
            label={this.state.phone}
            icon={<PhoneICO />}
            onTouchTap={() => this.navigate(1, 'phone:', this.state.phone)}
          />
          <BottomNavigationItem
            label={this.state.linkedin}
            icon={<LinkedInICO style={iconStyle} />}
            target={'linkedin'}
            onTouchTap={() => this.navigate(2, 'https://www.linkedin.com/in/', this.state.linkedin)}
          />
          <BottomNavigationItem
            label={'joetm'}
            icon={<GitICO style={iconStyle} />}
            target={'github'}
            onTouchTap={() => this.navigate(3, 'https://github.com/', 'joetm')}
          />
          <BottomNavigationItem
            label={this.state.cv}
            icon={<WebsiteICO />}
            onTouchTap={() => this.navigate(4, this.state.cv, '')}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomBar;
