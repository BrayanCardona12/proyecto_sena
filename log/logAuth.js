import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { toast } from 'react-toast'

function LogAuth() {
  const router = useRouter()
  const [error, setError] = useState()
  const [datosInput, setDatosInput] = useState({
    correo: '',
    contrasena: '',
    rol: '1'
  })


    const submit = async (e) => {
      e.preventDefault()
  
      if (datosInput.correo == '' || datosInput.contrasena == '') {
        setError('Error, campos vacios')
        return
      }


  try {

    const { data } = await axios.post('/api/Login', datosInput)
      const info = data[0]
  
      if (data == '') {
        setError('Error, verifica que estes registrado en la plataforma, o mira si correo y contraseña son correctos.')
        return
      }
  
      if (parseInt(info.rol) == 1) {
        localStorage.setItem('auth', 'trueC')
        localStorage.setItem('inf', info.id)
    
         router.push('/RolCliente')
        
        return
      }
  
      if (parseInt(info.rol) == 2) {
        localStorage.setItem('auth', 'trueV')
        localStorage.setItem('inf', info.id)
        router.push('/RolVendedor')
        return
      }
  
      setError('Error')
      return
    
  } catch (error) {
    toast.error('Error, por favor intente mas tarde...')
  }
      
  
    }
  
    const changeInput = ({ target: { name, value } }) => {
      setDatosInput({ ...datosInput, [name]: value })
    }
  
    return {
      changeInput,
      submit,
      correo: datosInput.correo,
      contrasena: datosInput.contrasena,
      rol: datosInput.rol,
      error
    }

    
  } 



export default LogAuth