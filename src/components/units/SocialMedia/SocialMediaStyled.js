import styled from 'styled-components';
import Colors from 'theme/Colors';

export const SocialMediaStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 100px;

    @media (max-width: 798px) {
        margin-right: 20px;
        margin-left: 20px;
    }

    .icon {
        color: ${Colors.firstColor};
        margin-bottom: 10px;

        &:hover {
            color: ${Colors.firstColor_Alt};
        }
    }
`;
