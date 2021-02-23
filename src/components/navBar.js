import styled from 'styled-components';

const nav = () => {
    return(
        <StyledNav>
            <h1><a id="logo" href="#">Portfolio</a></h1>
            <ul>
                <li>
                    <a href="#">Designs</a>
                </li>
                <li>
                    <a href="#">Projects</a>
                </li>
                <li>
                    <a href="#">About Me</a>
                </li>
                <li>
                    <a href="#"><span>Hire me!</span></a>
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
                    background-color: #003554;
                    visibility: hidden;
                    transition: all 0.4s ease-in-out;
                    transform: scaleX(0);
                }

                &:hover::after {
                    visibility: visible;
                    -webkit-transform: scaleX(1);
                    transform: scaleX(1);
                }
            }
        }
    }
`;

export default nav;