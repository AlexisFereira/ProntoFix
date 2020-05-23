import React from "react";
import styled from "@emotion/styled";
import Flex from "../ui/Flex";
import {Sombra} from "../BannerInicio";
import TitleDesc from "./../ui/TitleDesc";
import bg from "./../img/banner22.jpg";
import {colors} from "../ui/helpers";

import {LineM} from "../BannerInicio";
import Btn from "../ui/Btn";

const Container = styled(Flex)`
    position:relative;
    background:black url(${bg}) no-repeat top center;
    background-size:cover;
    min-height: 55vh;
    border-top: 15px solid ${colors.verde03};
    border-bottom: 15px solid ${colors.verde03};
   
    
    width:100%;
    
    
    h1{ color:white;text-transform:uppercase;}
    p{ color:${colors.verde01}}
    
    .text{
        max-width:570px;
    }
    
    .accion{
        max-width:250px;
    }
    
    @media all and (max-width:480px){
        min-height: 90vh;    
    }
    
`;

function BannerMiddle() {
    return (
        <Container direction={"column"}>
            <Sombra/>
            <Flex className="col-12 col-xl-10 mx-xl-auto position-relative" jc={"flex-start"}>
                <div className="text">
                    <h1 className={"fb"}>
                        Cuéntenos su necesidad y nos adaptaremos para ofrecerle su solución.
                    </h1>
                    <div className="wc py-3">
                        <LineM wd={"180px"}/>
                    </div>
                    <p className={"fb"}>
                        Con seriedad y profesionalismo entregamos la instalación acorde a los requerimientos de ley.
                    </p>
                </div>
                <div className="wc ">
                    <div className="accion">
                        <Btn>
                            Contactar
                        </Btn>
                    </div>
                </div>
            </Flex>

        </Container>
    )
}

export default React.memo(BannerMiddle);
