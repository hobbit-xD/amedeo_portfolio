import styled from 'styled-components';

export const IntroStyled = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    //background-color: yellow;
    align-items: center;
    justify-content: space-evenly;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
