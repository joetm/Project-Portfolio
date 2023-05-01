/* @flow */

// import appConfig from '../../../config.json5';

import React, { useState, useEffect } from 'react'

// import 'whatwg-fetch'; // https://github.com/github/fetch

String.prototype.rot14 = function(){return this.replace(/[a-zA-Z]/g, function(c){return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 14) ? c : c - 26);});};



function Footer() {

    const [loading, updateLoading] = useState(true)
    const [name, setName] = useState('loading...')
    const [email, setEmail] = useState('loading...')
    // const [phone, setPhone] = useState('loading...')
    const [cv, setCV] = useState('loading...')
    const [linkedin, setLinkedin] = useState('loading...')

    useEffect(() => {
        fetch(`./data/author.txt`)
            .then((response) => response.text())
            .then(function(txt) {
                let vars = txt.split("\n")
                if(vars && vars.length){
                    vars = vars.map((item) => item.rot14())
                    setName(vars[0])
                    setEmail(vars[1])
                    // setPhone(vars[2])
                    setCV(vars[3])
                    setLinkedin(vars[4])
                }
                updateLoading(false)
            })
    }, [])

    return (
        <div id="Footer">
            <div id="contact" className="large-12 columns">
                <hr />
                <h4>Contact Me</h4>
                <div className="small-12 medium-6 columns" id="em">
                    <i className="fi-mail"></i> Email: {email}
                </div>
                <div className="small-12 medium-6 columns">
                    <a href="#" target="_blank" id="linkedin">
                        <i className="fi-social-linkedin"></i> LinkedIn: {linkedin}
                    </a>
                </div>
                {/*
                <div className="small-12 medium-6 columns" id="ph">
                    <i className="fi-telephone"></i> Mobile Phone: {phone}
                </div>
                */}
                <div className="small-12 medium-6 columns" id="cv">
                        <i className="fi-web"></i> CV website: <a href="http:{this.state.CV}">{cv}</a>
                </div>
            </div>
        </div>
    )

}


export default Footer
