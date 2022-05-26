import React from 'react';
import { BarStyled } from './SkillBarStyled';

function SkillBar({ perc }) {
    return (
        <BarStyled percentage={perc}>
            <span className="colored-bar"></span>
        </BarStyled>
    );
}

export default SkillBar;
