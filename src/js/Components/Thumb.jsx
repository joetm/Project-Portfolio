const React = require('react');

class Thumb extends React.Component {

	render() {
		if (this.props.img === undefined || this.props.thumb === undefined) {
			return '';
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
