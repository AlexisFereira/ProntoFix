import React from "react";
import styled from "@emotion/styled";
import TitleDesc from "./../ui/TitleDesc";
import CardFoto from "./cardFoto";
import Flex from "../ui/Flex";
import {colors} from "../ui/helpers";

import foto01 from "./../img/Servicios/electricidad.jpg"
import foto02 from "./../img/Servicios/gas.jpg"
import foto03 from "./../img/Servicios/plomeria.jpg"
import Slider from "react-slick";

const Contslide = styled.div`
    
    
    &:focus{
        outline:none;
    }
     @media all and (max-width: 759px){
       max-width:250px;
    }

    @media all and (min-width: 760px){
        max-width:100%;
    }
    
`;

const config = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    centerMode:false,
    variableWidth: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                infinite: false,
                speed: 800,
                slidesToShow: 1,
                centerMode: false,
                variableWidth: true,
            }
        },
    ]
};

const Container = styled.div`
    position:relative;
    width:100%;
    padding-bottom:80px;
    
    .forma{
        position:absolute;
        background:${colors.amarillo};
        width:100%;
        height:100%;
        top:0;
        left:0;
        clip-path: polygon(0% 0%, 100% 0%, 100% 81%, 17% 63%, 1% 72%);
    }
`;

function Servicios() {
    return (
        <Container name={"servicios"}>
            <div className="forma"></div>
            <div className="wc text-center py-3">
                <TitleDesc title={"Nuestros servicios"} align={"center"}/>
            </div>
            <Slider {...config} className={"col-12 col-xl-10 mx-xl-auto px-0"} alg={"flex-start"}>
                <Contslide className={"p-2"} >
                    <CardFoto text={"Intalación y mantenimiento de gasoméstico"} img={foto02}/>
                </Contslide>
                <Contslide className={"p-2"} >
                    <CardFoto text={"Intalación y mantenimiento de energía en vivienda"} img={foto01}/>
                </Contslide>
                <Contslide className={"p-2"} >
                    <CardFoto text={"Acueducto, reparaciones y reformas en plomería"} img={foto03}/>
                </Contslide>
            </Slider>
        </Container>
    )
}

export default React.memo(Servicios);
