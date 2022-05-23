import styled from 'styled-components';
export const BodyStyled = styled.div`
    .body_intro {
        height: calc(100vh - ${(props) => props.headerHeight}px);
        width: 100vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
`;
