import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'


export default function logRegister() {

    const router = useRouter()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    
    const [datosInput, setDatosInput] = useState({
        nombre: '',
        imagen:'',
        apellido: '',
        telefono: 3214223,
        edad: 32,
        pais: 'CO',
        ciudad: '',
        direccion: '',
        rol: '1',
        correo: '',
        estado:'activo',
        contrasena: ''
    })

    const submit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const { data } = await axios.put('/api/Login', {correo: datosInput.correo})

        if (data != '') {
            setError('Error, Usuario Existente')
            setLoading(false)
            return
          }

        for (const k in datosInput) {

            if (datosInput[k] == '') {
                setError(`Error, campo ${k} vacio`)
                setLoading(false)
                return
            }
        }

        await axios.post('/api/RegisterUsers', datosInput)


        if (parseInt(datosInput.rol) == 1) {
            localStorage.setItem('auth', 'trueC')
            let { correo, contrasena, rol } = datosInput

            const { data } = await axios.post('/api/Login', { correo, contrasena, rol })
            const info = data[0]

            localStorage.setItem('inf', info.id)
            router.push('/RolCliente')

            setLoading(false)
            return
        }

        if (parseInt(datosInput.rol) == 2) {
            localStorage.setItem('auth', 'trueV')
            let { correo, contrasena, rol } = datosInput

            const { data } = await axios.post('/api/Login', { correo, contrasena, rol })
            const info = data[0]

            localStorage.setItem('inf', info.id)
            router.push('/RolVendedor')
            setLoading(false)
            return
        }

        setError('Error')
        setLoading(false)
        return

    }

    const changeInput = ({ target: { name, value } }) => {
        setDatosInput({ ...datosInput, [name]: value })
    }


  return {
    submit,
     changeInput,
     datosInput,
     setDatosInput,
     error,
     loading
     }
}

 