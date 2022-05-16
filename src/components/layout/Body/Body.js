import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { BodyStyled } from './BodyStyled';

function Body({ title, children }) {
    return (
        <BodyStyled>
            <Header title={title} />
            {children}
        </BodyStyled>
    );
}

export default Body;
