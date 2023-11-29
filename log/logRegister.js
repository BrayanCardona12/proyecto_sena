import axios from 'axios'
import { uploadFile } from 'firebaseConfig/config'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import { toast } from 'react-toast'


export default function logRegister() {

    const router = useRouter()
    const [error, setError] = useState()


    const [loading, setLoading] = useState(false)

    let [im, setIm] = useState('https://i0.wp.com/css-tricks.com/wp-content/uploads/2017/08/card-skeleton@2x.png?w=300&ssl=1')


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
        numDoc: 1060705,
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
        if (e.target.files[0]) {
            setFile1(e.target.files[0]);
            setDatosInput({ ...datosInput, imagen: e.target.files[0].name.toString() });
            let reader = new FileReader()
            reader.onload = (e) => {

                setIm(e.target.result)
            }

            reader.readAsDataURL(e.target.files[0])
        } else {
            setIm('https://i0.wp.com/css-tricks.com/wp-content/uploads/2017/08/card-skeleton@2x.png?w=300&ssl=1')
        }

    }


    const changeFile2 = (e) => {
        if (e.target.files[0]) {
            setFile2(e.target.files[0]);
            setDatosInput({ ...datosInput, imgDavi: e.target.files[0].name.toString() });
        }

        if (e.target.files.length == 0) {
            setDatosInput({ ...datosInput, imgDavi: 'vacio' });

        }

    }

    const changeFile3 = (e) => {
        if (e.target.files[0]) {
            setFile3(e.target.files[0]);
            setDatosInput({ ...datosInput, imgNequi: e.target.files[0].name.toString() });
        }
        if (e.target.files.length == 0) {
            setDatosInput({ ...datosInput, imgNequi: 'vacio' });

        }
    }


    //_______________________________

    // funciones de verificacion de codigo

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true)
        toast.info('⌛ Verificando datos...')

        if (file1) {
            let d = file1.type.toString().split('/')

            if (d[1] != 'jpeg' && d[1] != 'png') {
                toast.error('Error, el archivo seleccionado no es de tipo png ni jpg')
                setLoading(false)
                return
            }

        }

        if (!file1) {
            toast.error('Error, el archivo seleccionado no es de tipo png ni jpg')
            setLoading(false)
            return
        }

        for (const k in datosInput) {




            if (datosInput[k] == '') {

                setError(`Error, campo ${k} vacio`)
                setLoading(false)
                toast.error(`⚠ Error, campo ${k} vacio`)
                return
            }

            if (k != 'imagen' && k != 'imgDavi' && k != 'imgNequi' && k != 'correo' && k != 'direccion' && datosInput[k].toString().length >= 50) {

                toast.error(`⚠ Error, verfica que el campo " ${k} " no supere o iguale a 50 caracteres`)
                setLoading(false)
                return
            }

            if (k == 'numDoc' && !parseInt(datosInput[k]) ||
                k == 'telefono' && !parseInt(datosInput[k]) ||
                k == 'edad' && !parseInt(datosInput[k]) ||
                k == 'codInt' && !parseInt(datosInput[k])

            ) {

                toast.error(`⚠ Error, verfica que el campo " ${k} " sea un numero valido.`)
                toast.error(`Verfica que el campo este diligenciado y no tenga puntos, comas, o algun caracter.`)
                setLoading(false)
                return
            }

            if (k == 'correo' && !datosInput[k].includes('@') ||
                k == 'correo' && !datosInput[k].includes('.')
            ) {
                toast.error('Ingresa un correo valido')
                setLoading(false)
                return
            }

            if (k == 'contrasena' && datosInput[k].length > 8) {
                setLoading(false)
                toast.error('Contraseña Invalida, por favor ingresa un contraseña con maximo 8 caracteres')
                return
            }

            if (datosInput['rol'] == '2' && k == 'imgDavi' && datosInput['imgDavi'] == 'vacio' && datosInput['imgNequi'] == 'vacio' ||
                datosInput['rol'] == '2' && k == 'imgNequi' && datosInput['imgNequi'] == 'vacio' && datosInput['imgDavi'] == 'vacio'


            ) {
                setLoading(false)
                toast.info('Por favor ingresa al menos un metodo de pago.')
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
                if (datosInput.imgDavi == 'vacio' || datosInput.imgNequi == 'vacio') {
                    await axios.post('/api/RegisterUsers', { ...datosInput})

                } else {
                    let url1 = await uploadFile(file1)
                    let url2 = await uploadFile(file2)
                    let url3 = await uploadFile(file3)
                    await axios.post('/api/RegisterUsers', { ...datosInput, imagen: url1, imgDavi: url2, imgNequi: url3 })

                }



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


        if (name == 'numDoc' && !parseInt(value) ||
            name == 'telefono' && !parseInt(value) ||
            name == 'edad' && !parseInt(value) ||
            name == 'codInt' && !parseInt(value)

        ) {
            toast.error(`⚠ Error, solo digita numeros validos que no tengan puntos, comas, o algun caracter.`)

            if (parseInt(value) <= 0) {
                toast.info('no puedes ingresar cantidades menores a 0')
                return
            }

            if (value == '') {
                setDatosInput({ ...datosInput, [name]: value })
                return
            }
            setLoading(false)
            return

        } else {

            setDatosInput({ ...datosInput, [name]: value })
        }

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
        changeFile3,
        im
    }
}

