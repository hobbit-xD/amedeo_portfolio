import styled from 'styled-components';

const breakpoints = {
    sm: 480,
    md: 768,
    lg: 991,
    xl: 1200,
};

export const Container = styled.div`
    width: 100vw;
    max-width: 90vw;
    background-color: orange;

    @media (min-width: ${breakpoints.xl}px) {
        max-width: 1100px;
    }

    //margin: 0 auto;
    padding-left: 24px;
    padding-right: 24px;
    flex-direction: column;
    //background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : 'white')};
`;
