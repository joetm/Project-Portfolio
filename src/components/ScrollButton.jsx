/* @flow */

import React from 'react';
import { Component } from 'react';

import FloatingActionButton from '@mui/material/Fab';

//import ContentAdd from 'material-ui/svg-icons/navigation/arrow-upward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


class FloatingScrollButton extends Component {

    state = {
        scrolled: false
    };

    // see http://stackoverflow.com/a/24559613/426266
    // scrollToTop(scrollDuration : number) {
    scrollToTop(scrollDuration) {
        var scrollStep = -window.scrollY / (scrollDuration / 15),
            scrollInterval = setInterval(function(){
            if ( window.scrollY != 0 ) {
                window.scrollBy( 0, scrollStep );
            }
            else {
                clearInterval(scrollInterval);
            }
        },15);
    }

    onBtnClick() {
        this.scrollToTop(400)
    }

    componentDidMount() {
        window.onscroll = function (e) {
            let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            // console.log('scrollTop', scrollTop);
            this.setState({scrolled: scrollTop > 0});
        }.bind(this);
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
                <ArrowUpwardIcon />
            </FloatingActionButton>
        );
    }

};


export default FloatingScrollButton;
