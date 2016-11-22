const React = require('react');

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/navigation/arrow-upward';

// const FloatingScrollButton = () => (
// const FloatingScrollButton = React.createClass({
class FloatingScrollButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            scrolled: false
        };
    }

    onBtnClick(event) {
        // todo: do this without jquery
        // $('html, body').animate({
        //     scrollTop: 0
        // }, 400);
    }

    componentDidMount() {
        let _this = this;

        // todo: do this without jquery
        // watch the scrolling
        // $(window).scroll(function() {
        //     _this.setState({scrolled: $(window).scrollTop() > 0});
        // });
    }

    render() {
        return (
            <FloatingActionButton
                secondary={true}
                mini={false}
                onClick={this.onBtnClick.bind(this)}
                style={{
                    display: this.state.scrolled ? 'block' : 'none',
                    zIndex:'999',
                    position:'fixed',
                    right:'20px',
                    bottom:'20px'
                }}
                >
                <ContentAdd />
            </FloatingActionButton>
        );
    }

};

// capture the context of the App
FloatingScrollButton.contextTypes = {
    scrolled: React.PropTypes.bool
};


export default FloatingScrollButton;
