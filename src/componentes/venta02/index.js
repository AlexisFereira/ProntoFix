import React from "react";
import styled from "@emotion/styled";
import Flex from "../ui/Flex";
import CardFoto from "./../servicios/cardFoto";
import img01 from "./../img/Venta-electrico/accesorios.jpg";
import img02 from "./../img/Venta-electrico/acoples.jpg";
import img03 from "./../img/Venta-electrico/cables.jpg";
import img04 from "./../img/Venta-electrico/tuberia.jpg";
import TitleDesc from "./../ui/TitleDesc";

const Container = styled.div`
    position:relative;
    width:100%;
    padding-bottom:70px;
    
  
`;

function Ventas02() {
    return (
        <Container>
            <Flex className="col-12 col-xl-10 mx-xl-auto text-center pb-4">
                <TitleDesc
                    align={"center"}
                    mw={"780px"}
                    title={"Venta de eléctricos"}
                    desc={"Conocemos sus necesidades y nos adaptamos para ofrecerle la mejor solución en venta de repuestos, accesorios e instalación en todo lo relacionado con energía de tu vivienda."}
                />
            </Flex>

            <Flex className="col-12 col-xl-10 mx-xl-auto px-0" alg={"stretch"}>
                <Flex flex={"1 0 120px"} className={"p-2"}>
                    <CardFoto
                        text={"Tuberías"}
                        img ={img04}
                    />
                </Flex>
                <Flex flex={"1 0 120px"} className={"p-2"}>
                    <CardFoto
                        text={"Accesorios"}
                        img ={img01}
                    />
                </Flex>
                <Flex flex={"1 0 120px"} className={"p-2"}>
                    <CardFoto
                        text={"Acoples eléctricos"}
                        img ={img02}
                    />
                </Flex>
                <Flex flex={"1 0 120px"} className={"p-2"}>
                    <CardFoto
                        text={"Cables"}
                        img={img03}
                    />
                </Flex>
            </Flex>
        </Container>
    )
}

export default React.memo(Ventas02);
