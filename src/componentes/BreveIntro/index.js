import React from "react";
import styled from "@emotion/styled";
import Flex from "../ui/Flex";
import TitleDesc from "../ui/TitleDesc";
import Btn from "../ui/Btn";
import {colors} from "../ui/helpers";
import Img01 from "./../img/img1.png";

const Container = styled.div`
    position:relative;
    padding: 15px 0;
    width:100%;
    height:auto;
    margin-bottom:-10px;
    
    .forma{
        position:absolute;
        background:${colors.amarillo};
        width:100%;
        height:100%;
        top:0;
        left:0;
        clip-path: polygon(0 50%, 68% 65%, 100% 53%, 100% 99%, 0% 99%);
    }
    
    .calentadorAgua{
        width:100%;
    }
    
    @media all and (max-width: 998px){
        padding: 100px 0 20px;
    }
`;

function BreveIntro() {
    return (
        <Container >
            <div className="forma"></div>
            <Flex className="col-12 col-xl-10 mx-xl-auto px-0">
                <div className={"col-12 col-md-8 col-lg-6 px-lg-0"}>
                    <div className="text">
                        <TitleDesc
                            mw={"450px"}
                            title={"Mantenimiento, reparación e instalación de equipos de Gas"}
                            desc={"Ofrecemos mantenimiento y reparación de calentadores de paso, acumulación, piscina, turco; calderas, secadoras, estufas. Cocinas industriales, hornos, centrales de calentamiento y más."}
                        />
                        <div className="col-12 col-sm-6 col-md-5 pt-4 px-0">
                            <Btn text={"Contactar"}/>
                        </div>
                    </div>
                </div>
                <div className={"col-12 col-md-4 col-lg-6  px-lg-0"}>
                    <img src={Img01} alt="" className={"calentadorAgua"}/>
                </div>
            </Flex>
        </Container>

    )
}

export default React.memo(BreveIntro);
