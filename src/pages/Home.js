//Images
import logo from "../img/Special.png";

//imports
import { useState } from 'react'
import styled from 'styled-components';
import { useSpring, animated} from 'react-spring'


const Home = () => {
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
    })
  
    return(
        <StyledHome>
            <StyledMainText>
                <h1>Imagination makes us <span id="human">human.</span></h1>
                <StyledAboutDiv>
                    <h2>I'm a </h2>
                    <div onClick={() => set(state => !state)}>
                        <animated.h2  style={{ opacity: opacity.interpolate(o => 1 - o), transform }} >
                            Designer
                        </animated.h2>
                        <animated.h2 style={{ opacity, transform: transform.interpolate(t => `${t} rotateY(180deg)`) }}>
                            Developer
                        </animated.h2>
                    </div>
                </StyledAboutDiv>

                <StyledBtnGrp>
                    <button>Resume</button>
                    <button>Hire Me!</button>
                </StyledBtnGrp>
            </StyledMainText>

            <img src={logo} alt="Vector of a girl" srcset="Vector of a girl"/>
        </StyledHome>
        )
};

const StyledHome = styled.div`
    background-color: #181818;
    height: 93vh;
    border-radius: 2rem 2rem 0 0;
    display: flex;
    align-items:center;
    justify-content: space-evenly;
    img{
        width: 20rem;
    }
`;

const StyledMainText = styled.div`
    color: #fffaff;
    h1{
        font-size: 3rem;
    }
    span{
        display:block;
    }
    #human{
        color:#3e92cc;
    }
`;

const StyledBtnGrp = styled.div`
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

const StyledAboutDiv = styled.div`
    display: flex;
    div{
        position: relative;

        h2{
            color: #3e92cc;
            position: absolute;
            left: 0.5rem;
            top: 1px;
            cursor: pointer;
        }
    }
`;

export default Home;