import React from 'react';
import { ButtonStyled } from './ButtonStyled';

import UilArrow from '@iconscout/react-unicons/icons/uil-navigator';

function Button() {
    return (
        <ButtonStyled>
            <div className="button-flex">
                Contact me
                <span className="button-icon">
                    <UilArrow />
                </span>
            </div>
        </ButtonStyled>
    );
}

export default Button;
