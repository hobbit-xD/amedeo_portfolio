import Body from 'components/layout/Body/Body';
import About from 'components/units/About/About';
import Intro from 'components/units/Intro/Intro';

import React from 'react';
import { HomeStyled } from './HomeStyled';

function Home() {
    return (
        <HomeStyled>
            <Body title="Amedeo Iobbi - Home">
                <div className="body_intro" id="intro">
                    <Intro />
                </div>
                <div id="about">
                    <About />
                </div>
            </Body>
        </HomeStyled>
    );
}

export default Home;
