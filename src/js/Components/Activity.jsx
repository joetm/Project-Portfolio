/* @flow */

const React = require('react')

import ProjectLinkRow from './ProjectLinkRow.jsx'


class Activity extends React.PureComponent {
    render() {
        const { attrs, visible, idtype } = this.props

        const {
            links,
            title,
            description,
            position,
            organisation,
            location,
            daterange
        } = attrs

        let projectLinks = [];
        if (attrs.links !== undefined) {
            for (let i = 0, numrows = attrs.links.length; i < numrows; i++) {
                projectLinks.push(
                    <ProjectLinkRow
                        key={`${this.props.idtype}_link_${i}`}
                        label={attrs.links[i].label}
                        linkText={attrs.links[i].title}
                        linkTarget={attrs.links[i].link}
                    />
                );
            }
        }

        return (
            <div
                style={{display: visible === false ? 'none' : 'block'}}
                class="row page-break margin-top-print"
            >
                <div class="large-12 columns">

                    <hr class="hide-for-print" />

                    <h4>{title}</h4>

                    <div class="descr" dangerouslySetInnerHTML={{__html: description}}></div>

                    <div class="meta columns margin-top-print">

                        {daterange ?
                            <div class="large-12">
                                <span class="lbl">Date:</span> {daterange}
                            </div> :
                            ''
                        }

                        {location ?
                            <div class="large-12">
                                <span class="lbl">Location:</span> <span class="descr">{location}</span>
                            </div> :
                            ''
                        }

                        {projectLinks ?
                            <div class="large-12">
                                {projectLinks}
                            </div> :
                            ''
                        }

                        {position ?
                            <div class="large-12">
                                <span class="lbl">Position:</span> {position}
                            </div> :
                            ''
                        }

                        {organisation ?
                            <div class="large-12">
                                <span class="lbl">Organisation:</span> <span class="descr" dangerouslySetInnerHTML={{__html: organisation}}></span>
                            </div> :
                            ''
                        }

                    </div>

                </div>

            </div>
        )
    }
}

export default Activity
