//imports
import { useState } from 'react';
import { useSpring, animated} from 'react-spring';

//Styles
import styled from 'styled-components';
import {MainLayout, StyledBtnGrp} from '../Styles';


// No idea math
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 20}px,${y / 8 - 100}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 90}px,${y / 6 - 100}px,0)`
const trans4 = (x, y) => `translate3d(${x / 7}px,${y / 7}px,0)`

const Home = () => {
    // Designer / Developer Flipped
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
    })
    
    // Vector Art
    const [props, setProps] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  

    return(
        <StyledHomeLayout>
            <StyledMainText>
                <h1>Imagination makes us <span id="human">human.</span></h1>
                <StyledAboutDiv>
                    <h2>I'm a </h2>
                    <div onClick={() => set(state => !state)}>
                        <animated.h2  style={{ opacity: opacity.interpolate(o => 1 - o), transform }} >
                            Developer
                        </animated.h2>
                        <animated.h2 style={{ opacity, transform: transform.interpolate(t => `${t} rotateY(180deg)`) }}>
                            Designer
                        </animated.h2>
                    </div>
                </StyledAboutDiv>

                <StyledBtnGrp>
                    <button>Resume</button>
                    <button>Hire Me!</button>
                </StyledBtnGrp>
            </StyledMainText>

            <VectorContainer className="container" onMouseMove={({ clientX: x, clientY: y }) => setProps({ xy: calc(x, y) })}>
                <animated.div className="card1" style={{ transform: props.xy.interpolate(trans1) }} />
                <animated.div className="card2" style={{ transform: props.xy.interpolate(trans2) }} />
                <animated.div className="card3" style={{ transform: props.xy.interpolate(trans3) }} />
                <animated.div className="card4" style={{ transform: props.xy.interpolate(trans4) }} />
            </VectorContainer>
        </StyledHomeLayout>
        )
};

const StyledHomeLayout = styled(MainLayout)`
    background-color: #181818;
    overflow: hidden;
    justify-content: space-evenly;
    img{
        width: 20rem;
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

const StyledMainText = styled.div`
    
    margin-left: -8rem;
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

const VectorContainer = styled.div`
    justify-self:left;
    display: flex;
    align-items: center;
    justify-content: center;

    .card1,
    .card2,
    .card3,
    .card4 {
    position: absolute;
    border-radius: 5px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    will-change: transform;
    }

    .card1 {
    min-width: 30ch;
    min-height: 30ch;
    max-width: 50ch;
    max-height: 50ch;
    background-image: url(https://image.flaticon.com/icons/svg/119/119596.svg);
    }

    .card2 {
    width: 12.5ch;
    height: 12.5ch;
    background-image: url(https://image.flaticon.com/icons/svg/789/789395.svg);
    }

    .card3 {
    opacity: 0.9;
    width: 12.5ch;
    height: 12.5ch;
    background-image: url(https://image.flaticon.com/icons/svg/414/414927.svg);
    }

    .card4 {
    width: 12.5ch;
    height: 12.5ch;
    background-image: url(https://image.flaticon.com/icons/svg/789/789392.svg);
    }
`;


export default Home;