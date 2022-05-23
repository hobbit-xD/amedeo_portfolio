import styled from 'styled-components';

export const HeaderStyled = styled.div`
    width: 100%;

    .header-container {
        flex-direction: row;
        align-items: center;
        padding: 1rem 0;
        justify-content: space-between;
        border-bottom: 2px solid #f1f1f1;

        h1 {
            font-size: 24px;
            margin: 0;
            color: black;
        }

        ul {
            list-style: none;
            margin: 0;
            padding: 0;

            li {
                display: inline-block;
                position: relative;
                margin-right: 15px;

                &:last-child {
                    margin-right: 0;
                }

                ul {
                    display: none;
                    position: absolute;
                    background-color: #fff;
                    margin: 0;
                    padding: 0;
                    border-radius: 4px;
                    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);

                    li {
                        width: 150px;
                        display: block;
                        margin-right: 0;

                        &:first-child {
                            a {
                                border-top-left-radius: 0.25rem;
                                border-top-right-radius: 0.25rem;
                            }
                        }
                        &:last-child {
                            a {
                                border-bottom-left-radius: 0.25rem;
                                border-bottom-right-radius: 0.25rem;
                            }
                        }

                        a {
                            display: inline-block;
                            padding: 0.5rem 0.6rem;
                            text-decoration: none;
                            width: 100%;
                            color: red;
                            transition: all 0.15s ease;

                            &:hover {
                                background-color: #e7e7e7;
                                color: #333;
                            }
                        }
                    }
                }

                &:hover {
                    > ul {
                        display: block;
                    }
                }

                a {
                    display: inline-block;
                    padding: 0.5rem 0.6rem;
                    text-decoration: none;
                    width: 100%;
                    color: black;
                    transition: all 0.15s ease;

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
    }

    .hamburger {
        display: none;
    }

    @media (max-width: 768px) {
        .hamburger {
            display: flex;
        }
        .menu {
            display: none;
        }

        .menu_expanded {
            ul {
                position: absolute;
                top: ${(props) => props.height}px;
                left: 0;
                // stacks the li tags vertically
                display: flex;
                flex-direction: column;
                // makes menu span full height and width
                width: 100%;
                height: calc(100vh - ${(props) => props.height}px);
                background-color: white;
                //justify-content: center;

                //border-top: 1px solid black;

                li {
                    text-align: center;
                    top: 50px;

                    &:last-child {
                        margin-right: 15px;
                    }

                    a {
                        color: black;
                        width: 100%;
                        // padding: 1.5rem 0;
                    }
                }
            }
        }
    }
`;
