import React from "react";
import styled from "@emotion/styled";
import Flex from "../ui/Flex";
import {colors} from "../ui/helpers";
import logo from "../img/Logo-contacto.png";
import patron from "../img/patron.png";
import {animated} from "react-spring";

const Container = styled(Flex)`
    position:absolute;
    width:100%;
    height:100%;
    background: ${colors.verde03} url(${patron}) repeat center;
    background-size: auto 100px;
    z-index:9999; 
    color:${colors.amarillo};
`;

function Loading({style}) {
    return (
        <animated.div style={{
            position:"absolute",
            top:"0",
            left:"0",
            width:"100%",
            height:"100%",
            zIndex:"9999",
            ...style
        }}>
        <Container direction={"column"}>
            <img src={logo} alt="" height={"50px"} width={"auto"} className={"mb-3"}/>
            Preparando contenido...
        </Container>
        </animated.div>
    )
}

export default React.memo(Loading);
