/* @flow */

import React from 'react'

export default function Thumb({img, thumb, title, width=null, numimgs}) {
	if (!img || !thumb) { return null }
	const imgstyle = {
		maxWidth: numimgs >= 3 ? '292px' : 'inherit',
		height: numimgs >= 3 ? '160px' : 'inherit',
	}
	// console.log('width', width)
	if (width) {
		delete imgstyle.maxWidth
		delete imgstyle.maxHeight
		delete imgstyle['max-width']
		delete imgstyle['max-height']
		imgstyle['width'] = `${width}px`
		imgstyle['height'] = 'auto'
		imgstyle['maxHeight'] = 'inherit'
	}
	return (
		<a className="thumbnail" href={img} title={title}>
		    <img
		    	src={thumb}
		        alt=""
		        loading="lazy"
				decoding="async"
				placeholder="dominantColor"
				style={imgstyle}
		    />
		</a>
	)
}
