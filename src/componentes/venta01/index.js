import React from "react";
import styled from "@emotion/styled";
import Flex from "../ui/Flex";
import CardFoto from "./../servicios/cardFoto";
import img01 from "./../img/Venta-gas/calentador-acumulador.jpg";
import img02 from "./../img/Venta-gas/calentaodres-paso.jpg";
import img03 from "./../img/Venta-gas/cocineta.jpg";
import img04 from "./../img/Venta-gas/estufa.jpg";
import img05 from "./../img/Venta-gas/repuestos.jpg";
import {colors} from "../ui/helpers";
import TitleDesc from "./../ui/TitleDesc";

const Container = styled.div`
    position:relative;
    width:100%;
    
    .forma{
        position:absolute;
        background:${colors.amarillo};
        width:100%;
        height:100%;
        top:0;
        left:0;
        clip-path: polygon(0% 74%, 100% 88%, 100% 100%, 0% 100%);

    }
`;

function Ventas01() {
    return (
        <Container>
            <div className="forma"></div>
            <Flex className="col-12 col-xl-10 mx-xl-auto text-center pb-4">
                <TitleDesc
                    align={"center"}
                    mw={"780px"}
                    title={"Venta de equipos de Gas"}
                    desc={"Ofrecemos el equipo y servicio de la más alta calidad, para todo tipo de necesidades en lo referente a sus gasodomésticos y de acuerdo a sus necesidades, ajustándose a su presupuesto para garantizar su satisfacción."}
                />
            </Flex>

            <Flex className="col-12 col-xl-10 mx-xl-auto px-0" alg={"stretch"}>
                <Flex flex={"1 0 80px"} className={"p-2"}>
                    <CardFoto
                        oneSize={true}
                        text={"Calentadores de paso"}
                        img ={img02}
                    />
                </Flex>
                <Flex flex={"1 0 80px"} className={"p-2"}>
                    <CardFoto
                        oneSize={true}
                        text={"Calentadores de paso"}
                        img ={img01}
                    />
                </Flex>
                <Flex flex={"1 0 80px"} className={"p-2"}>
                    <CardFoto
                        oneSize={true}
                        text={"Respuestos originales"}
                        img ={img05}
                    />
                </Flex>
                <Flex flex={"1 0 80px"} className={"p-2"}>
                    <CardFoto
                        oneSize={true}
                        text={"Cocinetas de gas"}
                        img ={img03}
                    />
                </Flex>
                <Flex flex={"1 0 80px"} className={"p-2"}>
                    <CardFoto
                        oneSize={true}
                        text={"Estufas de gas"}
                        img ={img04}
                    />
                </Flex>
            </Flex>
        </Container>
    )
}

export default React.memo(Ventas01);
