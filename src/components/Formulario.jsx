import React, {useState} from 'react';
import {Form,Button,Alert} from 'react-bootstrap';
import { cantidadCaracteres, validarDni, validarEmail } from "./helpers";
import Swal from "sweetalert2";

const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [dni, setDni] = useState("");
    const [email, setEmail] = useState("");

    const [mostrarSucces, setMostrarSuccess] = useState(false);
    const [mostrarError, setMostrarError] = useState(false);

    const handleChangeNombre = (value) =>
    {
        setNombre(value);
    }

    const handleChangeApellido = (value) =>
    {
        setApellido(value);
    }

    const handleChangeDNI = (value) =>
    {
        setDni(value);
    }

    const handleChangeEmail = (value) =>
    {
        setEmail(value);
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();

        //validar
        if (cantidadCaracteres(nombre, 2, 30) && cantidadCaracteres(apellido, 2, 20) && validarDni(dni) && validarEmail(email)) 
        {
            setMostrarSuccess(true);
            setTimeout(() => {
                setMostrarSuccess(false);
            }, 5000);
            }
        else {
            setMostrarError(true);
            setTimeout(() => {
                setMostrarError(false);
            }, 5000);
        }
    }

    return (
        <div className='container mt-5'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" onChange={e=>handleChangeNombre(e.target.value)} value={nombre} minLength={2} maxLength={30}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formApellido">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" onChange={e=>handleChangeApellido(e.target.value)} value={apellido} minLength={2} maxLength={20}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDNI">
                    <Form.Label>DNI</Form.Label>
                    <Form.Control type="text" onChange={e=>handleChangeDNI(e.target.value)} value={dni} minLength={7} maxLength={8}/>
                </Form.Group>
                <Form.Group className="mb-4" controlId="formEmail">
                    <Form.Label>e-mail</Form.Label>
                    <Form.Control type="text" onChange={e=>handleChangeEmail(e.target.value)} value={email} minLength={5} maxLength={50}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>
            {
                (mostrarSucces)?<Alert className='mt-4' variant='success'>datos enviados</Alert>:
                (mostrarError)?<Alert className='mt-4' variant='danger'>completar todos los datos</Alert>:null
            }
        </div>
    );
};

export default Formulario;
