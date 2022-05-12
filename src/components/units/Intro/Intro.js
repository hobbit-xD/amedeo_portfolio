import React from 'react';
import { IntroStyled } from './IntroStyled';
import Amedeo from 'assets/img/amedeo_pinup.png';
import Button from '../Button/Button';
import SocialMedia from '../SocialMedia/SocialMedia';

function Intro() {
    return (
        <IntroStyled>
            <div>
                <SocialMedia />
                <h1>Amedeo Iobbi</h1>
                <p>Tech Entusiast</p>
                <Button />
            </div>
            <img src={Amedeo} alt="Amedeo_Image" />
        </IntroStyled>
    );
}

export default Intro;
