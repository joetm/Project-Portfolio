import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

import EmailICO from 'material-ui/svg-icons/communication/email';
import PhoneICO from 'material-ui/svg-icons/communication/phone';
import WebsiteICO from 'material-ui/svg-icons/av/web';
const emailIcon = <EmailICO />;
const phoneIcon = <PhoneICO />;
// const linkedinIcon = <FontIcon className="material-icons">linkedin</FontIcon>;
const githubIcon = <FontIcon className="material-icons">github</FontIcon>;
const websiteIcon = <WebsiteICO />;

const iconStyle = {height:'24px'};
import GitICO from 'react-icons/lib/fa/github-square';
import LinkedInICO from 'react-icons/lib/fa/linkedin-square';
const gitIcon = <GitICO style={iconStyle} />;
const linkedinIcon = <LinkedInICO style={iconStyle} />;



class BottomBar extends Component {

  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  serverRequest = null;

  constructor(props) {
      super(props);
      this.state = {
          loading: true,
          Email: 'loading...',
          Phone: 'loading...',
          CV: 'loading...',
          Linkedin: 'loading...',
      };
  }

  componentDidMount() {
        let _this = this;

        const authorInfo = './data/author.txt';

        this.serverRequest = fetch(authorInfo)
        .then((response) => {
            return response.text();
        }).then(function(txt) {
            var vars = txt.split("\n");
            if(vars && vars.length){
                // convert
                vars = vars.map(function(item) {return item.rot14();});
                // store new state
                _this.setState({
                    // Name: vars[0],
                    email: vars[1],
                    phone: vars[2],
                    cv: vars[3],
                    linkedin: vars[4]
                });
            }
            _this.setState({loading: false});
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
            icon={emailIcon}
            onTouchTap={() => this.select(0)}
          />
          <BottomNavigationItem
            label={this.state.phone}
            icon={phoneIcon}
            onTouchTap={() => this.select(1)}
          />
          <BottomNavigationItem
            label={this.state.linkedin}
            icon={linkedinIcon}
            target={'linkedin'}
            onTouchTap={() => this.select(2)}
          />
          <BottomNavigationItem
            label={'joetm'}
            icon={gitIcon}
            target={'github'}
            onTouchTap={() => this.select(3)}
          />
          <BottomNavigationItem
            label={this.state.cv}
            icon={websiteIcon}
            onTouchTap={() => this.select(4)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomBar;
