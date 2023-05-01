/* @flow */

import React from 'react'

function Vid({code}) {
    return (
        <div className="videos">
            <iframe
                width="420"
                height="315"
                src="https://www.youtube.com/embed/{code}"
                frameborder="0"
                allowfullscreen
            ></iframe>
        </div>
    )
}

export default Vid
