import React from 'react';
import { ButtonStyled } from './ButtonStyled';

import UilArrow from '@iconscout/react-unicons/icons/uil-navigator';

function Button({ text, icon }) {
    return (
        <ButtonStyled>
            <div className="button-flex">
                {text}
                <span className="button-icon">{icon}</span>
            </div>
        </ButtonStyled>
    );
}

export default Button;
