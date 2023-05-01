/* @flow */

import React from 'react'


export default function ProjectLinkRow({ label, linkTarget, linkText }) {
    return (
        <div>
            <span className="lbl">{label}:</span> <a href={linkTarget} target="_blank">{linkText}</a>
        </div>
    )
}
