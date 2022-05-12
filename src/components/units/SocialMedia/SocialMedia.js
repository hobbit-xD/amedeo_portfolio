import React from 'react';
import { SocialMediaStyled } from './SocialMediaStyled';
import UilInstagram from '@iconscout/react-unicons/icons/uil-instagram';
import UilLinkedin from '@iconscout/react-unicons/icons/uil-linkedin';
import UilGitHub from '@iconscout/react-unicons/icons/uil-github-alt';

function SocialMedia() {
    return (
        //dimensione icone default =24
        <SocialMediaStyled>
            <UilLinkedin size="30" />
            <UilInstagram size="30" />
            <UilGitHub size="30" />
        </SocialMediaStyled>
    );
}

export default SocialMedia;
