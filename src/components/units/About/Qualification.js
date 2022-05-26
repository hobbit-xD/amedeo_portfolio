import React from 'react';
import { QulificationData } from 'utils/data';
import { QualiStyled } from './QualificationStyled';
import UilCalendar from '@iconscout/react-unicons/icons/uil-calendar-alt';

function Qualification() {
    const size = QulificationData.length;
    return (
        <QualiStyled>
            {QulificationData.map((qd, idx) => (
                <div key={`quali-${idx}`}>
                    {qd.indice % 2 ? (
                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">{qd.ruolo}</h3>
                                <p className="qualification_subtitle">{qd.azienda}</p>
                                <div className="qualification_calendar">
                                    <UilCalendar size="20" />
                                    {qd.periodo}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="qualification_data" key={`quali-${idx}`}>
                            <div>
                                <h3 className="qualification_title">{qd.ruolo}</h3>
                                <p className="qualification_subtitle">{qd.azienda}</p>
                                <div className="qualification_calendar">
                                    <UilCalendar size="20" />
                                    {qd.periodo}
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>

                                {size === qd.indice + 1 ? null : (
                                    <span className="qualification_line"></span>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </QualiStyled>
    );
}

export default Qualification;
