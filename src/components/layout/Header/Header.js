import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { Container } from 'theme/GlobalStyles';
import { menuLinks } from 'utils/CONSTANTS';
import { Link } from 'react-router-dom';
import { HeaderStyled } from './HeaderStyled';
import Hamburger from 'components/units/Hamburger/Hamburger';

function Header({ title, height }) {
    const [isOpen, setIsOpen] = useState(false);
    //console.log(isOpen);
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
            </Helmet>
            <HeaderStyled height={height}>
                <Container className="header-container">
                    <Link to="/">
                        <h1>Amedeo Iobbi</h1>
                    </Link>
                    <nav className={isOpen ? 'menu_expanded' : 'menu'}>
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
                    <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                        <Hamburger isOpen={isOpen} />
                    </div>
                </Container>
            </HeaderStyled>
        </>
    );
}

export default Header;
