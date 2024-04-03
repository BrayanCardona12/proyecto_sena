import { IconPoints } from 'components/iconsLoading';
import { StyleFormLogin } from 'log/Styles';
import LogAuth from 'log/logAuth';
import LogSesionStatus from 'log/logSesionStatus';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toast';

export default function FormLogin() {

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };


    const router = useRouter()

    const { sesionActive: status1 } = LogSesionStatus('trueC')
    const { sesionActive: status2 } = LogSesionStatus('trueV')



    const { changeInput, submit, correo, contrasena, rol, error, loading, setloading } = LogAuth()

    if (status1) {
        router.push('/RolCliente')
        return
    }

    if (status2) {
        router.push('/RolVendedor')
        return
    }

    return (
        <>
            <Head>
                <title>SGVC | Login</title>
                <link rel="icon" href="/logo.png" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                    integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
                    crossorigin="anonymous" referrerpolicy="no-referrer" />

                <link rel="stylesheet" href="/style/estiloslogin.css"
                />

            </Head>




            <div className='bg_signUp'>
                <ToastContainer delay={8000} position='top-left' />
                <div className='center_contenido'>
                    <div className='container_login'>
                        <form onSubmit={submit}>
                            <h1 className='titulo'>Inicio de Sesión</h1>
                            <div className='input_box'>
                                <select name='rol' onChange={changeInput} value={rol} className='rol'>
                                    <option className='color_option' disabled>--Seleccione Su Rol--</option>
                                    <option value={'1'} className='color_option'>Cliente</option>
                                    <option value={'2'} className='color_option'>Vendedor</option>
                                </select>
                            </div>
                            <div className='input_box'>
                                <input onChange={changeInput} className='input_wh' type='text' name='correo' value={correo} placeholder='Nombre Usuario' />
                                <i className="fa-solid fa-user icono_login"></i>
                            </div>
                            <div className='input_box'>
                                <input name='contrasena' className='input_wh'
                                    type={passwordVisible ? 'text' : 'password'}
                                    value={contrasena}
                                    onChange={changeInput} placeholder='Contraseña' />
                                <button className='icono_login' type="button" onClick={togglePasswordVisibility}>
                                    {passwordVisible ? <i className="fa-regular fa-eye-slash"></i> : <i className="fa-regular fa-eye"></i>}
                                </button>
                            </div>

                            <div className='recordar_contra'>
                                <label className='box_pass'>

                                </label>
                                <Link className='link_pass' href='/forgotPass'>Olvidaste tu Contraseña</Link>
                            </div>

                            {error ? error : ''}

                            {loading ? <IconPoints colorF={"#E0592A"} colorL={"#FFFFFF"} style1={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#E0592A' }} style2={{ display: 'block', maxHeight: '40px' }} /> : <button type='submit' className='btn_signUp'>Iniciar Sesión</button>}




                            <div className='registro_link'>
                                <p>
                                    No tienes una Cuenta?
                                    <Link className='texto_info_link' href='/Registro_Usuarios'> Regístrate</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}



