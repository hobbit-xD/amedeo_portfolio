import React from 'react';
import { SocialMediaStyled } from './SocialMediaStyled';
import UilInstagram from '@iconscout/react-unicons/icons/uil-instagram';
import UilLinkedin from '@iconscout/react-unicons/icons/uil-linkedin';
import UilGitHub from '@iconscout/react-unicons/icons/uil-github-alt';

function SocialMedia() {
    return (
        //dimensione icone default =24
        <SocialMediaStyled>
            <a href="https://it.linkedin.com/#" className="icon" target="_blank" rel="noreferrer">
                <UilLinkedin size="24" />
            </a>
            <a
                href="https://www.instagram.com/amedeo_iobs/"
                className="icon"
                target="_blank"
                rel="noreferrer"
            >
                <UilInstagram size="24" />
            </a>
            <a
                href="https://github.com/hobbit-xD"
                className="icon"
                target="_blank"
                rel="noreferrer"
            >
                <UilGitHub size="24" />
            </a>
        </SocialMediaStyled>
    );
}

export default SocialMedia;
