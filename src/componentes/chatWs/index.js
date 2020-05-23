import React from "react";
import styled from "@emotion/styled";
import {colors, shadows} from "../ui/helpers";
import {animated} from "react-spring";
import wsimg from "./../img/ws.png";
import {ws} from "../../config";


const Container = styled.div`
    position:fixed;
    z-index:888;
    width:80px;
    height:80px;
    bottom:20px;
    right:30px;
    
    
    .enlace{
        width:100%;
        height:100%;
        border-radius:50%;
        position:absolute;
        z-index:8888;
        overflow:hidden;
        bottom:20px;
        right:20px;
        box-shadow:${shadows[1]};
       
        .icon{
            display:block;
            width:100%;
            height:100%;
            padding:10px;
            background:${colors.verde03};
            border-radius:50%;
            cursor:pinter;
            &:hover{
             background:${colors.verde02};
            }
            img{
                border-radius:50%;
                width:100%;
                height:100%;
            }
        }
    }
    
    @media all and (max-width:480px){
         width:50px;
        height:50px;
        bottom:10px;
        right:10px;
        
        .icon{
            padding:3px;
        }
    }
`;

function ChatWs() {
    return (
        <Container>
            <animated.div>


            </animated.div>


            <a
                href={`https://wa.me/${ws.whatsapp}?text=${ws.mensaje}`}
               target={"_blank"}
                className={"enlace"}
            >
                <span className="icon">
                    <img src={wsimg} alt=""/>
                </span>
            </a>

        </Container>
    )
}

export default React.memo(ChatWs);
