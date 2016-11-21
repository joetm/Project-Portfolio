const React = require('react');

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/navigation/arrow-upward';

// const FloatingScrollButton = () => (
// const FloatingScrollButton = React.createClass({
class FloatingScrollButton extends React.Component {

    onBtnClick(event) {
        console.log('going up');
        window.scrollTo(0,0);
    }

    render() {
        return (
            <FloatingActionButton
                secondary={true}
                mini={false}
                onClick={this.onBtnClick.bind(this)}
                style={{zIndex: '999', position:'fixed', right:'20px', bottom: '20px'}}
                >
                <ContentAdd />
            </FloatingActionButton>
        );
    }

};

export default FloatingScrollButton;
