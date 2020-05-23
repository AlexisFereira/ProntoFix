import React from "react";
import styled from "@emotion/styled";
import {colors, shadows} from "../ui/helpers";

const Container = styled.div`
    position:relative;
    width:100%;
    overflow:hidden;
    border-radius:10px;
    background:white;
    box-shadow:${shadows[1]};
    height:100%;
    
  
    img{
        width:100%;
        height:auto;
    }
   
  
   .text{
    font-size: 20px;
   }
 
   
   @media all and (min-width:768px){
    
   }
   
   @media all and (min-width:1024px){
      .text{
      font-size: 22px;
      line-height:1.4em;
      text-align:center;
      color:${colors.verde03};
      }
      .text2{
      
      }
   }
   
   @media all and (min-width:1200px){
    
   }
`;

function CardFoto({text,img, oneSize}) {
    return (
        <Container>
            <img src={img} alt=""/>
            {oneSize ?
                <div className="text2 fb p-3 wc text-center">
                    {text}
                </div>
            :
                <div className="text fb p-3 wc">
                    {text}
                </div>
            }

        </Container>
    )
}

export default React.memo(CardFoto);
