const React = require('react');

// material-ui components
import AppBar from 'material-ui/AppBar';

import SubHeader from './SubHeader.jsx';


// let Nav = () => (
// class Nav extends React.Component {
let Nav = React.createClass({

    getInitialState () {
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


/*
        <nav>
			<div data-magellan-expedition="fixed">
				<ul class="sub-nav">
					<li class="nav-header">
						<span class="show-for-large-up">Project</span> Portfolio
						<span class="visible-print">of <span class="name_"></span></span>
					</li>

					<li data-magellan-arrival="dev" class="hidden-print hide-for-small-only"><a href="#dev">Web Development</a></li>
					<li data-magellan-arrival="excel" class="hidden-print hide-for-small-only"><a href="#excel" class="excel">Excel</a></li>
					<li data-magellan-arrival="other" class="hidden-print hide-for-small-only"><a href="#other" class="other">Others</a></li>
					<li data-magellan-arrival="academic" class="hidden-print hide-for-small-only"><a href="#academic" class="academic">Academic</a></li>

					<li class="right hidden-print"><i id="search" class="fi-magnifying-glass"></i></li>
					<li class="right" id="last-update" title="Last Update">
						<span class="show-for-large-up">Last Update:</span>
						<span id="modification-date"></span>
					</li>
					<li id="num_projects" class="right"></li>
		      	</ul>
				<aside id="searchbox" class="hidden-print">
				<div class="row">
					<div id="searchitems" class="small-12 columns"></div>
				</div>
				</aside>
			</div>
		</nav>
*/

export default Nav;
