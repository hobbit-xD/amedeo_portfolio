import styled from 'styled-components';
import Colors from 'theme/Colors';

export const ScrollStyled = styled.div`
    position: fixed;
    width: 100%;
    left: 95%;
    bottom: 40px;
    //height: 20px;
    //font-size: 3rem;
    z-index: 1;
    cursor: pointer;
    color: ${Colors.firstColor};
    display: ${(props) => (props.visible ? 'inline' : 'none')};

    @media screen and (max-width: 768px) {
        display: none;
    }
`;
