import React from 'react';
import { StyledBurger } from './HamburgerStyled';

function Hamburger({ isOpen }) {
    return (
        <>
            <StyledBurger open={isOpen}>
                <div />
                <div />
                <div />
            </StyledBurger>
        </>
    );
}

export default Hamburger;
