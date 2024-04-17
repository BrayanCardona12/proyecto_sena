import { info } from 'autoprefixer'
import axios from 'axios'
import { uploadFile } from 'firebaseConfig/config'
import { host } from 'log/const'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toast'

function actUser({ data }) {
    const router = useRouter()



    const [datosInput, setDatosInput] = useState({
        nombre: '',
        imagen: '',
        apellido: '',
        codInt: 0,
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

    let correo = useRef()

    const [file, setFile] = useState(null)
    const [file2, setFile2] = useState(null)
    const [file3, setFile3] = useState(null)

    const [inputCod, setInputCod] = useState('')

    const codRamdon = useRef(Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000)

    const [error, setError] = useState('')
    const [statusBtnSend, setStatusBtnSend] = useState(true)

    useEffect(() => {
        try {

            setDatosInput({ ...data[0] })
            correo.current = data[0].correo

        } catch (error) {

            toast.error('Ups, ha ocurrido un error en el servidor')

        }


    }, [])

    const changeInput = ({ target: { name, value } }) => {
        setDatosInput({ ...datosInput, [name]: value })
    }

    const sendEmail = async (e) => {
        e.preventDefault();
        //---------------------------------------
        //.....


        // ⬆ se hace la validacion de los campos. (💡, puede ser una funcion aparte, para que se pueda usar en el otro onclick...)
        if (correo.current == datosInput.correo) {
            ; (async () => {
                try {
                    await axios.post(`https://service-email.vercel.app/send/${datosInput.correo}/${codRamdon.current}`)
                } catch (ee) {
                    toast.error('Error, por favor inténtalo mas tarde')
                    console.log(ee);
                    return
                }

            })();
            setStatusBtnSend(false)
            setError('')
            return

        } else {
            try {
                const { data } = await axios.put('/api/Login', { correo: datosInput.correo })
                if (data != '') {
                    setError('Error, Usuario Existente')
                    return
                } else {
                    ; (async () => {
                        await axios.post(`https://service-email.vercel.app/send/${datosInput.correo}/${codRamdon.current}`)
                    })();
                    setStatusBtnSend(false)
                    setError('')
                    return
                }
            } catch (ee) {
                toast.error('Error, por favor inténtalo mas tarde')
                console.log(ee);
            }

        }

    }

    const clickCodVerf = async (e) => {

        e.preventDefault();

        try {
            if (inputCod == codRamdon.current) {

                // se actualiza y regresa a la pagina anterior
                let alerta = confirm('El código ingresado es correcto, ¿desea continuar con el proceso de actualización de datos?')

                if (alerta) {

                    if (file == null && file2 == null && file3 == null) {
                        toast.warn('⌛ Cargando...')
                        await axios.put(`/api/RegisterUsers/`, { ...datosInput, id: parseInt(router.query.id) })
                        localStorage.setItem('imgUser', datosInput.imagen)
                        localStorage.setItem('theName', datosInput.nombre)
                        router.push('/')

                    } else {

                        let infoImgs = {}
                        let infoInputsFile = { imagen: file, imgDavi: file2, imgNequi: file3 }

                        for (const it in infoInputsFile) {
                            if (infoInputsFile[it] != null) {

                                let urll = await uploadFile(infoInputsFile[it])

                                infoImgs = { ...infoImgs, [it]: urll }
                                if (it == 'imagen') {
                                    localStorage.setItem('imgUser', urll)
                                    localStorage.setItem('theName', datosInput.nombre)
                                }
                            }


                        }



                        toast.warn('⌛ Cargando...')

                        // let url = await uploadFile(file)


                        await axios.put(`/api/RegisterUsers/`, { ...datosInput, id: parseInt(router.query.id), ...infoImgs })
                        router.push('/')
                    }

                }





            } else {
                setError('Error, código incorrecto');
            }

            return
        } catch (ee) {
            toast.error('Error, por favor inténtalo mas tarde')
            console.log(ee);
        }



    }



    return (
       
        <>
            <Head>
            <link rel="icon" href="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png" />

                <link rel="stylesheet" href="/style/registro.css" />
                <title>Formulario | Actualizar Información Personal</title>
            </Head>
            <div className='bg_signUp'>
                <section>
                <button onClick={router.back} style={{ color: 'white', fontSize: '20px', position:'fixed', left:0, bottom:0 }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded m-4">Regresar</button>
                               
                    <div className='center_registro'>
                        <div className='bg_formAdd container_registro'>
                            <h1 className='titulo_registro'>Actualizar Información Personal</h1>
                            <form className='contenedor px-11 py-2'>
                            <ToastContainer delay={6000} position='bottom-center' />
                                <div className="space-y-3">
                                    <div className="col-span-full border-b border-gray-900/10 pb-5">
                                        <label for="photo" className="block text-xl font-medium leading-6">Foto</label>
                                        <div className="mt-2 flex items-center gap-x-3">
                                            <img src={datosInput.imagen} className=' rounded-full w-20 h-20' />
                                            <input type="file" onChange={(e) => { setFile(e.target.files[0]) }} name="imagen" className=' w-10/12 file:bg-gradient-to-b file:from-green-500 file:to-green-600 file:px-6 file:py-3 file:m-5 file:border-none file:rounded-full file:text-white file:cursor-pointer file:shadow-lg file:shadow-green-600/50' />
                                        </div>
                                    </div>


                                    <div className="border-b border-gray-900/10 pb-12">
                                        <h2 className="text-base font-semibold leading-7 ">Ingrese los Datos</h2>


                                        <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">



                                            <div className="sm:col-span-2">
                                                <label for="first-name" className="block text-sm font-medium leading-6">Nombre</label>
                                                <div className="mt-2">
                                                    <input type="text" onChange={changeInput} value={datosInput.nombre} name="nombre" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white bg-transparent focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Nombre' />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-2">
                                                <label for="apellido" className="block text-sm font-medium leading-6">Apellido</label>
                                                <div className="mt-2">
                                                    <input type="text" onChange={changeInput} value={datosInput.apellido} name="apellido" id="apellido" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset bg-transparent ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Apellido' />
                                                </div>



                                            </div>

                                            <div className="sm:col-span-2">
                                                <label for="apellido" className="block text-sm font-medium leading-6">Tipo de Documento</label>
                                                <div className="mt-2">
                                                    <select className="block w-full rounded-md border-0 py-1.5  ring-1 ring-inset text-gray-300 ring-gray-300 sm:text-sm sm:leading-6 bg-transparent" onChange={changeInput} value={datosInput.tipoDoc} name='tipoDoc' id="tipoDoc">
                                                        <option value="Cédula de Ciudadania">Cedula de Ciudadania</option>
                                                        <option value="Cédula Extranjera">Cédula Extranjera</option>
                                                        <option value="Pasaporte">Pasaporte</option>
                                                        <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                                                    </select>
                                                </div>
                                            </div>



                                            <div className="sm:col-span-2">
                                                <label for="telefono" className="block text-sm font-medium leading-6">Número de Documento</label>
                                                <div className="mt-2">
                                                    <input className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset bg-transparent ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="numDoc" type="text" onChange={changeInput} placeholder="Numero de Documento" value={datosInput.numDoc} />
                                                </div>
                                            </div>



                                            <div className="sm:col-span-2">
                                                <label for="telefono" className="block text-sm font-medium leading-6">Código Internacional</label>
                                                <div className="mt-2">

                                                    <input className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 bg-transparent placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" min={1} max={400} onChange={changeInput} name="codInt" placeholder="Codigo Internacional" value={datosInput.codInt} autoComplete="postal-code" type="number" />

                                                </div>
                                            </div>




                                            <div className="sm:col-span-2">
                                                <label for="telefono" className="block text-sm font-medium leading-6">Teléfono</label>
                                                <div className="mt-2">
                                                    <input className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 bg-transparent placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={changeInput} value={datosInput.telefono} name="telefono" placeholder="Teléfono" autoComplete="postal-code" type="number" />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-2">
                                                <label for="edad" className="block text-sm font-medium leading-6">Edad</label>
                                                <div className="mt-2">
                                                    <input onChange={changeInput} value={datosInput.edad} name="edad" placeholder="Edad" className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white bg-transparent focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="number" />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-2">
                                                <label for="pais" className="block text-sm font-medium leading-6">País</label>
                                                <div className="mt-2">
                                                    <select className="block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 bg-transparent focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" onChange={changeInput} value={datosInput.pais} name="pais" >
                                                        <option disabled>-- Seleccione País</option>
                                                        <option>Ecuador</option>
                                                        <option>Colombia</option>
                                                        <option>Venezuela</option>
                                                        <option>España</option>
                                                    </select>



                                                </div>
                                            </div>

                                            <div className="sm:col-span-2">
                                                <label for="ciudad" className="block text-sm font-medium leading-6">Ciudad</label>
                                                <div className="mt-2">

                                                    <input className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white bg-transparent focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={changeInput} value={datosInput.ciudad} name="ciudad" placeholder="Ciudad" type="text" />

                                                </div>
                                            </div>

                                            <div className="sm:col-span-2">
                                                <label for="direccion" className="block text-sm font-medium leading-6">Dirección</label>
                                                <div className="mt-2">

                                                    <input className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white bg-transparent focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={changeInput} value={datosInput.direccion} name="direccion" placeholder="Dirección" type="text" />

                                                </div>
                                            </div>


                                            {datosInput.rol == '2' ? <>
                                                <div className="sm:col-span-2" style={{ display: 'block', backgroundColor: 'rgb(0 46 255 / 26%)', border: '1px solid rgb(0 24 106)', padding: '12px', borderRadius: '5px' }}>

                                                    {"Como eres vendendor, puedes modificar tus medios de pago (Daviplata o Nequi):"}

                                                </div>

                                                <div className="sm:col-span-2">
                                                    <label for="ciudad" className="block text-sm font-medium leading-6">Daviplata</label>
                                                    <div className="mt-2" style={{ display: 'flex' }}>
                                                        <img style={{ maxWidth: '50px' }} src={datosInput.imgDavi} />
                                                        <input className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white bg-transparent focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="imgDavi" onChange={(e) => { setFile2(e.target.files[0]) }} type="file" accept='image/*' placeholder="Imagen Davi" />

                                                    </div>
                                                </div>

                                                <div className="sm:col-span-2">
                                                    <label for="ciudad" className="block text-sm font-medium leading-6">Nequi</label>
                                                    <div className="mt-2" style={{ display: 'flex' }}>
                                                        <img style={{ maxWidth: '50px' }} src={datosInput.imgNequi} />
                                                        <input className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white bg-transparent focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="imgNequi" onChange={(e) => { setFile3(e.target.files[0]) }} type="file" accept='image/*' placeholder="Imagen Nequi" />

                                                    </div>
                                                </div>


                                            </> : ''}

                                            {statusBtnSend ?
                                                <>
                                                    <div className="sm:col-span-2">
                                                        <label for="ciudad" className="block text-sm font-medium leading-6">Correo</label>
                                                        <div className="mt-2" >
                                                            <input className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white bg-transparent focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={changeInput} value={datosInput.correo} name="correo" placeholder="Correo" type="email" />

                                                        </div>
                                                    </div>



                                                </>

                                                :
                                                <div className="sm:col-span-2">
                                                    <label for="ciudad" className="block text-sm font-medium leading-6">Correo</label>
                                                    <div className="mt-2" >
                                                        <input disabled className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white bg-transparent focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={changeInput} value={datosInput.correo} name="correo" placeholder="Correo" type="email" />

                                                    </div>
                                                </div>
                                            }


                                            <div className="sm:col-span-2">
                                                <label for="ciudad" className="block text-sm font-medium leading-6">Contraseña</label>
                                                <div className="mt-2" >
                                                    <input className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white bg-transparent focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={changeInput} value={datosInput.contrasena} name="contrasena" placeholder="Contraseña" type="password" />

                                                </div>
                                            </div>

                                            {statusBtnSend ?


                                                <div className="sm:col-span-2">
                                                    <div className="mt-2" >
                                                        <button onClick={sendEmail} className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Enviar</button>
                                                    </div>
                                                </div>
                                                :

                                                <>
                                                    <div className="sm:col-span-2">
                                                        <div className="mt-2" style={{ display: 'block', backgroundColor: '#397437', border: '1px solid #00450b', padding: '12px', borderRadius: '5px' }}>
                                                            Ingresa el codigo de verificacion enviado al correo electronico indicado en este formulario para continuar con la actualización de datos
                                                        </div>
                                                    </div>


                                                    <div className="sm:col-span-2">
                                                        <div className="mt-2" >
                                                            <input className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white bg-transparent focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type='text' placeholder='codigo' value={inputCod} onChange={(e) => {
                                                                setInputCod(e.target.value)
                                                            }} />
                                                        </div>
                                                    </div>


                                                    <div className="sm:col-span-2">
                                                        <div className="mt-2" >
                                                            <input type='submit' className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={clickCodVerf} value={'Enviar'} />

                                                        </div>
                                                    </div>

                                                </>

                                            }


                                            {error ? <b>{error}</b> : ''}





                                        </div>
                                    </div>


                                </div>

                                <div className="mt-6 flex items-center justify-between gap-x-6">
                                    <p className=''>
                                        Ya tienes una Cuenta?
                                        <Link className='link_cuenta' href='/FormLogin'>Iniciar Sesión</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>

                </section>

            </div>

        </>
    )
}

actUser.getInitialProps = async (ctx) => {


    try {
        const { data } = await axios.get(host + `/api/Login/?id=` + ctx.query.id)

        return {
            data: JSON.parse(JSON.stringify(data))

        };
    } catch (error) {

        return {
            data: [{
                error: true
            }]
        }

    }

}

export default actUser