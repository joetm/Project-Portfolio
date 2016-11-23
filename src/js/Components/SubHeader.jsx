const enhanceWithClickOutside = require('react-click-outside'); // https://www.npmjs.com/package/react-click-outside
import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Icon from 'material-ui/svg-icons/file/folder';

class SubNav extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         visible: props.visible
    //     };
    // }

    // TODO
	handleClickOutside() {
		console.log('click outside');
    	this.setState({
    		visible: false
    	});
	}

	handleClick(filter) {
		console.log('filter', filter);
		// TODO
		if (projects !== undefined) {
			projects.map(function(project) {
				project.visible = (project.idtype === filter);
				return project;
			});
		}
	}

	// TODO: fix click outside of menu

	render() {
		// console.log('SubNav visibility:', this.state.visible);
		return (
			<div style={{display: this.props.visible ? 'block' : 'none'}}>
		    <List>
		      <Subheader>Filter</Subheader>
		      <ListItem
                onClick={this.handleClick.bind(this, 'web')}
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
		    </List>
			</div>
		);
	}

}


module.exports = enhanceWithClickOutside(SubNav);
