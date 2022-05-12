import React from 'react';
import { ButtonStyled } from './ButtonStyled';

import UilArrow from '@iconscout/react-unicons/icons/uil-navigator';

function Button() {
    return (
        <ButtonStyled>
            <a href="#" className="button-flex">
                Contact me
                <span className="button-icon">
                    <UilArrow />
                </span>
            </a>
        </ButtonStyled>
    );
}

export default Button;
