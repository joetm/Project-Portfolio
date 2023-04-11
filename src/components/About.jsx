/* @flow */

import React from 'react';

function ContactLink() {
    function onBtnClick(event) {
        window.scrollTo(0, document.body.scrollHeight);
    }
    return (
        <a href="#contact" onClick={onBtnClick}>
            Contact information
        </a>
    );
}

function About({ aboutText, introText }) {
    return (
        <section className="padded">
            <div id="intro" className="row hidden-print">
                <div className="small-12 columns">
                    <h3>About</h3>
                    <p>
                        { aboutText ? aboutText : <span>&nbsp;</span> }
                    </p>
                    <p>
                        { introText ? introText : <span>&nbsp;</span> }
                    </p>
                    <p>
                        <ContactLink />
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
