import React from 'react';

// https://github.com/callemall/material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//import { createStore } from 'redux';
//import { Provider } from 'react-redux';

import 'whatwg-fetch'; // see https://github.com/github/fetch

import Nav from './Nav.jsx';
import NavBar from './NavBar.jsx';
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
            loading: true,
            aboutText: '',
            introText: '',
            subMenuVisible: false,
            projects: {
                current: [],
                past: []
            }
        };
        this.serverRequest = null;
    }

    componentDidMount() {
        const projectsData = `./data/projects.json`;

        this.serverRequest = fetch(projectsData)
        .then((response) => {
            return response.json();
        }).then((ps) => {
            // console.log('projects', _this.state.projects);
            this.setState({
                projects: ps.projects,
                aboutText: ps.about,
                introText: ps.intro_text,
                loading: false
            });
        });
    }

    // abort the running request if component is unmounted
    componentWillUnmount() {
        if (this.serverRequest) {
            this.serverRequest.abort();
        }
    }

    projectsFilter(filter) {
        // console.log('projectsFilter', filter);
        this.state.projects.current.map((project) => {
            project.visible = (project.idtype === filter ? true : false);
            // console.log(filter, project.idtype, project.visible);
            return project;
        });
        this.state.projects.past.map((project) => {
            project.visible = (project.idtype === filter ? true : false);
            // console.log(filter, project.idtype, project.visible);
            return project;
        });
    }

    toggleSubMenu() {
        let subMenuVisible = this.state.subMenuVisible;
        console.log('SubHeader state (before):', subMenuVisible);
        this.setState({
            subMenuVisible: !subMenuVisible
        });
        console.log('SubHeader state (after):', !subMenuVisible);
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Nav
                        projectsFilter={this.projectsFilter.bind(this)}
                        subMenuVisible={this.state.subMenuVisible}
                        toggleSubMenu={this.toggleSubMenu.bind(this)}
                    />
                    <About
                        aboutText={this.state.aboutText}
                        introText={this.state.introText}
                    />
                    <Projects
                        loading={this.state.loading}
                        title={'Current Projects'}
                    >
                        {
                            this.state.projects.current.map((project, index) => (
                                    <Project
                                        key={`current_project_${index}`}
                                        attrs={project}
                                        visible={project.visible !== false}
                                    />
                                )
                            )
                        }
                    </Projects>
                    <Projects
                        loading={this.state.loading}
                        title={'Past Projects'}
                    >
                        {
                            this.state.projects.past.map((project, index) => (
                                    <Project
                                        key={`past_project_${index}`}
                                        attrs={project}
                                        visible={project.visible !== false}
                                    />
                                )
                            )
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
