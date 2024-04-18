import logformActInsrt from "log/logformActInsrt"
import Head from "next/head"

import { ToastContainer, toast } from "react-toast"
import NavBarVendedor from "./NavBarVendedor"
import LogCloseSesion from "log/logCloseSesion"




function FormActInsrt() {

    let { Submit, Change, producto, inputMarca, setInputMarca, changeMarca, setFileImg, router, setIm, im } = logformActInsrt()

    let { closeSesion } = LogCloseSesion()

    return (
        <>
            <Head>

                <link rel="stylesheet" href="/style/estilosNavBarHome.css" />
                <title>Formulario | Insertar Producto</title>
            </Head>



            <NavBarVendedor closeSesion={closeSesion} pedidos={true} />



            <section className='section_Pagin'>

                <h1 className=' text-center font-medium text-2xl'>{router.query.id ? 'Actualiza Tu Producto' : 'Inserta tu Producto'}</h1>
                <div className='bg_formAdd my-5'>
                  
                    <form onSubmit={Submit} className='contenedor px-11 py-2'>
                        <div className="space-y-3">
                        <ToastContainer delay={4000} position="bottom-center" />
                            <div className="col-span-full border-b border-gray-900/10 pb-5">
                                <label htmlFor="photo" className="block text-xl font-medium leading-6 text-gray-900">Foto Producto</label>
                                <div className="mt-2 flex items-center gap-x-3">
                                    <img src={`${im}`} className=' rounded-full w-20 h-20' />
                                    <input type="file" accept="image/*" onChange={(e) => {
                                        if (e.target.files[0]) {
                                            setFileImg(e.target.files[0])
                                            let reader = new FileReader()
                                            reader.onload = (e) => {

                                                setIm(e.target.result)
                                            }

                                            reader.readAsDataURL(e.target.files[0])


                                        }

                                    }} className=' w-5/12 file:bg-gradient-to-b file:from-blue-500 file:to-blue-600 file:px-6 file:py-3 file:m-5 file:border-none file:rounded-full file:text-white file:cursor-pointer file:shadow-lg file:shadow-blue-600/50' />
                                </div>
                            </div>


                            <div className="border-b border-gray-900/10 pb-12">
                                <h2 className="text-base font-semibold leading-7 text-gray-900"><span className='text-red-600 text-lg'>*</span> Ingrese Los Datos del Producto</h2>


                                <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-2">
                                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Nombre Producto</label>
                                        <div className="mt-2">
                                            <input type="text" onChange={Change} name="nombre" value={producto.nombre} id="first-name" autoComplete="given-name" minLength={1} maxLength={49} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">Categoría</label>
                                        <div className="mt-2">
                                            <select onChange={Change} value={producto.categoria} name='categoria' id="category" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6">
                                                <option disabled>-- Seleccione la Categoría</option>
                                                <option value="Perfume">Perfume</option>
                                                <option value="Colonias">Colonias</option>
                                                <option value="Joyeria">Joyeria</option>
                                                <option value="Maquillaje">Maquillaje</option>
                                                <option value="Cuidado Personal">Cuidado Personal</option>
                                                <option value="Labial">Labial</option>
                                                <option value="Desodorante">Desodorante</option>
                                                <option value="Delineador">Delineador</option>
                                                <option value="Protección Solar">Protección Solar</option>
                                                <option value="Tratamiento Facial">Tratamiento Facial</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">Marca</label>

                                        <div className="mt-2">
                                            
                                        <input minLength={2} maxLength={29} name='marca' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={producto.marca} onChange={Change} />
                                        </div>

                                    </div>

                                    <div className="sm:col-span-6">
                                        <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">Descripción</label>
                                        <div className="mt-2">
                                            <textarea minLength={10} maxLength={400} value={producto.descripcion} onChange={Change} name="descripcion" id="message" rows="4" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Escribe aquí..."></textarea>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="cantidad" className="block text-sm font-medium leading-6 text-gray-900">Cantidad</label>
                                        <div className="mt-2">
                                            <input type="number" max={500} min={1} onChange={Change} name="cantidad" value={producto.cantidad} id="cantidad" autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="precio" className="block text-sm font-medium leading-6 text-gray-900">Precio</label>
                                        <div className="mt-2">
                                            <input type="number" max={999999} min={1} value={producto.precio} onChange={Change} name="precio" id="precio" autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                         
                        </div>

                        <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button onClick={router.back} style={{ color: 'white', fontSize: '16px' }} className="bg-orange-500 hover:bg-orange-700 text-white rounded m-4 p-2">Regresar</button>
                               
                            <button type="submit" className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Insertar</button>
                        </div>
                    </form>
                </div>
            </section>




        </>
    )
}

export default FormActInsrt