import styled from 'styled-components';

import {Link} from "react-router-dom";

const nav = () => {
    return(
        <StyledNav>
            <h1><Link id="logo" to="/">Portfolio</Link></h1>
            <ul>
                <li>
                    <Link to="/designs">Designs</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/">About Me</Link>
                </li>
                <li>
                    <Link to="/"><span>Hire me!</span></Link>
                </li>
            </ul>
        </StyledNav>
        )
};

const StyledNav = styled.nav`
    min-height : 7vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 0 5rem;
    h1{
        font-size: 1.7rem;
        font-family: 'Kaushan Script', cursive;
    }
    ul{
        display:flex;
        list-style:none;

        span{
            color: #d90429;
            &:hover{
                color: #ef233c;
            }
        }

        li{
            padding: 0 1rem;
            position: relative;
            width: 7rem;

            a{
                position: relative;

                &::after{
                    content: "";
                    position: absolute;
                    width: 100%;
                    height: 2px;
                    top: 1.2em;
                    left: 1px;
                    background-color: #ef233c;
                    visibility: hidden;
                    transition: all 0.4s ease-in-out;
                    transform: scaleX(0);
                }

                &:hover::after {
                    visibility: visible;
                    transform: scaleX(1);
                }

            }
        }
    }
`;

export default nav;