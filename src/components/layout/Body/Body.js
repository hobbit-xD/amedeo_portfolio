import ScrollButton from 'components/units/Button/ScrollButton';
import React, { useEffect, useRef, useState } from 'react';
//import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { BodyStyled } from './BodyStyled';

function Body({ title, children }) {
    const headerRef = useRef(null);
    const [headerHeight, setHeight] = useState(0);

    useEffect(() => {
        if (headerRef !== null) {
            setHeight(headerRef.current.clientHeight);
        }
        function heightFunc() {
            setHeight(headerRef.current.clientHeight);
        }

        window.addEventListener('resize', heightFunc);

        return () => {
            window.removeEventListener('resize', heightFunc);
        };
    }, []);

    return (
        <BodyStyled headerHeight={headerHeight}>
            <div ref={headerRef}>
                <Header title={title} height={headerHeight} />
            </div>
            {children}
            <ScrollButton />
        </BodyStyled>
    );
}

export default Body;
