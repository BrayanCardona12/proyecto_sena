import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { toast } from 'react-toast'

function LogAuth() {
  const router = useRouter()
  const [error, setError] = useState()
  const [loading, setloading] = useState()
  const [datosInput, setDatosInput] = useState({
    correo: '',
    contrasena: '',
    rol: '1'
  })


  const submit = async (e) => {
    e.preventDefault()
    setloading(true)

    setTimeout(async () => {

      if (datosInput.correo == '' || datosInput.contrasena == '') {
        setError('Error, campos vacios')
        setloading(false)
        return
      }
  
  
      try {
  
        const { data } = await axios.post('/api/Login', datosInput)
        const info = data[0]
  
        if (data == '') {
          setError('Error, verifica que estes registrado en la plataforma, o mira si correo y contraseña son correctos.')
          setloading(false)
          return
        }
  
        if (parseInt(info.rol) == 1) {
          localStorage.setItem('auth', 'trueC')
          localStorage.setItem('theName', info.nombre)
          localStorage.setItem('imgUser', info.imagen)
  
          localStorage.setItem('inf', info.id)
          setloading(false)
  
          router.push('/RolCliente')
  
          return
        }
  
        if (parseInt(info.rol) == 2) {
          localStorage.setItem('auth', 'trueV')
          localStorage.setItem('inf', info.id)
          localStorage.setItem('theName', info.nombre)
          localStorage.setItem('imgUser', info.imagen)
          setloading(false)
          router.push('/RolVendedor')
          return
        }
  
        setloading(false)
        setError('Error')
        return
  
      } catch (error) {
  
        toast.error('🤭 Error, por favor intente mas tarde...')
        setError('Ups, ha ocurrido un error en el servidor por favor intenta mas tarde. 😊')
        setloading(false)
      }


    }, 1850)

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
    error,
    loading,
    setloading
  }

}



export default LogAuth