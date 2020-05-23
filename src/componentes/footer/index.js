import React from "react";
import styled from "@emotion/styled";
import Flex from "../ui/Flex";
import {colors} from "../ui/helpers";
import IMf from "./../img/footer.svg";
import {Icon} from "../ui/animaEle/hojas";
import Ic from "./../img/Icons-cont.png";

const Container = styled.div`
    position:relative;
    width:100%;
    background:#1C5253;
    
    img{
        width:100%;
        position:absolute;
        bottom:100%;
        width:100%;
        height:auto;
        left:0;
    }
    
    .kitchen{
        font-size:14px;
        color:white;
        display:flex;
        flex-flow:row wrap;
        justify-content:flex-end;
        align-items:center;
    }
    .wt{
        color:white;
    }
    .verde{
        color:${colors.verde02};
    }
    .pronto{
        flex:0 0 auto;
        text-align:left;
        color:white;
        line-height:1.4em;
    }
    
    @media all and (max-width:480px){
    .pronto{
        width:100%;
        text-align:center;
        padding: 20px 0;
    }
    
        .kitchen{
            width:100%;
            flex:1 0 100%;
            text-align:center;
            justify-content:center;
        }
    }
`;

function Footer() {
    return (
        <Container className={""}>
            <img src={IMf} alt=""/>
            <Flex className={"col-12 col-xl-10 mx-xl-auto p-2"} jc={"space-between"}>
                <div className={"pronto"} >
                    2020 © <span className={"fb verde mx-1"}>Prontofixgas.</span> Todos los derechos reservados.
                </div>
                <div className={"p-2 kitchen"} >
                    Made with <Icon img={Ic} className={"d-inline-block mx-1"} icon={6} cantidad={6} width={"25px"} height={"25px"}/> by <span className={"fb ml-2 mt-2"}>kitchenpx</span>
                </div>
            </Flex>
        </Container>
    )
}

export default React.memo(Footer);
