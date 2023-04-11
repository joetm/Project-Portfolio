/* @flow */

import React from 'react';

// const enhanceWithClickOutside = require('react-click-outside'); // https://www.npmjs.com/package/react-click-outside

import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import Subheader from '@mui/material/Subheader';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';
import Icon from '@mui/icons-material/Folder';
import FlatButton from '@mui/material/Button';
// import CloseIcon from 'material-ui/svg-icons/navigation/close';
import CloseIcon from '@mui/icons-material/Close';


const DEV = 'dev';
const ADMIN = 'admin';
const ACADEMIC = 'academic';
const CONFERENCE = 'conference';
const EXCEL = 'excel';
const OTHER = 'other';


const initialFilterState = {
  [DEV]: false,
  [ADMIN]: false,
  [ACADEMIC]: false,
  [CONFERENCE]: false,
  [EXCEL]: false,
  [OTHER]: false
};


class SubNav extends React.Component {

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
            if (Object.prototype.hasOwnProperty.call(this.state.filters, key)) {
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
            if (Object.prototype.hasOwnProperty.call(this.state.filters, key)) {
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
			    <List
                    subheader={
                        <ListSubheader inset={true}>
                            Project Filter
                            <div style={{float: 'right', display: this.state.activeFilter ? 'block' : 'none'}}>
                                Active Filter: {this.state.activeFilter}
                                <FlatButton
                                    onClick={this.resetFilters.bind(this)}
                                    label="Reset"
                                    icon={<CloseIcon />}
                                    style={{marginLeft:'1em'}}
                                    color="secondary"
                                />
                            </div>
                        </ListSubheader>
                    }
                >
                    <ListItem onClick={this.handleClick.bind(this, DEV)}>
                        <ListItemButton>
                          <ListItemIcon>
                            <Avatar backgroundColor={this.state.filters[DEV] === true ? 'red' : null} icon={<Icon />} />
                          </ListItemIcon>
                          <ListItemText primary="Web Development" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem onClick={this.handleClick.bind(this, ADMIN)}>
                        <ListItemButton>
                          <ListItemIcon>
                            <Avatar backgroundColor={this.state.filters[ADMIN] === true ? 'red' : null} icon={<Icon />} />
                          </ListItemIcon>
                          <ListItemText primary="Adminstration" />
                        </ListItemButton>
                    </ListItem>
                	<Divider />
                    {/*
                    <ListItem
                        onClick={this.handleClick.bind(this, ACADEMIC)}
                        primaryText="Academic"
                        leftAvatar={<Avatar backgroundColor={this.state.filters[ACADEMIC] === true ? 'red' : null} icon={<Icon />} />}
                    />
                    <ListItem
                        onClick={this.handleClick.bind(this, CONFERENCE)}
                        primaryText="Conferences, Workshops"
                        leftAvatar={<Avatar backgroundColor={this.state.filters[CONFERENCE] === true ? 'red' : null} icon={<Icon />} />}
                    />
                    <Divider />
                    */}
                    <ListItem onClick={this.handleClick.bind(this, EXCEL)}>
                        <ListItemButton>
                          <ListItemIcon>
                            <Avatar backgroundColor={this.state.filters[EXCEL] === true ? 'red' : null} icon={<Icon />} />
                          </ListItemIcon>
                          <ListItemText primary="Excel" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem onClick={this.handleClick.bind(this, OTHER)}>
                        <ListItemButton>
                          <ListItemIcon>
                            <Avatar backgroundColor={this.state.filters[OTHER] === true ? 'red' : null} icon={<Icon />} />
                          </ListItemIcon>
                          <ListItemText primary="Other" />
                        </ListItemButton>
                    </ListItem>
                    <Divider />
    			</List>
            </div>
		);
	}

}

// module.exports = SubNav;
export default SubNav;
