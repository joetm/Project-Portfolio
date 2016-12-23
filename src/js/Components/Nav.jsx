const React = require('react');

import NavBar from './NavBar.jsx';
//import SubHeader from './SubHeader.jsx';

// const Nav = () => (
class Nav extends React.PureComponent {
    render() {
        return (
            <div>
                <NavBar
                    toggleSubMenu={this.props.toggleSubMenu}
                />
            </div>
        );
    }
}

//        <SubHeader
//            visible={this.props.subMenuVisible}
//            projectsFilter={this.props.projectsFilter}
//        />

export default Nav;
