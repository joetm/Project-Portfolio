/* @flow */

import React, { useState, useEffect } from 'react'

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

// https://github.com/callemall/material-ui
// import MuiThemeProvider from '@mui/material/MuiThemeProvider';;
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(0, 188, 212)',
    },
    secondary: {
      main: 'rgb(255, 64, 129)',
    },
  },
})


export default function App () {

    const [data, setData] = useState({ current: [], past: [] })
    const [loading, setLoading] = useState(true)
    const [aboutText, setAboutText] = useState('')
    const [introText, setIntroText] = useState('')
    const [subMenuVisible, setSubMenuVisible] = useState(false)

    let serverRequest = null

    useEffect(() => {
        serverRequest = fetch(`/portfolio/data/projects.json`)
            .then((response) => response.json())
            .then((ps) => {
                setData(ps.projects)
                setAboutText(ps.about)
                setIntroText(ps.intro_text)
                setLoading(false)
            })
    }, [])

    // abort the running request if component is unmounted
    // componentWillUnmount() {
    //     if (this.serverRequest && this.serverRequest.abort) {
    //         this.serverRequest.abort();
    //         this.serverRequest = null;
    //     }
    // }

    function projectsFilter(filter) {
        // project filter
        if (filter) {
            // console.log('projectsFilter', filter);
            data.current.map((project) => {
                project.visible = (project.idtype === filter ? true : false)
            })
            data.past.map((project) => {
                project.visible = (project.idtype === filter ? true : false)
            })
        // filter reset
        } else {
            data.current.map((project) => { project.visible = true })
            data.past.map((project) => { project.visible = true })
        }
    }

    function getProjects(projectType) {
        let numProjects = 0
        const projects = data[projectType].map((project, index) => {
            if (project.idtype === 'conference' || project.idtype === 'workshop') {
                return (
                    <Activity
                        key={`${projectType}_${project.title}_${index}`}
                        attrs={project}
                        visible={project.visible !== false}
                    />
                )
            }
            if (project.visible !== false) { numProjects++ }
            return (
                <Project
                    key={`${projectType}_${project.title}_${index}`}
                    attrs={project}
                    visible={project.visible !== false}
                />
            )
        })
        return { projects, numProjects }
    }


    const { projects: currentProjects = [], numProjects: numCurrentProjects } = getProjects('current')
    const { projects: pastProjects = [], numProjects: numPastProjects } = getProjects('past')

    return (
      <ThemeProvider theme={theme}>
        <div className="appContainer">
            <Nav
                projectsFilter={projectsFilter}
                subMenuVisible={subMenuVisible}
                toggleSubMenu={() => setSubMenuVisible(!subMenuVisible)}
            />
            <About
                aboutText={aboutText}
                introText={introText}
            />
            <Projects
                loading={loading}
                title={'Current Projects'}
            >
                {currentProjects}
            </Projects>
            <Projects
                loading={loading}
                title={'Past Projects'}
            >
                {pastProjects}
            </Projects>
            <ScrollButton />
            <BottomBar />
        </div>
      </ThemeProvider>
    )

}
