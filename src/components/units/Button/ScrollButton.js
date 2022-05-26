import React, { useState } from 'react';
import UilTop from '@iconscout/react-unicons/icons/uil-arrow-circle-up';
import { ScrollStyled } from './ScrollStyled';

const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            /* you can also use 'auto' behaviour
         in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <ScrollStyled visible={visible}>
            <UilTop size="35px" onClick={scrollToTop} />
        </ScrollStyled>
    );
};

export default ScrollButton;
