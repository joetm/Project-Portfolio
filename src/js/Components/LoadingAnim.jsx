const React = require('react');

class LoadingAnim extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <i class="icon-loading animate-spin" title="...loading..."></i>
        )
    }
}

export default LoadingAnim;
