const React = require('react');

import AppBar from 'material-ui/AppBar';
import SubHeader from './SubHeader.jsx';


// let Nav = () => (
// class Nav extends React.Component {
let Nav = React.createClass({

    getInitialState() {
        return {
            submenuVisible: false
        };
    },

    handleTitleTouchTap() {
        console.log('onTouchTap triggered on the title component');
    },

    handleLeftIconButtonTouchTap() {
        console.log('menu icon click');
        // console.log('submenu visible state', !this.state.submenuVisible);
        this.setState({submenuVisible: !this.state.submenuVisible});
    },

	render() {
        return (
            <div>
                <AppBar
                   onTitleTouchTap={this.handleTitleTouchTap}
                   onLeftIconButtonTouchTap={this.handleLeftIconButtonTouchTap}
                   title="Project Portfolio"
                />
                <SubHeader
                   title="TEST"
                   visible={this.state.submenuVisible}
                />
            </div>
        );
	}

});


export default Nav;
