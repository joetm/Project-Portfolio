const React = require('react');

import NavBar from './NavBar.jsx';
import SubHeader from './SubHeader.jsx';

// const Nav = () => (
class Nav extends React.PureComponent {

    render() {
        return (
            <div>
                <NavBar
                    toggleSubMenu={this.props.toggleSubMenu}
                />
                <SubHeader
                    visible={this.props.subMenuVisible}
                    projectsFilter={this.props.projectsFilter}
                    toggleSubMenu={this.props.toggleSubMenu}
                />
            </div>
        );
    }
}


export default Nav;
