import React, {useEffect, useState} from 'react';
import Header from "./componentes/header";
import BannerInicio from "./componentes/BannerInicio";
import BreveIntro from "./componentes/BreveIntro";
import Servicios from "./componentes/servicios";
import Ventas01 from "./componentes/venta01";
import Ventas02 from "./componentes/venta02";
import Beneficios from "./componentes/beneficios";
import BannerMiddle from "./componentes/bannerMiddle";
import Empresa from "./componentes/empresa";
import Testimonios from "./componentes/Testimonios";
import Marcas from "./componentes/marcas";
import Mapa from "./componentes/mapa";
import Contacto from "./componentes/contacto";
import Footer from "./componentes/footer";
import Loading from "./componentes/loading";
import {config, useTransition} from "react-spring";
import ChatWs from "./componentes/chatWs";


function App() {

    const [loading,set] = useState(true);


    useEffect(()=>{
        setTimeout(()=>set(false),3000)
    },[])

    let tran = useTransition(loading, null, {

        from:  { opacity: 1 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

  return (
    <React.Fragment>
        {tran.map(
            ({item,key,props})=> item && <Loading style={props} key={key}/>
        )}
        <div className="App" id={"app"}>
            <Header/>
            <div className="wc">
                <BannerInicio/>
                <BreveIntro/>
                <Servicios/>
                <Ventas01/>
                <Beneficios/>
                <Ventas02/>
                <BannerMiddle/>
                <Empresa/>
                <Testimonios/>
                <Marcas/>
                <Mapa/>
                <Contacto/>
                <Footer/>
                <ChatWs/>
            </div>
        </div>
    </React.Fragment>
  );
}

export default App;
