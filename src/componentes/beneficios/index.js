import React from "react";
import styled from "@emotion/styled";
import Flex from "../ui/Flex";
import Calentador from "./../img/img2.png";
import {Icon} from "../ui/animaEle/hojas";
import iconos from "./../img/Icons-cont.png";
import {colors} from "../ui/helpers";

const Container = styled.div`
    position:relative;
    width:100%;
    padding:70px 0;
    
    .calentador{
        width:100%;
        max-width:350px;
    }
    
    .forma{
    position:absolute;
        background:${colors.amarillo};
        width:100%;
        height:100%;
        top:0;
        left:0;
        clip-path: polygon(0 0, 100% 0, 100% 61%, 0 83%);
    }
    
    .fb{
   
        font-size: 24px;
        line-height:1.4em;
    }
    
`;



function Beneficios() {
    return (
        <Container>
            <div className="forma"></div>
            <Flex className="col-12 col-xl-10 mx-xl-auto px-0">
                <div className={"col-12 col-md-6 pb-4 pb-md-0"}>
                    <img src={Calentador} alt="" className={"calentador"}/>
                </div>
                <div className={"col-12 col-md-6"}>
                    <div className="wc">
                        <p className={"fb"}>Beneficios del calentador de gas para el hogar</p>
                        <p>En cuanto a los beneficios del calentador de gas, podemos encontrar unos cuantos beneficios que ofrece un calentador de agua a gas:</p>
                        <div className={"mb-3"}>
                            <Icon className={"d-inline-block mr-2"} img={iconos} height={"30px"} width={"25px"} cantidad={6} icon={1}/>
                            Gracias a su eficiencia energética, es un dispositivo que respeta el medio
                            ambiente.
                        </div>
                        <div className={"mb-3"}>
                            <Icon className={"d-inline-block mr-2"} img={iconos} height={"30px"} width={"25px"} cantidad={6} icon={1}/>
                            Se puede regular la potencia y los grados del agua. En algunos calentadores de
                            gas contamos con un termostato manual.</div>
                        <div className={"mb-3"}>
                            <Icon className={"d-inline-block mr-2"} img={iconos} height={"30px"} width={"25px"} cantidad={6} icon={1}/>
                            Existen diferentes modelos y tamaños, por lo que se puede adaptar a cualquier
                            espacio.</div>
                        <div className={"mb-3"}>
                            <Icon className={"d-inline-block mr-2"} img={iconos} height={"30px"} width={"25px"} cantidad={6} icon={1}/>
                            Es de fácil instalación y mantenimiento. En el caso de avería (cada muchos
                            años), el arreglo es muy económico.</div>
                    </div>
                </div>
            </Flex>
        </Container>
    )
}

export default React.memo(Beneficios);
