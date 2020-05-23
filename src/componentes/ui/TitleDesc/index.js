import React from "react";
import styled from "@emotion/styled";
import {LineM} from "../../BannerInicio";
import Flex from "../Flex";
import {colors} from "../helpers";

const Container = styled(Flex)`
    position:relative;
    width:100%;
    margin:0;
    max-width:${props => props.mw};
    color:${colors.verde03};
    
    .title{
        font-size:22px;
         color:${props=>props.titleColor};
    }    
    
   .description{
    color:${props=>props.descColor};
   }
   
   @media all and (min-width:1200px){
     .title{
        font-size:30px;
    }
   }
`;

function TitleDesc({align="left",title,desc,mw,colores=[colors["verde03"],colors["verde03"]]}) {

    let aligns = {
        right:"flex-end",
        center:"center",
        left:"flex-start",
    };

    return (
        <Container
            className={` text-${align}`} mw={mw} jc={aligns[align]}
            descColor={colores[1]}
            titleColor={colores[0]}
        >
            <div className={`title wc fb text-${align}`}>{title}</div>
            <div className="py-3">
                <LineM wd={"170px"}/>
            </div>
            <div className="description">{desc}</div>
        </Container>
    )
}

export default React.memo(TitleDesc);
