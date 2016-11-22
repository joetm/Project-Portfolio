import React from 'react';

// https://github.com/callemall/material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import 'whatwg-fetch'; // see https://github.com/github/fetch

import Nav from './Nav.jsx';
import About from './About.jsx';
import Footer from './Footer.jsx';
import Project from './Project.jsx';
import BottomBar from './BottomBar.jsx';
import ScrollButton from './ScrollButton.jsx';

import PastProjects from './PastProjects.jsx';
import CurrentProjects from './CurrentProjects.jsx';


// const App = () => (
//   <MuiThemeProvider>
//     <div>
//       <Nav />
//       <About />
//       <PastProjects />
//       <CurrentProjects />
//       <Footer />
//     </div>
//   </MuiThemeProvider>
// );


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
            // console.log('projects', _this.projects);

            _this.setState({loading: false});
        });
    }

    // abort the running request if component is unmounted
    componentWillUnmount() {
        if (this.serverRequest) {
            this.serverRequest.abort();
        }
    }

    render() {
        return (
            <MuiThemeProvider>
              <div>
                <Nav />
                <About aboutText={this.state.aboutText} introText={this.state.introText} />
                <CurrentProjects loading={this.state.loading}>
                    {this.projects.current.map(function(project, index) {
                        return <Project key={index} attrs={project} />;})
                    }
                </CurrentProjects>
                <PastProjects loading={this.state.loading}>
                    {this.projects.past.map(function(project, index) {
                        return <Project key={index} attrs={project} />;})
                    }
                </PastProjects>
                <ScrollButton />
                <BottomBar />
              </div>
            </MuiThemeProvider>
        );
    }
};

export default App;
