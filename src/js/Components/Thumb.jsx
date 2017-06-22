/* @flow */

import React from 'react';
import { PureComponent } from 'react';

class Thumb extends PureComponent {
	render() {
		if (this.props.img === undefined || this.props.thumb === undefined) {
			return null;
		}
		return (
			<a href={this.props.img} title={this.props.title}>
			    <img src={this.props.thumb}
			        alt=""
			    />
			</a>
		);
	}
};

export default Thumb;
