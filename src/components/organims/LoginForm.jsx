import { useRef } from 'react';
import React from 'react'
import Title from '../atoms/Title/Title'
import { Link } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import App from '../../containers/App';
import '../../assets/style/Login.css'


function LoginForm() {

  const form = useRef();
  const EndPoint = 'http://34.225.239.102/api/iniciar'

  const handlerClick = (e) =>{
    e.preventDefault();
    const newForm = new FormData(form.current);
    
    if (newForm.get('usuario') === '' || newForm.get('contrasenia') === ''){
      alert('el campo esta vacio')
    return false;
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body:JSON.stringify({
        usuario: newForm.get('usuario'),
        contrasenia: newForm.get('contrasenia')
      })
    }

    fetch(EndPoint, options)
    .then(response => response.json())
    .then(data => {
      if (data.status === true){
        alert(`Bienvenido: ${newForm.get('usuario')}`)
        localStorage.setItem('data', JSON.stringify(data.data));
        window.location = '/busform';
      }else
        alert('Cuenta no encontrada sorry!')

      // alert(JSON.stringify(data))
    })
  }


  return (
    <div className='container'>
      <form className='container-login' ref={form}>
        <div className='title-login'>
          <Title level='h1' text={"Login"} />
        </div>
        <div className='inputs-login'>
           <label>Usuario</label>
           <input type="text" placeholder='Usuario' name='usuario' required/>
           <label>Contraseña</label>
           <input type="password" placeholder='Contraseña' name='contrasenia' required/>
        </div>
        <div className='description-login'>
          <Link to="/registro">No tienes cuenta? <span>Registrate</span></Link>
        </div>
        <div className='btn-login'>
          <button onClick={handlerClick}>Iniciar sesion</button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm