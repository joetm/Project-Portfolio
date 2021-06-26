/* @flow */

import React from 'react';

class ContactLink extends React.PureComponent {
    onBtnClick(event) {
        window.scrollTo(0, document.body.scrollHeight);
    }
    render() {
        return (
            <a
            href="#contact"
            onClick={this.onBtnClick.bind(this)}
            >
                Contact information
            </a>
        );
    }
}

class About extends React.PureComponent {
    render () {
        return (
            <section className="padded">
                <div id="intro" className="row hidden-print">
                    <div className="small-12 columns">
                        <h3>About</h3>
                        <p>
                            {this.props.aboutText}
                        </p>
                        <p>
                            {this.props.introText}
                        </p>
                        <p>
                            <ContactLink />
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

module.exports = About;
