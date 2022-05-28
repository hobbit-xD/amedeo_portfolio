import styled from 'styled-components';
import Colors from 'theme/Colors';

export const QualiStyled = styled.div`
    margin-left: auto;
    margin-right: auto;

    h3 {
        margin: 0;
    }

    .qualification_data {
        display: grid;
        grid-template-columns: 1fr max-content 1fr;
        grid-column-gap: 1.5rem;
        column-gap: 1.5rem;
    }

    .qualification_rounder {
        display: inline-block;
        width: 13px;
        height: 13px;
        background-color: ${Colors.firstColor};
        border-radius: 50%;
    }
    .qualification_line {
        display: block;
        width: 1px;
        height: 100%;
        background-color: ${Colors.firstColor};
        transform: translate(6px, -7px);
    }

    .qualification_title {
        font-weight: 500;
    }

    .qualification_subtitle {
        margin-top: 2px;
        margin-bottom: 5px;
    }

    .qualification_calendar {
        display: flex;
        align-items: center;
        font-size: 15px;
    }

    @media screen and (max-width: 768px) {
        margin-left: 1.5rem;
        margin-right: 1.5rem;
    }
`;
