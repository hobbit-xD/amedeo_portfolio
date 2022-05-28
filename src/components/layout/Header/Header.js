import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container } from 'theme/GlobalStyles';
import { menuLinks } from 'utils/CONSTANTS';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { HeaderStyled } from './HeaderStyled';
import Hamburger from 'components/units/Hamburger/Hamburger';

function Header({ title, height }) {
    const [isOpen, setIsOpen] = useState(false);
    //console.log(isOpen);
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{title}</title>
                </Helmet>
            </HelmetProvider>
            <HeaderStyled height={height}>
                <Container className="header-container">
                    <Link to="/">
                        <h1>Amedeo Iobbi</h1>
                    </Link>
                    <nav className={isOpen ? 'menu_expanded' : 'menu'}>
                        <ul>
                            {menuLinks.map((ml) => (
                                <li key={ml.path}>
                                    <HashLink
                                        smooth
                                        to={ml.path}
                                        onClick={() => setIsOpen(!isOpen)}
                                    >
                                        {ml.name}
                                    </HashLink>
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
                    <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                        <Hamburger isOpen={isOpen} />
                    </div>
                </Container>
            </HeaderStyled>
        </>
    );
}

export default Header;
