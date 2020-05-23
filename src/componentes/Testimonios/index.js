import React from "react";
import styled from "@emotion/styled";
import TitleDesc from "./../ui/TitleDesc";
import {testimonios} from "../../config";
import CardTestimonio from "./cardTestimonio";
import {colors} from "../ui/helpers";
import Slider from "react-slick";

const config = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode:false,
    variableWidth: true,
    autoplay:true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                infinite: true,
                speed: 800,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                variableWidth: false,
            }
        },
    ]
};

export const Slide = styled.div`
       
      &:focus{
        outline:none;
      }  
       max-width: 200px;
       
      
      @media all and (max-width: 480px){
         max-width: 200px;
      }
      
       
      @media all and (max-width: 768px){
         max-width: 380px;
      }
      
       @media all and (min-width: 998px){
         max-width: 450px;
      }
`;

const Container = styled.div`
    position:relative;
    width:100%;
    padding-bottom:50px;
    margin-bottom:-2px;
    
    .forma{
    position:absolute;
        background:${colors.verde02};
        width:100%;
        height:100%;
        top:0;
        left:0;
        clip-path: polygon(0 70%, 100% 70%, 100% 100%, 0 100%, 0 70%);
    }
`;

function Testimonios() {
    return (
        <Container>
            <div className="forma"></div>
            <div className="col-12 col-xl-10 mx-xl-auto">
                <div className="wc py-4">
                    <TitleDesc align={"center"} title={"Qué dicen nuestros clientes"}/>
                </div>
            </div>
           <div className="col-12 col-xl-10 mx-xl-auto px-0">
               <Slider {...config}>
                   {testimonios && testimonios.map((item,index)=>
                       <Slide className={"p-2"} key={index}>
                           <CardTestimonio  key={index}{...item} />
                       </Slide>
                   )}
               </Slider>
           </div>
        </Container>
    )
}

export default React.memo(Testimonios);
