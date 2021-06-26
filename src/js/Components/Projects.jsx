/* @flow */

import React from 'react'

import LoadingAnim from './LoadingAnim.jsx'

class Projects extends React.Component {

    state = {
        loading: true
    }

    // TODO: fix CSS and remove id="past"
    render() {
        const { children, visible, title } = this.props
        return (
            <section className="padded" style={{display: visible ? 'block' : 'none'}}>
                <div id="past" class="projects_headline row hide-for-print">
                    <div class="large-12 columns">
                        <hr class="hidden-print" />
                            <h3>{title} <LoadingAnim loading={this.state.loading} /></h3>
                    </div>
                </div>
                <div class="projects_body margin-top-print">
                    {children}
                </div>
            </section>
        )
    }
}

export default Projects
