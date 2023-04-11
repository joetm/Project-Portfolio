/* @flow */

import React, { useState, useEffect } from 'react';

import FloatingActionButton from '@mui/material/Fab';

//import ContentAdd from 'material-ui/svg-icons/navigation/arrow-upward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


function FloatingScrollButton() {
    const [scrolled, setScrollState] = useState(false)

    useEffect(() => {
        window.onscroll = function (e) {
            let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            setScrollState(scrollTop > 0)
        }
    });

    // see http://stackoverflow.com/a/24559613/426266
    // scrollToTop(scrollDuration : number) {
    function scrollToTop(scrollDuration) {
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

    function onBtnClick() {
        scrollToTop(400)
    }

    return (
        <FloatingActionButton
            onClick={onBtnClick}
            style={{
                display: scrolled ? 'block' : 'none',
                zIndex:'999',
                position:'fixed',
                right:'20px',
                bottom:'20px'
            }}
            color="secondary"
        >
            <ArrowUpwardIcon />
        </FloatingActionButton>
    );
};


export default FloatingScrollButton;
