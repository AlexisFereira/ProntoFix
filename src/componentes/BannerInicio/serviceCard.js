import React from "react";
import styled from "@emotion/styled";
import {colors, shadows} from "../ui/helpers";
import {Icon} from "../ui/animaEle/hojas";
import Iconos from "./../img/icons.png";
import {LineM} from "./index";
import Flex from "../ui/Flex";

const Container = styled(Flex)`
    position:relative;
    width:100%;
    border-radius:8px;
    box-shadow:${shadows[1]};
    background:white;
    padding:15px;
    height:100%;
    
    .text{
        color:${colors.verde03};
        font-size:18px;
    }
`;

function ServicioCard({position,text}) {
    return (
        <Container>
            <Icon
                height={"170px"}
                width={"170px"}
                img={Iconos}
                cantidad={3}
                icon={position}
            />

            <div className="text py-3 fb text-center">
                {text}
            </div>

            <div className="wc py-3">
                <LineM className={"mx-auto"} wd={"80px"}/>
            </div>

        </Container>
    )
}

export default React.memo(ServicioCard);
