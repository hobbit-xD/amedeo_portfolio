import styled from 'styled-components';

export const RepoStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 40px;
        margin: 0;
    }
    h3 {
        margin-bottom: 64px;
        font-weight: 300;
    }
    table {
        border: 1px solid #ccc;
        border-collapse: collapse;
        margin: 0;
        padding: 0;
        table-layout: fixed;
    }

    table tr {
        //  background-color: #f8f8f8;
        border: 1px solid #ddd;
        padding: 0.35em;
    }

    table th,
    table td {
        padding: 0.625em;
        text-align: center;
    }

    table th {
        font-size: 0.85em;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        background-color: #e8e8e8;
    }

    @media screen and (max-width: 600px) {
        table {
            border: 0;
            margin-left: 1.5rem;
            margin-right: 1.5rem;
        }

        table thead {
            border: none;
            clip: rect(0 0 0 0);
            height: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            width: 1px;
        }

        table tr {
            border-bottom: 3px solid #ddd;
            display: block;
            margin-bottom: 0.625em;
        }

        table td {
            border-bottom: 1px solid #ddd;
            display: block;
            font-size: 0.8em;
            text-align: right;
        }

        table td::before {
            /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
            content: attr(data-label);
            float: left;
            font-weight: bold;
            text-transform: uppercase;
        }

        table td:last-child {
            border-bottom: 0;
        }
    }
`;
