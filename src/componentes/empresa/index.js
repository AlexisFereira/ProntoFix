import React from "react";
import styled from "@emotion/styled";
import Flex from "../ui/Flex";
import {Icon} from "../ui/animaEle/hojas";
import icons from "./../img/Icons-2.png";
import Log from "./../img/Logo-contacto.png";

const Container = styled.div`
    position:relative;
    width:100%;
    padding:70px 0;
    
    .logEmpresa{
        width:100%;
        max-width:450px;
    }
    
    .fb{
        font-size:28px;
    }
`;

function Empresa() {
    return (
        <Container name={"empresa"}>
            <Flex className="col-12 col-xl-10 mx-xl-auto">
                <div className="col-12 col-md-6 p-2 p-xl-4 px-xl-0 text-center">
                    <img src={Log} alt="" className={"logEmpresa"}/>
                </div>
                <div className="col-12 col-md-6 p-2 p-xl-4">
                    <p className={"fb"}>
                        Quienes somos
                    </p>
                    <p>
                        Prontofix es una empresa especializada en la instalación y reparación de gasodomésticos,
                        contamos con registro único de empresas públicas para la instalación de redes de gas. <br/><br/>

                        Ofrecemos el servicio de mantenimiento preventivo de gasodoméstico, reparación de calentadores,
                        estufas, secadores; conversión de gasodomésticos a gas natural en todas las marcas, construcción
                        de redes de gas e hidráulica, chimeneas de gas, y todo lo relacionado con la rama. <br/><br/>

                        Ofrecemos el servicio de instalación y mantenimiento de energía, tinas eléctricas, tomas de
                        corriente, swiches y todo lo relacionado en energía de vivienda. <br/><br/>

                        Ofrecemos el servicio de acueducto y reparaciones, reformas en plomerias.
                    </p>
                </div>
                <Flex className="col-12 col-md-6 p-2 p-xl-4" jc={"flex-start"}>
                    <Flex flex={"0 0 80px"}><Icon img={icons} icon={0} cantidad={1.01}  width={"80px"} height={"80px"}/>
                        {/*<img src={} alt=""/>*/}
                    </Flex>
                    <Flex flex={"1 0 50%"} jc={"flex-start"} className={"pl-3"}>
                        <p className={"fb"}>Misión</p>
                        <p>Ser la mejor empresa prestadora de servicios profesionales en gasodoméstico, energía y
                            acueducto en Colombia. </p>
                    </Flex>
                </Flex>
                <Flex className="col-12 col-md-6 p-2 p-xl-4" jc={"flex-start"}>
                    <Flex flex={"0 0 80px"}><Icon img={icons} icon={1}  cantidad={1.01} width={"80px"} height={"80px"}/></Flex>
                    <Flex flex={"1 0 50%"} jc={"flex-start"} className={"pl-3"}>
                        <p className={"fb"}>Visión</p>
                        <p>
                            Nos hemos propuesto ser la mejor compañía que brinde una solución a sus problemas con
                            precios justos y garantizados, que nos permita ingresar a todos los mercados de Colombia.
                        </p>
                    </Flex>
                </Flex>
            </Flex>
        </Container>
    )
}

export default React.memo(Empresa);
