import React from 'react';
import { SocialMediaStyled } from './SocialMediaStyled';
import UilInstagram from '@iconscout/react-unicons/icons/uil-instagram';
import UilLinkedin from '@iconscout/react-unicons/icons/uil-linkedin';
import UilGitHub from '@iconscout/react-unicons/icons/uil-github-alt';

function SocialMedia() {
    return (
        //dimensione icone default =24
        <SocialMediaStyled>
            <a href="#" className="icon" target="_blank">
                <UilLinkedin size="24" />
            </a>
            <a href="#" className="icon" target="_blank">
                <UilInstagram size="24" />
            </a>
            <a href="#" className="icon" target="_blank">
                <UilGitHub size="24" />
            </a>
        </SocialMediaStyled>
    );
}

export default SocialMedia;
