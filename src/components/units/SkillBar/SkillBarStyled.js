import styled from 'styled-components';
import Colors from 'theme/Colors';

export const BarStyled = styled.div`
    height: 5px;
    border-radius: 0.5rem;
    background-color: ${Colors.firstColor_Lighter};

    .colored-bar {
        display: block;
        width: ${(props) => props.percentage}%;
        background-color: ${Colors.firstColor};
        height: 5px;
        border-radius: 0.5rem;
    }
`;
