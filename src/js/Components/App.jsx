import React from 'react';

// https://github.com/callemall/material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import 'whatwg-fetch'; // see https://github.com/github/fetch

import Nav from './Nav.jsx';
import NavBar from './NavBar.jsx';
import SubHeader from './SubHeader.jsx';
import About from './About.jsx';
import Footer from './Footer.jsx';
import Project from './Project.jsx';
import Projects from './Projects.jsx';
import BottomBar from './BottomBar.jsx';
import ScrollButton from './ScrollButton.jsx';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    projects = {
        current: [],
        past: []
    };

    componentDidMount() {
        let _this = this;
        const projectsData = `./data/projects.json`;

        this.serverRequest = fetch(projectsData)
        .then((response) => {
            return response.json();
        }).then(function(ps) {
            // console.log(ps);

            _this.setState({aboutText: ps.about});
            _this.setState({introText: ps.intro_text});

            _this.projects = ps.projects;
            console.log('projects', _this.projects);

            _this.setState({loading: false});
        });
    }

    // abort the running request if component is unmounted
    componentWillUnmount() {
        if (this.serverRequest) {
            this.serverRequest.abort();
        }
    }

                   // onTitleTouchTap={this.handleTitleTouchTap}
                   // onLeftIconButtonTouchTap={this.handleLeftIconButtonTouchTap}

    render() {
        return (
            <MuiThemeProvider>
              <div>
                <Nav>
                    <NavBar
                       title="Project Portfolio"
                    />
                    <SubHeader
                       title="TEST"
                       visible={this.state.submenuVisible}
                    />
                </Nav>
                <About aboutText={this.state.aboutText} introText={this.state.introText} />
                <Projects
                    loading={this.state.loading}
                    title={'Current Projects'}
                    >
                    {
                        this.projects.current.map(function(project, index) {
                            if (1==1) {

                            }
                            return (
                                <Project
                                    key={'current_'+index}
                                    attrs={project}
                                />
                            );
                        })
                    }
                </Projects>
                <Projects
                    loading={this.state.loading}
                    title={'Past Projects'}
                    >
                    {
                        this.projects.past.map(function(project, index) {
                            return (
                                <Project
                                    key={'past_'+index}
                                    attrs={project}
                                />
                            );
                        })
                    }
                </Projects>
                <ScrollButton />
                <BottomBar />
              </div>
            </MuiThemeProvider>
        );
    }
};

export default App;
