import React from 'react';
import {Form,Button,Alert} from 'react-bootstrap';
//import { cantidadCaracteres, validarCategoria, validarPrecio, validarUrl } from "./helpers";
import Swal from "sweetalert2";

const Formulario = () => {
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formNombreProducto">
                    <Form.Label>Nombre Producto</Form.Label>
                    <Form.Control type="text" placeholder="Ej: Te" onChange={e=>setNombreProducto(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrecio">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="number" placeholder="100" onChange={e=>setPrecio(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formImagen">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="text" placeholder="Ej: https://..." onChange={e=>setImagen(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCategoria">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Select onChange={e=>setCategoria(e.target.value)}>
                        <option value="">Seleccione una opción</option>
                        <option value="bebida-caliente">Bebida caliente</option>
                        <option value="bebida-fria">Bebida fria</option>
                        <option value="dulce">Dulce</option>
                        <option value="salado">Salado</option>
                    </Form.Select>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Guardar
                </Button>
            </Form>
            {
                (mensajeError===true)?<Alert variant='danger'>Debe corregir los datos</Alert>:null
            }
        </div>
    );
};

export default Formulario;