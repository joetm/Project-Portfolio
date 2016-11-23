const enhanceWithClickOutside = require('react-click-outside'); // https://www.npmjs.com/package/react-click-outside
import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Icon from 'material-ui/svg-icons/communication/chat-bubble';

class SubNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: props.visible
        };
    }

	handleClickOutside() {
		console.log('click outside');
    	this.setState({
    		visible: false
    	});
	}

	render() {
		console.log('SubNav visibility:', this.state.visible);
		return (
			<div style={{display: this.props.visible || this.state.visible ? 'block' : 'none'}}>
		    <List>
		      <Subheader>Filter</Subheader>
		      <ListItem
		        primaryText="Web Development"
		        leftAvatar={<Icon />}
		        rightIcon={<Icon />}
		      />
		      <ListItem
		        primaryText="Academic"
		        leftAvatar={<Icon />}
		        rightIcon={<Icon />}
		      />
		      <ListItem
		        primaryText="Other"
		        leftAvatar={<Icon />}
		        rightIcon={<Icon />}
		      />
		    </List>
			</div>
		);
	}

}

/*
    <Divider />
    <List>
      <Subheader>Technologies</Subheader>
      <ListItem
        primaryText="JavaScript"
        leftAvatar={<Avatar src="images/jsa-128.jpg" />}
      />
      <ListItem
        primaryText="PHP"
        leftAvatar={<Avatar src="images/chexee-128.jpg" />}
      />
    </List>
*/

module.exports = enhanceWithClickOutside(SubNav);
