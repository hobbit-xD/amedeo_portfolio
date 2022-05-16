import styled from 'styled-components';
import Colors from 'theme/Colors';

export const ButtonStyled = styled.div`
    display: inline-block;
    background-color: ${Colors.firstColor};
    padding: 1rem;
    border-radius: 0.6rem;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: ${Colors.firstColor_Alt};
    }

    .button-flex {
        display: inline-flex;
        align-items: center;
    }

    .button-icon {
        margin-left: 0.5rem;
        transition: 0.3s;
    }
`;
