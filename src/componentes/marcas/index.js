import React from "react";
import styled from "@emotion/styled";
import  TitleDesc from "./../ui/TitleDesc";
import {Icon} from "../ui/animaEle/hojas";
import Flex from "../ui/Flex";
import marcas from "./../img/logos.png";
import {colors} from "../ui/helpers";

const Container = styled.div`
    position:relative;
    width:100%;
    background: ${colors.verde02};
    padding-bottom:100px;
    margin-bottom:-10%;
    z-index:3;
    
    clip-path: polygon(
       0 0,
       100% 0,
       100% 80%,
       50% 100%,
       0 80%
    );
`;

function Marcas() {
    return (
        <Container>
            <div className="col-12 col-xl-10 mx-xl-auto py-3">
                <Flex className="wc">
                    <TitleDesc
                        mw={"500px"}
                        title={"Nuestras marcas aliadas"}
                        desc={"Trabajamos de la mano de nuestras marcas aliadas para ofrecerte el mejor servicio de gas en Colombia"}
                        align={"center"}
                        colores={["white",colors.amarillo]}
                    />
                </Flex>
           <Flex className={"wc pt-4"}>
               <Icon
                   img={marcas}
                   height={"50px"}
                   width={"160px"}
                   cantidad={5}
                   icon={0}
                   className={"m-2"}
               />
               <Icon
                    img={marcas}
                    height={"50px"}
                    width={"80px"}
                    cantidad={5}
                    icon={1}
                    className={"m-2"}
               />
               <Icon
                   img={marcas}
                   height={"50px"}
                   width={"130px"}
                   cantidad={5}
                   icon={2}
                   className={"m-2"}
               />
               <Icon
                   img={marcas}
                   height={"50px"}
                   width={"150px"}
                   cantidad={5}
                   icon={3}
                   className={"m-2"}
               />
               <Icon
                   img={marcas}
                   height={"50px"}
                   width={"40px"}
                   cantidad={5}
                   icon={4}
                   className={"m-2"}
               />
               <Icon
                   img={marcas}
                   height={"50px"}
                   width={"140px"}
                   cantidad={5}
                   icon={5}
                   className={"m-2"}
               />
           </Flex>

            </div>

        </Container>
    )
}

export default React.memo(Marcas);
