/* @flow */

import React from 'react';

import NavBar from './NavBar.jsx';
import NavSubHeader from './NavSubHeader.jsx';


const Nav = ({ toggleSubMenu, subMenuVisible, projectsFilter }) => (
    <div>
        <NavBar toggleSubMenu={toggleSubMenu} />
        <NavSubHeader
            visible={subMenuVisible}
            projectsFilter={projectsFilter}
            toggleSubMenu={toggleSubMenu}
        />
    </div>
);


export default Nav;
