import Slider from "@farbenmeer/react-spring-slider";
import {useState} from "react";
import SoloDesign from "../components/soloDesign"
//Design Details
import {DesignState} from "../components/DesignDetails";


//Styles
import styled from 'styled-components';
import {MainLayout} from '../Styles';


const Designs = ()=> {
    const [Design, setDesign] = useState(DesignState);
    
    return(
        <StyledDesigns>
            <StyledHeader>
                <h1>Designs</h1>
            </StyledHeader>

            <Slider
			activeIndex={0}
			slidesAtOnce={1}
			auto={7500}
			hasBullets
            hasArrows
		    >
            {Design.map(currentDesign => (
                <SoloDesign currentDesign={currentDesign}/>
            ))}
		    </Slider>

        </StyledDesigns>
        )
};

const StyledDesigns = styled(MainLayout)`
    background-color: #eaeaea;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    justify-content: space-evenly;
`;

const StyledHeader = styled.div`
    height: 10vh;
    h1{
        font-family: 'Merienda', cursive;
        margin-top: 2rem;
        color: #1e1b18;
    }
`;


export default Designs;