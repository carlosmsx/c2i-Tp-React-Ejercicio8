import React, {useState} from 'react';
import {Form,Button,Alert} from 'react-bootstrap';
//import { cantidadCaracteres, validarCategoria, validarPrecio, validarUrl } from "./helpers";
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
        //if (cantidadCaracteres(nombreProducto, 2, 20) && validarPrecio(precio) && validarUrl(imagen) && validarCategoria(categoria)) 
        if (false)
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
                    <Form.Control type="text" onChange={e=>handleChangeNombre(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formApellido">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" onChange={e=>handleChangeApellido(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDNI">
                    <Form.Label>DNI</Form.Label>
                    <Form.Control type="number" onChange={e=>handleChangeDNI(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-4" controlId="formEmail">
                    <Form.Label>e-mail</Form.Label>
                    <Form.Control type="text" onChange={e=>handleChangeEmail(e.target.value)} />
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
