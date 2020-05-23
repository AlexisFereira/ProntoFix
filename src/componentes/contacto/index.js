import React, {useState} from "react";
import styled from "@emotion/styled";
import TitleDesc from "./../ui/TitleDesc";
import Flex from "../ui/Flex";
import {colors, shadows} from "../ui/helpers";
import {Icon} from "../ui/animaEle/hojas";
import icons from "./../img/Icons-cont.png";
import Btn from "../ui/Btn";
import Field from "./../ui/field";
import Log from "./../img/Logo-contacto.png";
import {Formik} from 'formik';

import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(3, 'Esto no es un nombre.')
        .max(15, 'Esto no puede ser un nombre.')
        .required('Debe ingresar un nombre'),
    email: Yup.string()
        .email('Esto no es un email.')
        .required('Debe ingresar un correo.'),
    coments: Yup.string()
        .min('10')
        .required('Debe ingresar almenos 10 caracteres.'),
});

const Container = styled.div`
    position:relative;
    width:100%;
    padding:0 0 50px;
    
    .card-y{
        border-radius:10px;
        position:relative;
        overflow:hidden;
    }
    
    .forma-verde,
    .forma-amarilla {
        width:100%;
        height:100%;
        bottom:0;
        left:0;
        position:absolute;
        background:${colors.verde02};
     clip-path: polygon(
           0 25%,
           50% 20%,
           100% 25%,
           100% 100%,
           0 100%
            );
    }
    .forma-amarilla{
         background:${colors.amarillo};
         
         clip-path: polygon(
           0 15%,
           50% 5%,
           100% 15%,
           100% 100%,
           0 100%
            );
    }
    
    
    .tit{
        color:${colors.amarillo};
        font-size:25px;
        line-height:1.4em;       
    }
    
    .yl{
        color:${colors.amarillo};
    }
    
    .logo{
        width:100%;
        max-width:300px;
        margin:auto;
        display:block;
        position:relative;
        z-index:4;
    }
    
    @media all and (min-width:768px){
         .forma-verde{
            clip-path: polygon(
               0 20%,
               50% 10%,
               100% 20%,
               100% 100%,
               0 100%
            );
         }
         
         .forma-amarilla{
            clip-path: polygon(
               0 30%,
               50% 15%,
               100% 30%,
               100% 100%,
               0 100%
            );
         }
    }
`;

function Contacto() {

    const [state,set]=useState({
        loading:false
    })

    return (
        <Container name={"contacto"}>
            <div className="col-12 col-md-8 col-lg-6 mx-md-auto px-md-0 position-relative" style={{zIndex: "2"}}>

                <div className="wc card-y p-2 ">
                    <img src={Log} alt="" className={"logo"}/>
                    <div className="forma-amarilla"></div>

                    <Flex className="wc pt-3">
                        <TitleDesc title={"Servicio a domicilio"} mw={"300px"} align={"center"}/>
                    </Flex>

                    <Flex className={"wc"}>
                        <Flex className="col-12 col-sm-6 p-2">
                            <Icon img={icons} height={"25px"} width={"25px"} cantidad={6} icon={0}
                                  className={"mr-2 d-inline-block"}/>
                            <p className={"mb-0"}>322 43 44( línea directa )</p>
                        </Flex>
                        <Flex className="col-12 col-sm-6 p-2">
                            <Icon img={icons} height={"25px"} width={"25px"} cantidad={6} icon={4}
                                  className={"mr-2 d-inline-block"}/>
                            <p className={"mb-0"}>Medellín, Antoquía</p>
                        </Flex>
                        <Flex className="col-12 col-sm-6 p-2">
                            <Icon img={icons} height={"25px"} width={"25px"} cantidad={6} icon={3}
                                  className={"mr-2 d-inline-block"}/>
                            <p className={"mb-0"}>
                                311 366 57 11 / 300 371 34 31
                            </p>
                        </Flex>
                        <Flex className="col-12 col-sm-6 p-2">
                            <Icon img={icons} height={"25px"} width={"25px"} cantidad={6} icon={5}
                                  className={"mr-2 d-inline-block"}/>
                            <p className={"mb-0"}>prontofix@outlook.es</p>
                        </Flex>
                    </Flex>
                </div>
                <div className="wc py-3 text-center">
                    <div className="tit fb py-3">
                        Contáctanos y solicita nuestros servicios
                    </div>
                    <p className={"yl"}>
                        En Prontofixgas queremos ofrecerle siempre lo mejor, es por eso que tenemos más de una opción de
                        contactarnos para que tengas la facilidad de comunicación con nosotros.
                    </p>

                    <Formik
                        initialValues={{
                            firstName: '',
                            email: '',
                            coments: '',
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={values => {
                            // same shape as initial values
                            console.log(values);
                            set({...state,loading:true})

                        }}
                    >
                        {({errors, touched, handleSubmit, setFieldValue, values}) => (

                            <form className={"wc"} onSubmit={e => {
                                e.preventDefault();
                                handleSubmit();
                            }}>
                                <Flex className={"wc pt-4"} alg={"flex-start"}>
                                    <Field
                                        disabled={state.loading}
                                        flex={"1 0 250px"}
                                           error={(errors.firstName && touched.firstName) && errors.firstName}
                                    >
                                        <input
                                            type="text"
                                            placeholder={"Nombre y Apellido"}
                                            name={"firstName"}
                                            onChange={e => setFieldValue('firstName', e.target.value)}
                                            value={values.firstName}
                                            disabled={state.loading}
                                        />
                                    </Field>
                                    <Field
                                         disabled={state.loading}
                                         flex={"1 0 250px"}
                                         error={(errors.email && touched.email) && errors.email}
                                    >
                                        <input
                                            type="text"
                                            placeholder={"Correo"}
                                            name={"email"}
                                            disabled={state.loading}
                                            onChange={e => setFieldValue('email', e.target.value)}
                                            value={values.email}
                                        />
                                    </Field>
                                    <Field
                                            disabled={state.loading}
                                        error={(errors.coments && touched.coments) && errors.coments}
                                    >
                                    <textarea
                                        placeholder={"Déjanos tus comentarios"}
                                        name={"coments"}
                                        onChange={e=> setFieldValue('coments',e.target.value)}
                                        value={values.coments}
                                        disabled={state.loading}
                                    >

                                    </textarea>
                                    </Field>
                                    <Flex className={"pt-4"} flex={"0 0 320px"}
                                          error={(errors.coments && touched.coments) && errors.coments}
                                    >
                                        <Btn loading={state.loading}>
                                            Enviar
                                        </Btn>
                                    </Flex>
                                </Flex>

                            </form>

                        )}
                    </Formik>
                </div>
            </div>
            <div className="forma-verde"></div>
        </Container>
    )
}

export default React.memo(Contacto);
