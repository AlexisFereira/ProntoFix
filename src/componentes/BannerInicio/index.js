import React from "react";
import styled from "@emotion/styled";
import Flex from "../ui/Flex";
import Chebrones from "./../img/icons.png";
import {Icon} from "../ui/animaEle/hojas";
import {colors} from "../ui/helpers";
import Curva from "./../img/onda.png";
import ServicioCard from "./serviceCard";
import Banner from "./../img/banner1.jpg"
import Slider from "react-slick";


export const Sombra = styled.div`
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
`;


const config = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode:false,
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

const ContSlide = styled.div`    
    
    
     &:focus{
        outline:none;
     }
     
     @media all and (max-width: 767px){
        max-width: 280px;
    
     }
     @media all and (min-width: 1200px){
        max-width:450px;
     }
     
     @media all and (min-width: 768px){
        max-width:350px; 
     }
     
     
`;

export const LineM = styled.div`
    height:4px;
    background:${colors.magenta};
    width:${props => props.wd};
`;

const Container = styled(Flex)`
    position:relative;
    width:100%;
    min-height: 90vh;
    margin-bottom:-15vh;
    padding-top:50px;
    background: black url(${Banner}) no-repeat center;
    background-size:cover;
   
    
    .texto{
        text-align:left;
        h1{
            color:white;
            max-width: 670px;
            text-transform:uppercase;
        }
        p{
            color:${colors.verde01};
            max-width: 570px;
            font-size:18px;
            
        }
    }
    
    .curva{
        position:absolute;
        bottom:0;
        left:0;
        width:100%;
        height:auto;
    }
    
    

   @media all and (max-width:998px){
        min-height: 100vh;
   }
   
    @media all and (max-width:480px){
    
    background-position: 70% center;
    
        h1{
            font-size:1.5em;
        }
   }
`;

function BanenrInicio() {
    return (
        <React.Fragment>
            <Container direction={"column"} className={"pb-5"}>
                <Sombra/>
                <Flex className="col-12 col-xl-10 mx-xl-auto  mb-5">
                    <Flex flex={"1 0 80%"} className={"texto"} jc={"flex-start"}>
                        <h1>
                            Servicio técnico especializado en mantenimiento, reparación e instalación de equipos de Gas
                        </h1>
                        <div className="wc">
                            <LineM wd={"180px"} className={"mb-3"}/>
                        </div>
                        <p className={"fb"}>
                            Certificados con registro único de empresas públicas para la instalación de redes de gas.
                        </p>
                    </Flex>
                    <Flex flex={"1 0 80px"} >
                        <Icon
                            height={"180px"}
                            width={"180px"}
                            img={Chebrones}
                            cantidad={3}
                            icon={3}
                        />
                    </Flex>
                </Flex>
                <img src={Curva} alt="" className={"curva"}/>
            </Container>
            <div className={"container position-relative px-0"}>

                <Slider {...config}>
                    <ContSlide className={"p-2 p-xl-3"}>
                        <ServicioCard position={0} text={"Reparaciones e instalaciones de acueducto"}/>
                    </ContSlide>
                    <ContSlide className={"p-2 p-xl-3"}>
                        <ServicioCard position={1} text={"Mantenimiento e instalación de lavadoras"}/>
                    </ContSlide>
                    <ContSlide className={"p-2 p-xl-3"}>
                        <ServicioCard position={2} text={"Instalación de todo lo relacionado con energía"}/>
                    </ContSlide>
                </Slider>

            </div>
        </React.Fragment>
    )
}

export default React.memo(BanenrInicio);
