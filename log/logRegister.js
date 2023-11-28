import axios from 'axios'
import { uploadFile } from 'firebaseConfig/config'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import { toast } from 'react-toast'


export default function logRegister() {

    const router = useRouter()
    const [error, setError] = useState()

    const [loading, setLoading] = useState(false)

    // Cositas del register
    const [inputCod, setInputCod] = useState('')

    const codRamdon = useRef(Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000)


    const [statusBtnSend, setStatusBtnSend] = useState(true)

    //-----------------------

    const [datosInput, setDatosInput] = useState({

        imagen: '',
        nombre: '',
        apellido: '',
        codInt: 57,

        tipoDoc: 'Cédula de Ciudadania',
        numDoc: '',
        imgDavi: 'vacio',
        imgNequi: 'vacio',


        telefono: 31264534,
        edad: 32,
        pais: 'CO',
        ciudad: '',
        direccion: '',
        rol: '1',
        correo: '',
        estado: 'activo',
        contrasena: ''
    })



    //

    const [file1, setFile1] = useState(null)
    const [file2, setFile2] = useState(null)
    const [file3, setFile3] = useState(null)

    const changeFile1 = (e) => {
        setFile1(e.target.files[0]);
        setDatosInput({ ...datosInput, imagen: e.target.files[0].name.toString() });
    }


    const changeFile2 = (e) => {
        setFile2(e.target.files[0]);
        setDatosInput({ ...datosInput, imgDavi: e.target.files[0].name.toString() });
    }

    const changeFile3 = (e) => {
        setFile3(e.target.files[0]);
        setDatosInput({ ...datosInput, imgNequi: e.target.files[0].name.toString() });
    }


    //_______________________________

    // funciones de verificacion de codigo

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true)

        for (const k in datosInput) {

            if (datosInput[k] == '') {


                setError(`Error, campo ${k} vacio`)
                setLoading(false)
                return
            }
        }

        const { data } = await axios.put('/api/Login', { correo: datosInput.correo })
        if (data != '') {
            setError('Error, Usuario Existente')
            setLoading(false)
            return
        } else {
            await axios.post(`http://localhost:4055/send/${datosInput.correo}/${codRamdon.current}`)
            setStatusBtnSend(false)
            setLoading(false)
            setError('')
            return
        }



    }

    const clickCodVerf = async (e) => {
        e.preventDefault();
        setLoading(true)

        if (inputCod == codRamdon.current) {

            toast.warn('⌛ Cargando...')

            if (parseInt(datosInput.rol) == 1) {
                let url1 = await uploadFile(file1)
                await axios.post('/api/RegisterUsers', { ...datosInput, imagen: url1 })

            } else {
                let url1 = await uploadFile(file1)
                let url2 = await uploadFile(file2)
                let url3 = await uploadFile(file3)
                await axios.post('/api/RegisterUsers', { ...datosInput, imagen: url1, imgDavi: url2, imgNequi: url3 })

            }



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

        } else {
            setError('Error, código incorrecto');
            setLoading(false)
        }

        return
    }

    ///---------------------------------



    const changeInput = ({ target: { name, value } }) => {
        setDatosInput({ ...datosInput, [name]: value })
    }




    return {
        changeInput,
        datosInput,
        setDatosInput,
        error,
        loading,
        statusBtnSend,
        setStatusBtnSend,
        codRamdon,
        inputCod,
        setInputCod,
        sendEmail,
        clickCodVerf,
        changeFile1,
        changeFile2,
        changeFile3
    }
}

