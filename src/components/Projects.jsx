/* @flow */

import React from 'react'

import LoadingAnim from './LoadingAnim.jsx'


function Projects({ loading, children, title }) {
    return (
        <section className="padded">
            <div id="past" className="projects_headline row hide-for-print">
                <div className="large-12 columns">
                    <hr className="hidden-print" />
                    <h3>
                        {title} <LoadingAnim loading={!loading} />
                    </h3>
                </div>
            </div>
            {
                children &&
                    <div className="projects_body margin-top-print">
                        {children}
                    </div>
            }
        </section>
    )
}

export default Projects
