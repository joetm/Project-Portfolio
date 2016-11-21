const React = require('react');

class LoadingAnim extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {

		let icon_style = this.props.loading === true ?
	      {display: 'none'} :
	      {display: 'inline-block'};

        return (
            <i style={icon_style} class="icon-loading animate-spin" title="...loading..."></i>
        )
    }
}

export default LoadingAnim;
