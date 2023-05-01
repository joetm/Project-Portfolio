/* @flow */

import React from 'react'

import ProjectLinkRow from './ProjectLinkRow.jsx'


function Activity({ attrs, visible, idtype }) {

    const {
        links,
        title,
        description,
        position,
        organisation,
        location,
        daterange
    } = attrs

    let projectLinks = []
    if (attrs.links !== undefined) {
        for (let i = 0, numrows = attrs.links.length; i < numrows; i++) {
            projectLinks.push(
                <ProjectLinkRow
                    key={`${idtype}_${i}`}
                    label={attrs.links[i].label}
                    linkText={attrs.links[i].title}
                    linkTarget={attrs.links[i].link}
                />
            )
        }
    }

    return (
        <div
            style={{display: visible === false ? 'none' : 'block'}}
            className="row page-break margin-top-print"
        >
            <div className="large-12 columns">

                <hr className="hide-for-print" />

                <h4>{title}</h4>

                <div className="descr" dangerouslySetInnerHTML={{__html: description}}></div>

                <div className="meta columns margin-top-print">

                    {daterange ?
                        <div className="large-12">
                            <span className="lbl">Date:</span> {daterange}
                        </div> :
                        ''
                    }

                    {location ?
                        <div className="large-12">
                            <span className="lbl">Location:</span> <span className="descr">{location}</span>
                        </div> :
                        ''
                    }

                    {projectLinks ?
                        <div className="large-12">
                            {projectLinks}
                        </div> :
                        ''
                    }

                    {position ?
                        <div className="large-12">
                            <span className="lbl">Position:</span> {position}
                        </div> :
                        ''
                    }

                    {organisation ?
                        <div className="large-12">
                            <span className="lbl">Organisation:</span> <span className="descr" dangerouslySetInnerHTML={{__html: organisation}}></span>
                        </div> :
                        ''
                    }

                </div>

            </div>

        </div>
    )


}


export default Activity
