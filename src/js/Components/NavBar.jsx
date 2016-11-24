const React = require('react');

import AppBar from 'material-ui/AppBar';


// let Nav = () => (
// class Nav extends React.Component {
let NavBar = React.createClass({

    handleTitleTouchTap() {
        console.log('onTouchTap triggered on the title component');
    },

    handleLeftIconButtonTouchTap() {
        console.log('menu icon click');
        this.props.toggleSubMenu();
    },

	render() {
        return (
                <AppBar
                   onTitleTouchTap={this.handleTitleTouchTap}
                   onLeftIconButtonTouchTap={this.handleLeftIconButtonTouchTap}
                   title="Project Portfolio"
                   showMenuIconButton={false}
                />
        );
	}

});


module.exports = NavBar;
