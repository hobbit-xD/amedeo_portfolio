import React from 'react';
import { AboutStyled } from './AboutStyled';
import Amedeo2 from 'assets/img/DSC00348.JPG';
import UIDownload from '@iconscout/react-unicons/icons/uil-download-alt';
import Button from '../Button/Button';
import { AboutData } from 'utils/data';
import Qualification from './Qualification';
import Skills from './Skills';
import { SkillData } from 'utils/data';
function About() {
    return (
        <AboutStyled>
            <h1>About Me</h1>
            <h3>My personal Introduction</h3>
            <div className="about_details">
                <img src={Amedeo2} width="350px" alt="Amedeo" />
                <div className="about_data">
                    <p>dddd</p>
                    <div className="about_info">
                        {AboutData.map((ad, idx) => (
                            <div key={`about-${idx}`}>
                                <span className="title">{ad.number}</span>
                                <span className="descr">
                                    {ad.descr1}
                                    <br></br>
                                    {ad.descr2}
                                </span>
                            </div>
                        ))}
                    </div>
                    <Button text="Download CV" icon={<UIDownload />} />
                </div>
            </div>

            <h3 className="quali-title">My Personal Journey</h3>
            <Qualification />

            <h3 className="skills-title">My Skills</h3>
            {SkillData.map((sk) => (
                <Skills indice={sk.indice} title={sk.title} subtitle={sk.subtitle} list={sk.list} />
            ))}
        </AboutStyled>
    );
}

export default About;
