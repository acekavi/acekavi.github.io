//Styled Components
import styled from 'styled-components';


export const MainLayout = styled.div`
    height: 93vh;
    border-radius: 2rem 2rem 0 0;
    display: flex;
    align-items:center;
`;

export const StyledBtnGrp = styled.div`
    button {
        border-right: 2px solid #3e92cc;
        color: white;
        margin-top: 1rem;
        transition: all 0.5s ease;
        font-family: 'Ubuntu', sans-serif;

        &:last-child {
        border-right: none;
        border-radius: 0 0.5rem 0.5rem 0; /* Prevent double borders */
        }

        &:first-child {
            border-radius: 0.5rem 0 0 0.5rem; 
        }
        /* Add a background color on hover */
        &:hover {
        background-color: #3e92cc;
        color: #1e1b18;
        }
    }
`;
