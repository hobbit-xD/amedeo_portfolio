import styled from 'styled-components';
import Colors from 'theme/Colors';

export const AboutStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;

    h1 {
        font-size: 40px;
        margin: 0;
    }
    h3 {
        margin-bottom: 64px;
        font-weight: 300;
    }

    img {
        border-radius: 0.5rem;
    }

    .about_details {
        display: grid;
        margin-left: auto;
        margin-right: auto;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 5rem;

        .about_info {
            display: flex;
            justify-content: space-between;
            margin-bottom: 2.5rem;

            .title {
                display: block;
                text-align: center;
                font-size: 1.25rem;
                font-weight: 600;
            }
            .descr {
                display: block;
                text-align: center;
                font-size: 0.813rem;
            }
        }
    }

    button {
        background-color: ${Colors.firstColor};
    }
    .quali-title {
        margin-top: 64px;
        margin-bottom: 32px;
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;

        .about_details {
            display: grid;
            grid-gap: 1.5rem;
            grid-template-columns: auto;
        }
    }
`;
