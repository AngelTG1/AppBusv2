import React from 'react'
import InputsDesign from '../molecules/InputsDesign'
import Title from '../atoms/Title/Title'
import Button from '../atoms/Button/Button'
import { useRef } from 'react';
import '../../assets/style/Register.css'

function RegisterForm() {

  const form = useRef();
  const endpoint = 'http://34.225.239.102/api/registrar/usuario'
  

  const  handlerClick = (e) =>{
      e.preventDefault();
      const newForm = new FormData(form.current); //Objeto 


      const options = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body:JSON.stringify({
              nombre: newForm.get('nombre'),
              correo: newForm.get('correo'),
              usuario: newForm.get('usuario'),
              contrasenia: newForm.get('contrasenia')
          })
      }

      fetch(endpoint, options)
      .then(response => response.json())
      .then(data => {
          if (data.status === true){
              alert('registrado')
              localStorage.setItem('data', JSON.stringify(data.data));
              window.location = '/login';
          }else
              alert('error')
          alert(JSON.stringify(data))
      })
  }


  return (
    <div className='container-register'>
      <form className='content-register' ref={form}>
        <div className='title-register'>
          <Title level='h1' text={"Registrate"} />
        </div>
        <div className='inputs-register'>
          <label>Name</label>
          <input type="text" placeholder='Name' name='nombre'/>
          <label>E-mail</label>
          <input type="email" placeholder='E-mail' name='correo'/>
          <label>Username</label>
          <input type="text" placeholder='Username' name='usuario'/>
          <label>Password</label>
          <input type="password" placeholder='Password' name='contrasenia'/>
        </div>
        <div className='btn-register'>
          <button onClick={handlerClick}>Registrarse</button>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm