const React = require('react');
const $ = require('jquery');

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/navigation/arrow-upward';

// const FloatingScrollButton = () => (
// const FloatingScrollButton = React.createClass({
class FloatingScrollButton extends React.Component {

    state = {
      visible: false
    };

    onBtnClick(event) {
        console.log('going up');
        // window.scrollTo(0,0);
        $('html, body').animate({
            scrollTop: 0
        }, 400);
    }

    render() {
        return (
            <FloatingActionButton
                secondary={true}
                mini={false}
                onClick={this.onBtnClick.bind(this)}
                style={{display: (this.state.visible ? 'block' : 'none'), zIndex: '999', position:'fixed', right:'20px', bottom: '20px'}}
                >
                <ContentAdd />
            </FloatingActionButton>
        );
    }

};

export default FloatingScrollButton;
