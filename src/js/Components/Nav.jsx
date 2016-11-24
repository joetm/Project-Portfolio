const React = require('react');

import NavBar from './NavBar.jsx';
import SubHeader from './SubHeader.jsx';


// let Nav = () => (
// class Nav extends React.Component {
let Nav = React.createClass({

    getInitialState() {
        // initialise the state (once)
        return {
            submenuVisible: false
        };
    },

    toggleSubMenu() {
        this.setState({submenuVisible: !this.state.submenuVisible});
    },
    hideSubMenu() {
        this.setState({submenuVisible: false});
    },
    showSubMenu() {
        this.setState({submenuVisible: true});
    },

    // projectsFilter is passed through from App

    render() {
        return (
            <div>
                <NavBar
                    title="Project Portfolio"
                    toggleSubMenu={this.toggleSubMenu}
                />
                <SubHeader
                    title="Filter"
                    visible={this.state.submenuVisible}
                    hideSubMenu={this.hideSubMenu}
                    projectsFilter={this.props.projectsFilter}
                />
            </div>
        );
    }

});


export default Nav;
