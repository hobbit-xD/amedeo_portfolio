import styled from 'styled-components';
import Colors from 'theme/Colors';

export const StyledSkills = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 768px;

    .skill-container {
        display: grid;
        grid-gap: 1.5rem;
        gap: 1.5rem;
        margin-bottom: 20px;
    }

    .skill-header {
        display: flex;
        align-items: center;
        cursor: pointer;

        p {
            margin: 0;
        }
    }
    .skill-bracket {
        margin-right: 0.75rem;
        color: ${Colors.firstColor};
    }

    .skill-icon {
        margin-left: auto;
        transition: 0.4s;
        color: ${Colors.firstColor};
    }

    .skill-list {
        row-gap: 1.5rem;
        padding-left: 2.7rem;
    }

    .skill-list-data {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
    }

    .skill-open .skill-list {
        height: max-content;
        margin-bottom: var(--mb-2-5);
    }

    .skill-open .skill-icon {
        transform: rotate(-180deg);
    }

    .skill-close .skill-list {
        height: 0;
        overflow: hidden;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;
