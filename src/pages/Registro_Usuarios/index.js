import logRegister from "log/logRegister"
import Head from "next/head"
import { useState } from "react"
import { ToastContainer } from "react-toast"
import Link from 'next/link';
import { useRouter } from "next/router";

export default function RegistroUsuarios() {

  let { changeInput, datosInput, error, loading, statusBtnSend
    , inputCod, setInputCod, sendEmail, clickCodVerf, changeFile1, changeFile2,
    changeFile3, im } = logRegister()

    let router = useRouter()



  return (
    <>
      <Head>

        <link rel="stylesheet" href="/style/registro.css" />
        <title>Formulario | Insertar Producto</title>
      </Head>


    


      <div className='bg_signUp'>

        <section>
        <button onClick={router.back} style={{ color: 'white', fontSize: '16px', position:'fixed', left:0 }} className="bg-orange-500 hover:bg-orange-700 text-white rounded m-4 p-2">Regresar</button>
                               
          <div className='center_registro'>
            <div className='bg_formAdd container_registro'>
              <h1 className='titulo_registro'>Regístrate</h1>
              <form className='contenedor px-11 py-2'>
                <ToastContainer delay={3000} position='bottom-center' />
                <div className="space-y-3">
                  <div className="col-span-full border-b border-gray-900/10 pb-5">
                    <label for="photo" className="block text-xl font-medium leading-6">Foto</label>
                    <div className="mt-2 flex items-center gap-x-3">
                      <img src={`${im}`} className=' rounded-full w-20 h-20' />
                      <input onChange={changeFile1} accept="image/*" type="file" className=' w-10/12 file:bg-gradient-to-b file:from-green-500 file:to-green-600 file:px-6 file:py-3 file:m-5 file:border-none file:rounded-full file:text-white file:cursor-pointer file:shadow-lg file:shadow-green-600/50' />
                    </div>
                  </div>


                  <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 ">Ingrese los Datos</h2>


                    <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                      <div className="sm:col-span-2">
                        <label for="documento" className="block text-sm font-medium leading-6">Seleccione el Rol</label>
                        <div className="mt-2">
                          <select id="documento" onChange={changeInput} value={datosInput.rol} name='rol' autoComplete="country-name" className="block w-full rounded-md border-0 p-1.5  ring-1 ring-inset  ring-gray-300 sm:text-sm sm:leading-6 bg-transparent">
                            <option disabled className='placeholder:text-black'>-- Elige el Rol</option>
                            <option  className='text-black' value="1">Cliente</option>
                            <option  className='text-black' value="2">Vendedor</option>
                          </select>
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label for="first-name" className="block text-sm font-medium leading-6">Nombre</label>
                        <div className="mt-2">
                          <input type="text" onChange={changeInput} value={datosInput.nombre} name="nombre" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 p-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white bg-transparent focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Nombre' />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label for="apellido" className="block text-sm font-medium leading-6">Apellido</label>
                        <div className="mt-2">
                          <input type="text" onChange={changeInput} value={datosInput.apellido} name="apellido" id="apellido" autoComplete="given-name" className="block w-full rounded-md border-0 p-1.5 text-white shadow-sm ring-1 ring-inset bg-transparent ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Apellido' />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label for="apellido" className="block text-sm font-medium leading-6">Tipo Documento</label>
                        <div className="mt-2">
                          <select onChange={changeInput} value={datosInput.tipo} name='tipoDoc' id="tipoDoc" className="block w-full rounded-md border-0 p-1.5  ring-1 ring-inset text-gray-300 ring-gray-300 sm:text-sm sm:leading-6 bg-transparent">
                            <option  className='text-black' value="Cédula de Ciudadania">Cedula de Ciudadania</option>
                            <option  className='text-black' value="Cédula Extranjera">Cédula Extranjera</option>
                            <option  className='text-black' value="Pasaporte">Pasaporte</option>
                            <option  className='text-black' value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                          </select>
                        </div>


                      </div>

                      <div className="sm:col-span-2">
                        <label for="apellido" className="block text-sm font-medium leading-6">Número Documento</label>
                        <div className="mt-2">
                          <input name="numDoc" type="text" onChange={changeInput} placeholder="Numero de Documento" value={datosInput.numDoc} className="block w-full rounded-md border-0 p-1.5 text-white shadow-sm ring-1 ring-inset bg-transparent ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                      </div>


                      <div className="sm:col-span-2">
                        <label for="codInt" className="block text-sm font-medium leading-6">Código Internacional</label>
                        <div className="mt-2">
                          <input className="block w-full rounded-md border-0 p-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 bg-transparent placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={changeInput} name="codInt" placeholder="Codigo Internacional" value={datosInput.codInt} autoComplete="postal-code" type="number" />

                        </div>
                      </div>


                      <div className="sm:col-span-2">
                        <label for="telefono" class="block text-sm font-medium leading-6">Teléfono</label>
                        <div className="mt-2">


                          <input className="block w-full rounded-md border-0 p-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 bg-transparent placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={changeInput} value={datosInput.telefono} name="telefono" placeholder="Teléfono" autoComplete="postal-code" type="number" />

                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label for="edad" className="block text-sm font-medium leading-6">Edad</label>
                        <div className="mt-2">
                          <input onChange={changeInput} value={datosInput.edad} name="edad" placeholder="Edad" type="number" className="block w-full rounded-md border-0 p-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white bg-transparent focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label for="pais" className="block text-sm font-medium leading-6">País</label>
                        <div className="mt-2">
                          <select id="pais" onChange={changeInput} value={datosInput.pais} name="pais" autoComplete="country-name" className="block w-full rounded-md border-0 p-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 bg-transparent focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6">
                            <option disabled>-- Seleccione País</option>
                            <option  className='text-black'>Ecuador</option>
                            <option  className='text-black'>Colombia</option>
                            <option  className='text-black'>Venezuela</option>
                            <option  className='text-black'>España</option>
                          </select>
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label for="ciudad" className="block text-sm font-medium leading-6">Ciudad</label>
                        <div className="mt-2">
                          <input onChange={changeInput} value={datosInput.ciudad} name="ciudad" className="block w-full rounded-md border-0 p-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white bg-transparent focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Ciudad" type="text" />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label for="direccion" className="block text-sm font-medium leading-6">Dirección</label>
                        <div className="mt-2">
                          <input onChange={changeInput} className="block w-full rounded-md border-0 p-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white bg-transparent focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={datosInput.direccion} name="direccion" placeholder="Dirección" type="text" />
                        </div>
                      </div>



                      <div class="sm:col-span-2">
                        <label for="correo" class="block text-sm font-medium leading-6">Correo</label>
                        <div class="mt-2">
                          <input className="block w-full rounded-md border-0 p-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white bg-transparent focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={changeInput} value={datosInput.correo} name="correo" placeholder="Correo" type="email" />

                        </div>
                      </div>

                      <div class="sm:col-span-6">
                        <label for="correo" class="block text-sm font-medium leading-6">Contraseña:</label>
                        <div class="mt-2">
                          <input className="block w-full rounded-md border-0 p-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white bg-transparent focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={changeInput} value={datosInput.contrasena} name="contrasena" placeholder="Contraseña" type="password" />

                        </div>
                      </div>













                      {datosInput.rol == '2' ? <>

                        <div style={{margin:'0 0 15px 0', display:'block', backgroundColor: '#ff000042', border:'1px solid #6a0000', padding:'12px', borderRadius:'5px'}} className="sm:col-span-6">
                          <label for="correo" className="block text-sm font-medium leading-6">Como quieres ser vendendor, es necesario que adjuntes al menos dos QR (Daviplata o Nequi) para que te puedan depositar:</label>
                        </div>



                      </> : ''}

                      {datosInput.rol == '2' ? <>

                        <div className="sm:col-span-3">
                          <label for="correo" className="block text-sm font-medium leading-6">Daviplata:</label>


                          <input accept="image/*" className=' w-10/12 file:bg-gradient-to-b file:from-orange-400  file:to-orange-500 file:px-6 file:py-3 file:m-5 file:border-none file:rounded-full file:text-white file:cursor-pointer file:shadow-lg file:shadow-orange-600/50' type="file" name="imgDavi" onChange={changeFile2} placeholder="Imagen Davi" />



                        </div>



                      </> : ''}



                      {datosInput.rol == '2' ? <>

                        <div className="sm:col-span-3">
                          <label for="correo" className="block text-sm font-medium leading-6">Nequi:</label>
                          <input accept="image/*" type="file" className=' w-10/12 file:bg-gradient-to-b file:from-orange-400  file:to-orange-500 file:px-6 file:py-3 file:m-5 file:border-none file:rounded-full file:text-white file:cursor-pointer file:shadow-lg file:shadow-orange-600/50' name="imgNequi" onChange={changeFile3} placeholder="Imagen Nequi" />



                        </div>



                      </> : ''}




                      {statusBtnSend ?

                        loading ? <img src="https://i.gifer.com/ZKZg.gif" style={{ maxWidth: '60px' }} /> :
                          <button onClick={sendEmail} className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >Registrarse</button>


                        : <>
                          <div className="sm:col-span-2">
                         
                            <i>Ingresa el codigo de verificacion enviado al correo electronico indicado en este formulario para continuar el registro de datos.</i>
                      

                          </div>

                          <div className="sm:col-span-2">

                   
                            <input className="block w-full rounded-md border-0 p-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 bg-transparent placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type='text' placeholder='codigo' value={inputCod} onChange={(e) => {
                            setInputCod(e.target.value)
                          }} />
                          </div>


                          <div className="sm:col-span-2">

                            {loading ? <img src="https://i.gifer.com/ZKZg.gif" style={{ maxWidth: '60px' }} /> : <input type='submit' onClick={clickCodVerf} value={'Enviar'} className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" />}

                 
                   
                         
                          </div>


                          </>}

                      {error ? <b>{error}</b> : ''}


                    </div>
                  </div>


                </div>

                <div class="mt-6 flex items-center justify-between gap-x-6">
                  <p >
                    ¿Ya tienes una Cuenta?
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
