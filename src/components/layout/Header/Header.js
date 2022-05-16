import React from 'react';
import Helmet from 'react-helmet';
import { Container } from 'theme/GlobalStyles';
import { menuLinks } from 'utils/CONSTANTS';
import { Link } from 'react-router-dom';
import { HeaderStyled } from './HeaderStyled';

function Header({ title }) {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
            </Helmet>
            <HeaderStyled>
                <Container className="header-container">
                    <Link to="/">
                        <h1>Amedeo Iobbi</h1>
                    </Link>
                    <nav className="menu">
                        <ul>
                            {menuLinks.map((ml) => (
                                <li key={ml.path}>
                                    <Link to={ml.path}>{ml.name}</Link>
                                    {ml.subMenu ? (
                                        <ul>
                                            {ml.subMenu.map((sm) => (
                                                <li key={sm.path}>
                                                    <Link to={sm.path}>{sm.name}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : null}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </Container>
            </HeaderStyled>
        </>
    );
}

export default Header;
