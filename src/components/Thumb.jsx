/* @flow */

import React from 'react'

export default function Thumb({img, thumb, title, numimgs}) {
	if (!img || !thumb) {
		return null
	}
	return (
		<a className="thumbnail" href={img} title={title}>
		    <img
		    	src={thumb}
		        alt=""
		        loading="lazy"
				decoding="async"
				placeholder="dominantColor"
				style={{
					maxWidth: numimgs >= 3 ? '292px' : 'inherit',
					height: numimgs >= 3 ? '160px' : 'inherit',
				}}
		    />
		</a>
	)
}
