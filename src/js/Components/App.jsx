/* @flow */

import React from 'react';

// https://github.com/callemall/material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

import 'whatwg-fetch'; // see https://github.com/github/fetch

import LazyLoad from 'react-lazyload';

import Nav from './Nav.jsx'
import NavBar from './NavBar.jsx'
import About from './About.jsx'
import Footer from './Footer.jsx'
import Project from './Project.jsx'
import Projects from './Projects.jsx'
import Activity from './Activity.jsx'
import BottomBar from './BottomBar.jsx'
import ScrollButton from './ScrollButton.jsx'


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
            this.serverRequest = null;
        }
    }

    projectsFilter(filter) {
        // project filter
        if (filter) {
            // console.log('projectsFilter', filter);
            this.state.projects.current.map((project) => {
                project.visible = (project.idtype === filter ? true : false);
            });
            this.state.projects.past.map((project) => {
                project.visible = (project.idtype === filter ? true : false);
            });
        // filter reset
        } else {
            this.state.projects.current.map((project) => {
                project.visible = true;
            });
            this.state.projects.past.map((project) => {
                project.visible = true;
            });
        }
    }

    toggleSubMenu() {
        let subMenuVisible = this.state.subMenuVisible;
        this.setState({
            subMenuVisible: !subMenuVisible
        });
    }

    getProjects(projectType) {
        let numProjects = 0;
        let projects = this.state.projects[projectType].map((project, index) => {
                            if (project.idtype === 'conference' || project.idtype === 'workshop') {
                                return (
                                    <Activity
                                        key={`${projectType}_project_${index}`}
                                        attrs={project}
                                        visible={project.visible !== false}
                                    />
                                );
                            }
                            if (project.visible !== false) {
                                numProjects++;
                            }
                            return (
                                <Project
                                    key={`${projectType}_project_${index}`}
                                    attrs={project}
                                    visible={project.visible !== false}
                                />
                            );
                        });
        return { projects, numProjects };
    }

    render() {

        let { projects: currentProjects = [], numProjects: numCurrentProjects } = this.getProjects('current');
        let { projects: pastProjects = [], numProjects: numPastProjects } = this.getProjects('past');

        // console.log('#currentProjects', numCurrentProjects);
        // console.log('#pastProjects', numPastProjects);

        return (
            <MuiThemeProvider>
                <div className="appContainer">
                    <LazyLoad>
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
                        visible={numCurrentProjects > 0}
                    >
                        {currentProjects}
                    </Projects>
                    <Projects
                        loading={this.state.loading}
                        title={'Past Projects'}
                        visible={numPastProjects > 0}
                    >
                        {pastProjects}
                    </Projects>
                    </LazyLoad>
                    <ScrollButton />
                    <BottomBar />
                </div>
            </MuiThemeProvider>
        );
    }
};

export default App;
