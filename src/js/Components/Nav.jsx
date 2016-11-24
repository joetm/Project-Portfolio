const React = require('react');

import NavBar from './NavBar.jsx';
import SubHeader from './SubHeader.jsx';


// let Nav = () => (
// class Nav extends React.Component {
let Nav = React.createClass({

	render() {
        return (
            <Nav>
                {this.props.children}
            </Nav>
        );
	}

});


export default Nav;
