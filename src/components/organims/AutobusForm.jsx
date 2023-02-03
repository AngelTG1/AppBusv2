import React from 'react'
import InputsDesign from '../molecules/InputsDesign'
import Title from '../atoms/Title/Title'
import Button from '../atoms/Button/Button'
import { useRef } from 'react';
import '../../assets/style/AutobusForm.css'

function AutobusForm() {

  const form = useRef();
  const Endpoint = 'http://34.225.239.102/api/autobus/register'

  const  handlerClick = (e) =>{
    e.preventDefault();
    const newForm = new FormData(form.current); //Objeto 


    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          clave: newForm.get('clave'),
          placa: newForm.get('placa'),
          numasientos: newForm.get('numasientos'),
          fecha: newForm.get('fecha'),
          tipo: newForm.get('tipo'),
          nombre: newForm.get('nombre'),
          licencia: newForm.get('licencia')
        })
    }

    fetch(Endpoint, options)
    .then(response => response.json())
    .then(data => {
        if (data.status === true){
            alert('Bus registrado')
            localStorage.setItem('data', JSON.stringify(data.data));
        }else
            alert('error')
        alert(JSON.stringify(data))
    })
}

  return (
    <div className='container-bus'>
      <form className='content-bus' ref={form}>
        <div className='title-bus'>
          <Title level='h1' text={"Alta de autobus"} />
        </div>
        <div className='inputs-bus'>
          <div>
            <label>Clave</label>
            <input type="text" placeholder='Clave' name='clave'/>
          </div>
          <div>
            <label>Placa autobus</label>
            <input type="text" placeholder='Placa autobus' name='placa'/>
          </div>
        </div>
        <div className='inputs-bus'>
          <div>
            <label>Numero de asiento</label>
            <input type="text" placeholder='Numero de asiento' name='numasientos'/>
          </div>
          <div>
            <label>Fecha de alta</label>
            <input type="date" placeholder='Fecha de alta' name='fecha'/>
          </div>
        </div>
        <div className='inputs-form-bus'>
          <label>Tipo</label>
          <select name="tipo" id="">
            <option selected>Selecciona el Tipo</option >
            <option value="Turismo">Turismo</option>
            <option value="Lujo">Lujo</option>
          </select>

          <label>Nombre del chofer</label>
          <input type="text" placeholder='Nombre del chofer' name='nombre'/>
          <label>Numero de licencia</label>
          <input type="text" placeholder='Numero de licencia' name='licencia'/>
        </div>
        <div className='btn-bus'>
        <button onClick={handlerClick}>Registrar bus</button>
        </div>
      </form>
    </div>
  )
}

export default AutobusForm