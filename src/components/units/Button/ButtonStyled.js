import styled from 'styled-components';

export const ButtonStyled = styled.div`
    display: inline-block;
    background-color: HSL(220, 69%, 61%);
    color: #fff;
    padding: 1rem;
    border-radius: 0.4rem;

    a {
        text-decoration: none;
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
