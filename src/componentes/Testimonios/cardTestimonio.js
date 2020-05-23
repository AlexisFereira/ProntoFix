import React from "react";
import styled from "@emotion/styled";
import Flex from "../ui/Flex";
import {colors, shadows} from "../ui/helpers";

const Container = styled(Flex)`
    position:relative;
    border-radius:10px;
    background:white;
    box-shadow:${shadows[1]};
    
    .foto{
       width:80px;
       height:80px;
       border-radius:50px;
       background: ${colors.verde01} url(${props=> props.foto}) no-repeat center;
       background-size:cover;
    }
`;

function CardTestimonio({name,alias,testimonio,foto}) {
    return (
        <Container className={"p-2 py-md-5"} foto={foto} >
            <Flex className={"p-2"} flex={"1 0 90px"}>
                <div className="foto"></div>
            </Flex>
            <Flex className={"p-2"} flex={"1 1 70%"}>
                <div className="fb wc">
                    {name}
                </div>
                <div className="wc">
                    <small>{alias}</small>
                </div>
                <p className={"mb-0"}>{testimonio}</p>
            </Flex>
        </Container>
    )
}

export default React.memo(CardTestimonio);
