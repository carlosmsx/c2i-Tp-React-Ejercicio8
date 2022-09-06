export const cantidadCaracteres = (value, min, max)=>{
    return (value.length >= min && value.length <= max) ?  true: false;
}


export const validarEmail = (value)=>{
    const patron = /\w(\.\w)*@\w(\.\w)+/;
    return patron.test(value);
}

export const validarDni = (value) =>{
    const patron = /[\d]{7,8}/;
    return patron.test(value);
}