import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
//import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

//import Icons from 'material-design-icons';


const emailIcon = <FontIcon className="material-icons">email</FontIcon>;
const phoneIcon = <FontIcon className="material-icons">phone</FontIcon>;
const linkedinIcon = <FontIcon className="material-icons">linkedin</FontIcon>;
const websiteIcon = <FontIcon className="material-icons">website</FontIcon>;
// const nearbyIcon = <IconLocationOn />;


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
      <Paper zDepth={1}>
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
            onTouchTap={() => this.select(2)}
          />
          <BottomNavigationItem
            label={this.state.cv}
            icon={websiteIcon}
            onTouchTap={() => this.select(3)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomBar;