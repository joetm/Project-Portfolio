import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
//import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const emailIcon = <FontIcon className="material-icons">email</FontIcon>;
const phoneIcon = <FontIcon className="material-icons">phone</FontIcon>;
const linkedinIcon = <FontIcon className="material-icons">linkedin</FontIcon>;
const websiteIcon = <FontIcon className="material-icons">website</FontIcon>;
//const nearbyIcon = <IconLocationOn />;

class BottomLinks extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Recents"
            icon={emailIcon}
            onTouchTap={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Phone"
            icon={phoneIcon}
            onTouchTap={() => this.select(1)}
          />
          <BottomNavigationItem
            label="LinkedIn"
            icon={linkedinIcon}
            onTouchTap={() => this.select(2)}
          />
          <BottomNavigationItem
            label="Website"
            icon={websiteIcon}
            onTouchTap={() => this.select(3)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomLinks;