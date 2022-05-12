import React from 'react';
import Helmet from 'react-helmet';
import { HeaderStyled } from './HeaderStyled';

function Header({ title }) {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
            </Helmet>
            <HeaderStyled>Header</HeaderStyled>
        </>
    );
}

export default Header;
