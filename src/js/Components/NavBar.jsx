const React = require('react');

import AppBar from 'material-ui/AppBar';


// let NavBar = () => (
// let NavBar = React.createClass({
class NavBar extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        // This ain't the updates you are looking for.
        return false;
    }

    handleTitleTouchTap() {
        console.log('onTouchTap triggered on the title component');
    }

    handleLeftIconButtonTouchTap() {
        console.log('menu icon click');
        this.props.toggleSubMenu();
    }

	  render() {
        return (
            <AppBar
               onTitleTouchTap={this.handleTitleTouchTap}
               onLeftIconButtonTouchTap={this.handleLeftIconButtonTouchTap.bind(this)}
               title="Project Portfolio"
               showMenuIconButton={true}
            />
        );
	  }
}


module.exports = NavBar;
