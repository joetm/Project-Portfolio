import React from 'react';
import { Component } from 'react';

// const enhanceWithClickOutside = require('react-click-outside'); // https://www.npmjs.com/package/react-click-outside

import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Icon from 'material-ui/svg-icons/file/folder';


class SubNav extends Component {

  //   handleClickOutside(e) {
  //       console.log('click outside');
		// // console.log(e.target);
		// e.stopPropagation();
		// console.log('SubNav visible', this.props.visible);
		// //if (this.props.visible) {
	 //    //    this.props.hideSubMenu();
	 //    //}
  //   }

	handleClick(filter) {
		console.log('filter', filter);
	    this.props.toggleSubMenu();
	    // this.props.projectsFilter(filter);
	}

	render() {
		return (
			<div style={{display: this.props.visible ? 'block' : 'none'}}>
			    <List>
				      <Subheader>Project Filter</Subheader>
				      <ListItem
		                onClick={this.handleClick.bind(this, 'dev')}
				        primaryText="Web Development"
				        leftAvatar={<Icon />}
				        rightIcon={<Icon />}
				      />
				      <ListItem
		                onClick={this.handleClick.bind(this, 'admin')}
				        primaryText="Adminstration"
				        leftAvatar={<Icon />}
				        rightIcon={<Icon />}
				      />
		    		<Divider />
				      <ListItem
		                onClick={this.handleClick.bind(this, 'academic')}
				        primaryText="Academic"
				        leftAvatar={<Icon />}
				        rightIcon={<Icon />}
				      />
				    <Divider />
				      <ListItem
		                onClick={this.handleClick.bind(this, 'excel')}
				        primaryText="Excel"
				        leftAvatar={<Icon />}
				        rightIcon={<Icon />}
				      />
				      <ListItem
		                onClick={this.handleClick.bind(this, 'other')}
				        primaryText="Other"
				        leftAvatar={<Icon />}
				        rightIcon={<Icon />}
				      />
				    <Divider />
			    </List>
			</div>
		);
	}

}

// module.exports = enhanceWithClickOutside(SubNav);
module.exports = SubNav;
