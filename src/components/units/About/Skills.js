import React, { useState } from 'react';
import UilBrackets from '@iconscout/react-unicons/icons/uil-brackets-curly';
import UilAngle from '@iconscout/react-unicons/icons/uil-angle-down';
import UilServer from '@iconscout/react-unicons/icons/uil-server-network';
import { StyledSkills } from './SkillSyled';
import { Container } from 'theme/GlobalStyles';

import SkillBar from '../SkillBar/SkillBar';

function Skills({ indice, title, subtitle, list }) {
    const [frontEnd, setFrontEnd] = useState(false);

    const handleClick = () => {
        setFrontEnd(!frontEnd);
    };

    return (
        <StyledSkills>
            <Container>
                <div className="skill-container">
                    <div
                        className={
                            frontEnd ? 'skill-content skill-open' : 'skill-content skill-close'
                        }
                    >
                        <div className="skill-header" onClick={handleClick}>
                            {indice === 0 ? (
                                <UilBrackets size="2rem" className="skill-bracket" />
                            ) : (
                                <UilServer size="2rem" className="skill-bracket" />
                            )}
                            <div>
                                <p>{title}</p>
                                <p>{subtitle}</p>
                            </div>
                            <UilAngle className="skill-icon" />
                        </div>
                        {list.map((sl, idx) => (
                            <div key={`subSkill-${idx}`} className="skill-list">
                                <div className="skill-list-data">
                                    <p>{sl.name}</p>
                                    <p>{sl.percentage}%</p>
                                </div>
                                <SkillBar perc={sl.percentage} />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </StyledSkills>
    );
}

export default Skills;
