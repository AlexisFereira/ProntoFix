import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
    position:relative;
    width:100%;
    margin-bottom:-130px;
`;

function Mapa() {

    return (
        <Container id={"map"} style={{height:"600px"}}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.761736245292!2d-75.59638808523115!3d6.162655895538253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4683f6c8121e6b%3A0xf5e45b1171d09b3c!2sFerreteria%20PRONTO%20FIX%20Gas!5e0!3m2!1ses!2sco!4v1590199315594!5m2!1ses!2sco"
                width="100%"
                title="mapa"
                height="600"
                frameBorder="0"
                style={{border:0}}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0">

            </iframe>
        </Container>
    )
}

export default React.memo(Mapa);
