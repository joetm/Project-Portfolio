/* @flow */

// import appConfig from '../../../config.json5';

import React from 'react';

// import 'whatwg-fetch'; // https://github.com/github/fetch

String.prototype.rot14 = function(){return this.replace(/[a-zA-Z]/g, function(c){return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 14) ? c : c - 26);});};


class Footer extends React.Component {

    serverRequest = null;

    state = {
        loading: true,
        Name: 'loading...',
        Email: 'loading...',
        Phone: 'loading...',
        CV: 'loading...',
        Linkedin: 'loading...',
    };

    componentDidMount() {

        const authorInfo = `./data/author.txt`;

        this.serverRequest = fetch(authorInfo)
        .then((response) => {
            return response.text();
        }).then(function(txt) {
            let vars = txt.split("\n");
            if(vars && vars.length){
                vars = vars.map(function(item) {return item.rot14();});
                this.setState({
                    Name: vars[0],
                    Email: vars[1],
                    Phone: vars[2],
                    CV: vars[3],
                    Linkedin: vars[4]
                });
            }
            this.setState({loading: false});
        }.bind(this));
    }

    // abort the running request if component is unmounted
    componentWillUnmount() {
        this.serverRequest.abort();
    }

    render() {

        return (
            <div id="Footer">
                <div id="contact" className="large-12 columns">
                    <hr />
                    <h4>Contact Me</h4>
                    <div className="small-12 medium-6 columns" id="em">
                        <i className="fi-mail"></i> Email: {this.state.Email}
                    </div>
                    <div className="small-12 medium-6 columns">
                        <a href="#" target="_blank" id="linkedin">
                            <i className="fi-social-linkedin"></i> LinkedIn: {this.state.Linkedin}
                        </a>
                    </div>
                    <div className="small-12 medium-6 columns" id="ph">
                        <i className="fi-telephone"></i> Mobile Phone: {this.state.Phone}
                    </div>
                    <div className="small-12 medium-6 columns" id="cv">
                            <i className="fi-web"></i> CV website: <a href="http:{this.state.CV}">{this.state.CV}</a>
                    </div>
                </div>
            </div>
        );
    }
};

export default Footer;
