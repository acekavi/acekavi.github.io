import styled from 'styled-components';

import {Link} from "react-router-dom";

import { useSpring, animated } from 'react-spring'

//Math i don't get xD
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


const SoloDesign = ({currentDesign})=> {
    const [props, setProps] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))


    return(
        <StyledCard>
            <animated.div
                onMouseMove={({ clientX: x, clientY: y }) => setProps({ xys: calc(x, y) })}
                onMouseLeave={() => setProps({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}>
                <a className="img-div" 
                    rel="noopener noreferrer" 
                    href={currentDesign.behance} 
                    target="_blank" 
                    style={{backgroundImage: `url(${currentDesign.mainImg})`}}>
                </a>
                <h3>{currentDesign.title}</h3>
                <h4>{currentDesign.description}</h4>

                <a rel="noopener noreferrer" href={currentDesign.behance} target="_blank">View on Behance</a>
            </animated.div>
        </StyledCard>
        )
};


const StyledCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height:100%;
    width:100%;
    margin-top: -3rem;

    div{
        width: 17rem;
        height: 25rem;
        background: #111;
        border-radius: 0 0 1.5rem 1.5rem;
        border: 0.5rem solid #2b2b2b;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        box-shadow: 1rem 1rem 1rem #888888;

        .img-div{
            width: 100%;
            height: 15rem;
            border-radius: 0;
            border: none;
            box-shadow: none;
            object-fit: cover;
            background-size: cover;
            background-position: center top;
            background-repeat: no-repeat;
            background-attachment: fixed;
        }

        h4{
            width: 15rem;
        }

        a{
            text-decoration: none;
            color: #ffffff;
            margin-bottom:5px;
            transition: all 1s ease-out;

            &:hover{
                color: #d90429;
            }
        }
    }
`;

export default SoloDesign;