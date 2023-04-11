/* @flow */

import React from 'react';


class ProjectLinkRow extends React.PureComponent {
    render() {
        const { label, linkTarget, linkText } = this.props
        return (
            <div>
                <span className="lbl">{label}:</span> <a href={linkTarget} target="_blank">{linkText}</a>
            </div>
        )
    }
}

export default ProjectLinkRow;
