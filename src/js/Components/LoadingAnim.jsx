const React = require('react');

class LoadingAnim extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return this.props.loading === true ? (
            <i class="icon-loading animate-spin" title="...loading..."></i>
        ) : 'done';
    }
}

export default LoadingAnim;
