/* @flow */

import React, { useState, useEffect, useRef } from 'react'


export function ScreenSideBySide({imgs = [], bgcolor = '#505050'}) {

	const l1 = 2,
		  w1 = 45.5,
		  t1 = 4.5,
		  h1 = 63

	const l2 = 52,
		  w2 = 45.5,
		  t2 = 4.5,
		  h2 = 63

	const [left, setLeft] = useState([ l1, l2 ])
	const [width, setWidth] = useState([ w1, w2 ])
	const [top, setTop] = useState([ t1, t2 ])
	const [height, setheight] = useState([ h1, h2 ])

	const frameRef = useRef()

	const resizeScreenshot = () => {
		const fw = frameRef.current.width
		const fh = frameRef.current.height
		setLeft([ l1 / 100 * fw + '%', l2 / 100 * fw + '%' ])
		setWidth([ w1 / 100 * fw + '%', w1 / 100 * fw + '%' ])
		setTop([ t1 / 100 * fh + '%', t2 / 100 * fh + '%' ])
		setheight([ h1 / 100 * fh + '%', h2 / 100 * fh + '%' ])
	}

	useEffect(() => {
		window.addEventListener('resize', resizeScreenshot)
		return () => window.removeEventListener('resize', resizeScreenshot)
	}, [])

	// console.log(left[0], width[0], top[0], height[0])
	// console.log(left[1], width[1], top[1], height[1])

	return (
		<div style={{position: 'relative', margin: '1rem 0'}}>
		    <img
		    	ref={frameRef}
		    	src={'/portfolio/img/frames/screen-sidebyside.png'}
		        alt=""
		        loading="lazy"
				decoding="async"
				placeholder="dominantColor"
				style={{zIndex: 2}}
		    />
		    <div style={{
		    	position: 'absolute',
		    	left: left[0] + '%',
		    	top: top[0] + '%',
		    	width: width[0] + '%',
		    	height: height[0] + '%',
				backgroundImage: `url(${imgs[0].img})`,
				backgroundPosition: '50% 50%',
				backgroundSize: 'cover',
				backgroundColor: bgcolor,
				zIndex: 1,
		    }}>
			</div>
		    <div style={{
		    	position: 'absolute',
		    	left: left[1] + '%',
		    	top: top[1] + '%',
		    	width: width[1] + '%',
		    	height: height[1] + '%',
				backgroundImage: `url(${imgs[1].img})`,
				backgroundPosition: '50% 50%',
				backgroundSize: 'cover',
				backgroundColor: bgcolor,
				zIndex: 1,
		    }}>
			</div>
		</div>
	)
}


export function TabletSideBySide({imgs = [], bgcolor = '#666666'}) {

	const l1 = 12,
		  w1 = 28.5,
		  t1 = 11.5,
		  h1 = 77.5

	const l2 = 59.8,
		  w2 = 28.5,
		  t2 = 11.5,
		  h2 = 77.5

	const [left, setLeft] = useState([ l1, l2 ])
	const [width, setWidth] = useState([ w1, w2 ])
	const [top, setTop] = useState([ t1, t2 ])
	const [height, setheight] = useState([ h1, h2 ])

	const frameRef = useRef()

	const resizeScreenshot = () => {
		const fw = frameRef.current.width
		const fh = frameRef.current.height
		setLeft([ l1 / 100 * fw + '%', l2 / 100 * fw + '%' ])
		setWidth([ w1 / 100 * fw + '%', w1 / 100 * fw + '%' ])
		setTop([ t1 / 100 * fh + '%', t2 / 100 * fh + '%' ])
		setheight([ h1 / 100 * fh + '%', h2 / 100 * fh + '%' ])
	}

	useEffect(() => {
		window.addEventListener('resize', resizeScreenshot)
		return () => window.removeEventListener('resize', resizeScreenshot)
	}, [])

	// console.log(left[0], width[0], top[0], height[0])
	// console.log(left[1], width[1], top[1], height[1])

	return (
		<div style={{position: 'relative'}}>
		    <img
		    	ref={frameRef}
		    	src={'/portfolio/img/frames/midjourney/tablet-sidebyside.png'}
		        alt=""
		        loading="lazy"
				decoding="async"
				placeholder="dominantColor"
				style={{zIndex: 1}}
		    />
		    <div style={{
		    	position: 'absolute',
		    	left: left[0] + '%',
		    	top: top[0] + '%',
		    	width: width[0] + '%',
		    	height: height[0] + '%',
				backgroundImage: `url(${imgs[0].img})`,
				backgroundPosition: '50% 50%',
				backgroundSize: 'cover',
				backgroundColor: bgcolor,
				zIndex: -1,
		    }}>
			</div>
		    <div style={{
		    	position: 'absolute',
		    	left: left[1] + '%',
		    	top: top[1] + '%',
		    	width: width[1] + '%',
		    	height: height[1] + '%',
				backgroundImage: `url(${imgs[1].img})`,
				backgroundPosition: '50% 50%',
				backgroundSize: 'cover',
				backgroundColor: bgcolor,
				zIndex: -1,
		    }}>
			</div>
		</div>
	)
}


export function TabletFrame({img}) {

	const basepath = '/portfolio/img/frames/midjourney'

	const l = 20.5,
		  w = 59.2,
		  t = 16.5,
		  h = 62
	const bg = `${basepath}/f-e2c8ac6d-8b49-4070-9ee0-9664641b34ff.png`

	const [left, setLeft] = useState(l)
	const [width, setWidth] = useState(w)
	const [top, setTop] = useState(t)
	const [height, setheight] = useState(h)

	const frameRef = useRef()

	const resizeScreenshot = () => {
		const fw = frameRef.current.width
		const fh = frameRef.current.height
		setLeft(l / 100 * fw + '%')
		setWidth(w / 100 * fw + '%')
		setTop(t / 100 * fh + '%')
		setheight(h / 100 * fh + '%')
	}

	useEffect(() => {
		window.addEventListener('resize', resizeScreenshot)
		return () => window.removeEventListener('resize', resizeScreenshot)
	}, [])

	return (
		<div style={{position: 'relative'}}>
		    <img
		    	ref={frameRef}
		    	src={bg}
		        alt=""
		        loading="lazy"
				decoding="async"
				placeholder="dominantColor"
				style={{zIndex: 1}}
		    />
		    <div style={{
		    	position: 'absolute',
		    	left: left + '%',
		    	top: top + '%',
		    	width: width + '%',
		    	height: height + '%',
				backgroundImage: `url(${img})`,
				backgroundPosition: '0 0',
				backgroundSize: 'cover',
				zIndex: -1,
		    }}>
			</div>
		</div>
	)
}


export function LaptopFrame({img}) {

	if (Array.isArray(img)) { img = img[0] }

	const basepath = '/portfolio/img/frames/midjourney'

	const l = 20.5,
		  w = 59.2,
		  t = 16.5,
		  h = 62

	const bgs = [
		'f-2b40699a-2aad-4bdd-8b6f-fbfe2b5d6438.png',
		'f-3339240f-0088-47f0-8fb0-f2a0d11a9d8a.png',
		'f-c647d553-f7c6-44d0-aea2-13094d7c8af1.png',
		'f-d07f1a6c-a3c0-49a7-b2e4-37e8d4fb219d.png',
	]
	const bg = `${basepath}/${bgs[Math.floor(Math.random() * bgs.length + 1)]}`

	const [left, setLeft] = useState(l)
	const [width, setWidth] = useState(w)
	const [top, setTop] = useState(t)
	const [height, setheight] = useState(h)

	const frameRef = useRef()

	const resizeScreenshot = () => {
		const fw = frameRef.current.width
		const fh = frameRef.current.height
		setLeft(l / 100 * fw + '%')
		setWidth(w / 100 * fw + '%')
		setTop(t / 100 * fh + '%')
		setheight(h / 100 * fh + '%')
	}

	useEffect(() => {
		window.addEventListener('resize', resizeScreenshot)
		return () => window.removeEventListener('resize', resizeScreenshot)
	}, [])

	return (
		<div style={{position: 'relative'}}>
		    <img
		    	ref={frameRef}
		    	src={bg}
		        alt=""
		        loading="lazy"
				decoding="async"
				placeholder="dominantColor"
				style={{zIndex: 1}}
		    />
		    <div style={{
		    	position: 'absolute',
		    	left: left + '%',
		    	top: top + '%',
		    	width: width + '%',
		    	height: height + '%',
				backgroundImage: `url(${img})`,
				backgroundPosition: '0 0',
				backgroundSize: 'cover',
				zIndex: -1,
		    }}>
			</div>
		</div>
	)
}

export default LaptopFrame
