/* @flow */

import React from 'react';

// https://github.com/callemall/material-ui
// import MuiThemeProvider from '@mui/material/MuiThemeProvider';;
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(0, 188, 212)',
    },
    secondary: {
      main: 'rgb(255, 64, 129)',
    },
  },
});

// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

// import 'whatwg-fetch'; // see https://github.com/github/fetch

import Nav from '../components/Nav.jsx'
import About from '../components/About.jsx'
import Footer from '../components/Footer.jsx'
import Project from '../components/Project.jsx'
import Projects from '../components/Projects.jsx'
import Activity from '../components/Activity.jsx'
import BottomBar from '../components/BottomBar.jsx'
import ScrollButton from '../components/ScrollButton.jsx'

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
        const projectsData = `/data/projects.json`;
        this.serverRequest = fetch(projectsData)
        .then((response) => response.json())
        .then((ps) => {
            this.setState({
                projects: ps.projects,
                aboutText: ps.about,
                introText: ps.intro_text,
                loading: false,
            });
        });
    }

    // abort the running request if component is unmounted
    // componentWillUnmount() {
    //     if (this.serverRequest && this.serverRequest.abort) {
    //         this.serverRequest.abort();
    //         this.serverRequest = null;
    //     }
    // }

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

        // <ThemeProvider>
        // </ThemeProvider>

        return (
          <ThemeProvider theme={theme}>
            <div className="appContainer">
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
                    {currentProjects}
                </Projects>
                <Projects
                    loading={this.state.loading}
                    title={'Past Projects'}
                >
                    {pastProjects}
                </Projects>
                <ScrollButton />
                <BottomBar />
            </div>
          </ThemeProvider>
        );
    }
};

export default App;
