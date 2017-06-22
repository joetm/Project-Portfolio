/* @flow */

import React from 'react';
import { Component } from 'react';

// const enhanceWithClickOutside = require('react-click-outside'); // https://www.npmjs.com/package/react-click-outside

import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Icon from 'material-ui/svg-icons/file/folder';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import CloseIcon from 'material-ui/svg-icons/navigation/close';

const DEV = 'dev';
const ADMIN = 'admin';
const ACADEMIC = 'academic';
const EXCEL = 'excel';
const OTHER = 'other';

const initialFilterState = {
  [DEV]: false,
  [ADMIN]: false,
  [ACADEMIC]: false,
  [EXCEL]: false,
  [OTHER]: false
};


class SubNav extends Component {

    state = {
        filters: initialFilterState,
        activeFilter: null
    };

  //   handleClickOutside(e) {
  //       console.log('click outside');
		// // console.log(e.target);
		// e.stopPropagation();
		// console.log('SubNav visible', this.props.visible);
		// //if (this.props.visible) {
	 //    //    this.props.hideSubMenu();
	 //    //}
  //   }

    resetFilters() {
        let filters = {};
        for (let key in this.state.filters) {
            if (this.state.filters.hasOwnProperty(key)) {
                filters[key] = false;
            }
        }
        // update the filter state
        this.setState({
            filters,
            activeFilter: null
        });
        // close the submenu
        this.props.toggleSubMenu();
        // reset the projects filter
        this.props.projectsFilter(null);
    }

	handleClick(filter) {
		// console.log('selected filter:', filter);
        let filters = {};
        for (let key in this.state.filters) {
            if (this.state.filters.hasOwnProperty(key)) {
                // not the clicked one
                if (key !== filter) {
                    // filter is not active
                    filters[key] = false;
                } else {
                    // toggle the clicked one
                    filters[filter] = !this.state.filters[filter];
                }
            }
        }
        // update the filter state
        this.setState({
            filters,
            activeFilter: filter
        });
        // close the submenu
	    this.props.toggleSubMenu();
        // filter the projects with the selected filter
	    this.props.projectsFilter(filter);
	}

	render() {
		return (
			<div style={{display: this.props.visible ? 'block' : 'none'}}>
			    <List>
			        <Subheader inset={true}>
                        Project Filter
                        <div style={{float: 'right', display: this.state.activeFilter ? 'block' : 'none'}}>
                            Active Filter: {this.state.activeFilter}
                            <FlatButton
                                onClick={this.resetFilters.bind(this)}
                                label="Reset"
                                labelPosition="before"
                                secondary={true}
                                icon={<CloseIcon />}
                                style={{marginLeft:'1em'}}
                            />
                        </div>
                    </Subheader>
                    <ListItem
                        onClick={this.handleClick.bind(this, DEV)}
                        primaryText="Web Development"
                        leftAvatar={<Avatar backgroundColor={this.state.filters[DEV] === true ? 'red' : null} icon={<Icon />} />}
                      />
                    <ListItem
                        onClick={this.handleClick.bind(this, ADMIN)}
                        primaryText="Adminstration"
                        leftAvatar={<Avatar backgroundColor={this.state.filters[ADMIN] === true ? 'red' : null} icon={<Icon />} />}
                    />
                	<Divider />
                    <ListItem
                        onClick={this.handleClick.bind(this, ACADEMIC)}
                        primaryText="Academic"
                        leftAvatar={<Avatar backgroundColor={this.state.filters[ACADEMIC] === true ? 'red' : null} icon={<Icon />} />}
                    />
                    <Divider />
                    <ListItem
                        onClick={this.handleClick.bind(this, EXCEL)}
                        primaryText="Excel"
                        leftAvatar={<Avatar backgroundColor={this.state.filters[EXCEL] === true ? 'red' : null} icon={<Icon />} />}
                    />
                    <ListItem
                        onClick={this.handleClick.bind(this, OTHER)}
                        primaryText="Other"
                        leftAvatar={<Avatar backgroundColor={this.state.filters[OTHER] === true ? 'red' : null} icon={<Icon />} />}
                        rightIcon={null}
                    />
                    <Divider />
    			</List>
            </div>
		);
	}

}

// module.exports = enhanceWithClickOutside(SubNav);
module.exports = SubNav;
