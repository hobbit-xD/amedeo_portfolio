import React from 'react';
import { IntroStyled } from './IntroStyled';
import Amedeo from 'assets/img/amedeo_pinup.png';
import Button from '../Button/Button';
import SocialMedia from '../SocialMedia/SocialMedia';
import useWindowDimensions from 'utils/useWindowDimension';

import UilArrow from '@iconscout/react-unicons/icons/uil-navigator';

function Intro() {
    const { height, width } = useWindowDimensions();
    //console.log(height);
    return (
        <IntroStyled>
            {width > 768 ? (
                <>
                    <div className="intro_container">
                        <div className="item-1">
                            <SocialMedia />
                        </div>
                        <div className="item-2">
                            <h1>Hi, I'm Amedeo</h1>
                            <p>Tech Entusiast</p>
                            <a
                                href="https://www.linkedin.com/in/amedeo-iobbi/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <Button text="Contact Me" icon={<UilArrow />} />
                            </a>
                        </div>
                        <div className="item-3">
                            <img src={Amedeo} alt="Amedeo_Image" />
                        </div>
                    </div>
                </>
            ) : (
                <div className="intro_container">
                    <div className="social_image_container">
                        <div className="item-1">
                            <SocialMedia />
                        </div>
                        <div className="item-3">
                            <img src={Amedeo} alt="Amedeo_Image" />
                        </div>
                    </div>

                    <div className="item-2">
                        <h1>Hi, I'm Amedeo</h1>
                        <p>Tech Entusiast</p>
                        <a
                            href="https://www.linkedin.com/in/amedeo-iobbi/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <Button text="Contact Me" icon={<UilArrow />} />
                        </a>
                    </div>
                </div>
            )}
        </IntroStyled>
    );
}

export default Intro;

/* (
        <IntroStyled>
            <div className="item-1">
                <SocialMedia />
            </div>

            <div className="profile-desc-div">
                <ProfileDescStyled>
                    <div className="item-2">
                        <h1>Hi, I'm Amedeo</h1>
                        <p>Tech Entusiast</p>
                        <Button />
                    </div>
                    <div className="item-3">
                        <img src={Amedeo} alt="Amedeo_Image" width={500} />
                    </div>
                </ProfileDescStyled>
            </div>
        </IntroStyled>
    ); */
