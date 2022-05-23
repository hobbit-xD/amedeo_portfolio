import styled from 'styled-components';

export const IntroStyled = styled.div`
    h1 {
        font-size: 40px;
        margin: 0;
    }

    .intro_container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .social_image_container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    /*
    .item-1 {
        order: 1;
    }
    .item-2 {
        order: 2;
    }
    .item-3 {
        order: 1;
    }*/

    @media screen and (max-width: 768px) {
        .intro_container {
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
        }
        .item-2 {
            margin-left: 20px;
        }
        /*
        .item-1 {
            order: 1;
        }
       
        .item-3 {
            order: 2;
        }*/
    }
`;

/*
export const ProfileDescStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;

        .item-2 {
            order: 3;
        }
        .item-3 {
            order: 2;
        }
    }
`;
*/
