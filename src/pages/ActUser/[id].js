import axios from 'axios'
import { uploadFile } from 'firebaseConfig/config'
import Head from 'next/head'
import Link from 'next/link'



import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toast'

function actUser(props) {
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

    const [inputCod, setInputCod] = useState('')

    const codRamdon = useRef(Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000)

    const [error, setError] = useState('')
    const [statusBtnSend, setStatusBtnSend] = useState(true)

    useEffect(() => {
        setDatosInput({ ...props.data[0] })
        correo.current = props.data[0].correo
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
                    await axios.post(`http://localhost:4055/send/${datosInput.correo}/${codRamdon.current}`)
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
                        await axios.post(`http://localhost:4055/send/${datosInput.correo}/${codRamdon.current}`)
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

                    if (file == null) {
                        toast.warn('⌛ Cargando...')
                        await axios.put(`/api/RegisterUsers/`, { ...datosInput, id: parseInt(router.query.id) })
                        router.push('/')

                    } else {
                        toast.warn('⌛ Cargando...')

                        let url = await uploadFile(file)


                        await axios.put(`/api/RegisterUsers/`, { ...datosInput, id: parseInt(router.query.id), imagen: url })
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
            <style jsx>
                {`
   


                    input {
                        width: 100%;
                    }

                  .cont-form {
                    width: 50%;
                margin:auto;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    justify-content: center;
                  }



                  
                `}
            </style>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />
            </Head>
            <Link href={datosInput.rol == '2' ? '/RolVendedor' : '/RolCliente'}>
            regresar
            
            </Link>
            <form style={{ width: '100%', maxWidth: '920px', margin: 'auto' }}>
                <ToastContainer delay={6000} position='top-right' />

                <h1 className='text-center'>Actualizar Información Personal</h1>

                <img style={{ width: '20%', borderRadius: '10px', display: 'block', margin: 'auto' }} src={datosInput.imagen} />
                <label>Imagen</label>
                <input className='form-control' onChange={(e) => { setFile(e.target.files[0]) }} name="imagen" placeholder="Imagen..." type="file" />
                <label>Nombre:</label>
                <input className='form-control' onChange={changeInput} value={datosInput.nombre} name="nombre" placeholder="Nombres" type="text" />
                <label>Apellido:</label>
                <input className='form-control' onChange={changeInput} value={datosInput.apellido} name="apellido" placeholder="Apellidos" type="text" />
                <label>Tipo de Documento:</label>
                <select className='form-control' onChange={changeInput} value={datosInput.tipo} name='tipoDoc' id="tipoDoc">
                    <option value="Cédula de Ciudadania">Cedula de Ciudadania</option>
                    <option value="Cédula Extranjera">Cédula Extranjera</option>
                    <option value="Pasaporte">Pasaporte</option>
                    <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                </select>
                <label>No de Documento:</label>
                <input className='form-control' name="numDoc" type="text" onChange={changeInput} placeholder="Numero de Documento" value={datosInput.numDoc} />






                <div style={{ width: '100%' }}>
                    <label>Código Internacional:</label>
                    <input className='form-control' min={1} max={400} style={{ width: '20%' }} onChange={changeInput} name="codInt" placeholder="Codigo Internacional" value={datosInput.codInt} autoComplete="postal-code" type="number" />
                    <label>Telefono:</label>
                    <input className='form-control' style={{ width: '65%' }} onChange={changeInput} value={datosInput.telefono} name="telefono" placeholder="Teléfono" autoComplete="postal-code" type="number" />

                </div>
                <label>Edad:</label>
                <input className='form-control' onChange={changeInput} value={datosInput.edad} name="edad" placeholder="Edad" type="number" />
                <label>País:</label>
                <select className='form-control' onChange={changeInput} value={datosInput.pais} name="pais" >
                    <option value="">Country</option>
                    <option value="AF">Afghanistan</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                    <option value="AS">American Samoa</option>
                    <option value="AD">Andorra</option>
                    <option value="AO">Angola</option>
                    <option value="AI">Anguilla</option>
                    <option value="AR">Argentina</option>
                    <option value="AM">Armenia</option>
                    <option value="AW">Aruba</option>
                    <option value="AU">Australia</option>
                    <option value="AT">Austria</option>
                    <option value="AZ">Azerbaijan</option>
                    <option value="BS">Bahamas</option>
                    <option value="BH">Bahrain</option>
                    <option value="BD">Bangladesh</option>
                    <option value="BB">Barbados</option>
                    <option value="BY">Belarus</option>
                    <option value="BE">Belgium</option>
                    <option value="BZ">Belize</option>
                    <option value="BJ">Benin</option>
                    <option value="BM">Bermuda</option>
                    <option value="BT">Bhutan</option>
                    <option value="BO">Bolivia</option>
                    <option value="BA">Bosnia and Herzegowina</option>
                    <option value="BW">Botswana</option>
                    <option value="BV">Bouvet Island</option>
                    <option value="BR">Brazil</option>
                    <option value="IO">British Indian Ocean Territory</option>
                    <option value="BN">Brunei Darussalam</option>
                    <option value="BG">Bulgaria</option>
                    <option value="BF">Burkina Faso</option>
                    <option value="BI">Burundi</option>
                    <option value="KH">Cambodia</option>
                    <option value="CM">Cameroon</option>
                    <option value="CA">Canada</option>
                    <option value="CV">Cape Verde</option>
                    <option value="KY">Cayman Islands</option>
                    <option value="CF">Central African Republic</option>
                    <option value="TD">Chad</option>
                    <option value="CL">Chile</option>
                    <option value="CN">China</option>
                    <option value="CX">Christmas Island</option>
                    <option value="CC">Cocos (Keeling) Islands</option>
                    <option value="CO">Colombia</option>
                    <option value="KM">Comoros</option>
                    <option value="CG">Congo</option>
                    <option value="CD">Congo, the Democratic Republic of the</option>
                    <option value="CK">Cook Islands</option>
                    <option value="CR">Costa Rica</option>
                    <option value="CI">Cote d'Ivoire</option>
                    <option value="HR">Croatia (Hrvatska)</option>
                    <option value="CU">Cuba</option>
                    <option value="CY">Cyprus</option>
                    <option value="CZ">Czech Republic</option>
                    <option value="DK">Denmark</option>
                    <option value="DJ">Djibouti</option>
                    <option value="DM">Dominica</option>
                    <option value="DO">Dominican Republic</option>
                    <option value="EC">Ecuador</option>
                    <option value="EG">Egypt</option>
                    <option value="SV">El Salvador</option>
                    <option value="GQ">Equatorial Guinea</option>
                    <option value="ER">Eritrea</option>
                    <option value="EE">Estonia</option>
                    <option value="ET">Ethiopia</option>
                    <option value="FK">Falkland Islands (Malvinas)</option>
                    <option value="FO">Faroe Islands</option>
                    <option value="FJ">Fiji</option>
                    <option value="FI">Finland</option>
                    <option value="FR">France</option>
                    <option value="GF">French Guiana</option>
                    <option value="PF">French Polynesia</option>
                    <option value="TF">French Southern Territories</option>
                    <option value="GA">Gabon</option>
                    <option value="GM">Gambia</option>
                    <option value="GE">Georgia</option>
                    <option value="DE">Germany</option>
                    <option value="GH">Ghana</option>
                    <option value="GI">Gibraltar</option>
                    <option value="GR">Greece</option>
                    <option value="GL">Greenland</option>
                    <option value="GD">Grenada</option>
                    <option value="GP">Guadeloupe</option>
                    <option value="GU">Guam</option>
                    <option value="GT">Guatemala</option>
                    <option value="GN">Guinea</option>
                    <option value="GW">Guinea-Bissau</option>
                    <option value="GY">Guyana</option>
                    <option value="HT">Haiti</option>
                    <option value="HM">Heard and Mc Donald Islands</option>
                    <option value="VA">Holy See (Vatican City State)</option>
                    <option value="HN">Honduras</option>
                    <option value="HK">Hong Kong</option>
                    <option value="HU">Hungary</option>
                    <option value="IS">Iceland</option>
                    <option value="IN">India</option>
                    <option value="ID">Indonesia</option>
                    <option value="IR">Iran (Islamic Republic of)</option>
                    <option value="IQ">Iraq</option>
                    <option value="IE">Ireland</option>
                    <option value="IL">Israel</option>
                    <option value="IT">Italy</option>
                    <option value="JM">Jamaica</option>
                    <option value="JP">Japan</option>
                    <option value="JO">Jordan</option>
                    <option value="KZ">Kazakhstan</option>
                    <option value="KE">Kenya</option>
                    <option value="KI">Kiribati</option>
                    <option value="KP">Korea, Democratic People's Republic of</option>
                    <option value="KR">Korea, Republic of</option>
                    <option value="KW">Kuwait</option>
                    <option value="KG">Kyrgyzstan</option>
                    <option value="LA">Lao People's Democratic Republic</option>
                    <option value="LV">Latvia</option>
                    <option value="LB">Lebanon</option>
                    <option value="LS">Lesotho</option>
                    <option value="LR">Liberia</option>
                    <option value="LY">Libyan Arab Jamahiriya</option>
                    <option value="LI">Liechtenstein</option>
                    <option value="LT">Lithuania</option>
                    <option value="LU">Luxembourg</option>
                    <option value="MO">Macau</option>
                    <option value="MK">Macedonia, The Former Yugoslav Republic of</option>
                    <option value="MG">Madagascar</option>
                    <option value="MW">Malawi</option>
                    <option value="MY">Malaysia</option>
                    <option value="MV">Maldives</option>
                    <option value="ML">Mali</option>
                    <option value="MT">Malta</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MQ">Martinique</option>
                    <option value="MR">Mauritania</option>
                    <option value="MU">Mauritius</option>
                    <option value="YT">Mayotte</option>
                    <option value="MX">Mexico</option>
                    <option value="FM">Micronesia, Federated States of</option>
                    <option value="MD">Moldova, Republic of</option>
                    <option value="MC">Monaco</option>
                    <option value="MN">Mongolia</option>
                    <option value="MS">Montserrat</option>
                    <option value="MA">Morocco</option>
                    <option value="MZ">Mozambique</option>
                    <option value="MM">Myanmar</option>
                    <option value="NA">Namibia</option>
                    <option value="NR">Nauru</option>
                    <option value="NP">Nepal</option>
                    <option value="NL">Netherlands</option>
                    <option value="AN">Netherlands Antilles</option>
                    <option value="NC">New Caledonia</option>
                    <option value="NZ">New Zealand</option>
                    <option value="NI">Nicaragua</option>
                    <option value="NE">Niger</option>
                    <option value="NG">Nigeria</option>
                    <option value="NU">Niue</option>
                    <option value="NF">Norfolk Island</option>
                    <option value="MP">Northern Mariana Islands</option>
                    <option value="NO">Norway</option>
                    <option value="OM">Oman</option>
                    <option value="PK">Pakistan</option>
                    <option value="PW">Palau</option>
                    <option value="PA">Panama</option>
                    <option value="PG">Papua New Guinea</option>
                    <option value="PY">Paraguay</option>
                    <option value="PE">Peru</option>
                    <option value="PH">Philippines</option>
                    <option value="PN">Pitcairn</option>
                    <option value="PL">Poland</option>
                    <option value="PT">Portugal</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="QA">Qatar</option>
                    <option value="RE">Reunion</option>
                    <option value="RO">Romania</option>
                    <option value="RU">Russian Federation</option>
                    <option value="RW">Rwanda</option>
                    <option value="KN">Saint Kitts and Nevis</option>
                    <option value="LC">Saint LUCIA</option>
                    <option value="VC">Saint Vincent and the Grenadines</option>
                    <option value="WS">Samoa</option>
                    <option value="SM">San Marino</option>
                    <option value="ST">Sao Tome and Principe</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="SN">Senegal</option>
                    <option value="SC">Seychelles</option>
                    <option value="SL">Sierra Leone</option>
                    <option value="SG">Singapore</option>
                    <option value="SK">Slovakia (Slovak Republic)</option>
                    <option value="SI">Slovenia</option>
                    <option value="SB">Solomon Islands</option>
                    <option value="SO">Somalia</option>
                    <option value="ZA">South Africa</option>
                    <option value="GS">South Georgia and the South Sandwich Islands</option>
                    <option value="ES">Spain</option>
                    <option value="LK">Sri Lanka</option>
                    <option value="SH">St. Helena</option>
                    <option value="PM">St. Pierre and Miquelon</option>
                    <option value="SD">Sudan</option>
                    <option value="SR">Suriname</option>
                    <option value="SJ">Svalbard and Jan Mayen Islands</option>
                    <option value="SZ">Swaziland</option>
                    <option value="SE">Sweden</option>
                    <option value="CH">Switzerland</option>
                    <option value="SY">Syrian Arab Republic</option>
                    <option value="TW">Taiwan, Province of China</option>
                    <option value="TJ">Tajikistan</option>
                    <option value="TZ">Tanzania, United Republic of</option>
                    <option value="TH">Thailand</option>
                    <option value="TG">Togo</option>
                    <option value="TK">Tokelau</option>
                    <option value="TO">Tonga</option>
                    <option value="TT">Trinidad and Tobago</option>
                    <option value="TN">Tunisia</option>
                    <option value="TR">Turkey</option>
                    <option value="TM">Turkmenistan</option>
                    <option value="TC">Turks and Caicos Islands</option>
                    <option value="TV">Tuvalu</option>
                    <option value="UG">Uganda</option>
                    <option value="UA">Ukraine</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="GB">United Kingdom</option>
                    <option value="US">United States</option>
                    <option value="UM">United States Minor Outlying Islands</option>
                    <option value="UY">Uruguay</option>
                    <option value="UZ">Uzbekistan</option>
                    <option value="VU">Vanuatu</option>
                    <option value="VE">Venezuela</option>
                    <option value="VN">Viet Nam</option>
                    <option value="VG">Virgin Islands</option>
                    <option value="VI">Virgin Islands</option>
                    <option value="WF">Wallis and Futuna Islands</option>
                    <option value="EH">Western Sahara</option>
                    <option value="YE">Yemen</option>
                    <option value="ZM">Zambia</option>
                    <option value="ZW">Zimbabwe</option>
                </select>
                <label>Ciudad:</label>
                <input className='form-control' onChange={changeInput} value={datosInput.ciudad} name="ciudad" placeholder="Ciudad" type="text" />
                <label>Dirección:</label>
                <input className='form-control' onChange={changeInput} value={datosInput.direccion} name="direccion" placeholder="Dirección" type="text" />

                {datosInput.rol == '2' ? <>
                    <i>Como eres vendendor, puedes modificar tus</i>
                    <i>medios de pago (Daviplata o Nequi):</i>
                    <img style={{ maxWidth: '100px' }} src={datosInput.imgDavi} />
                    <img style={{ maxWidth: '100px' }} src={datosInput.imgNequi} />
                    <input className='form-control' name="imgDavi" disabled onChange={changeInput} type="text" placeholder="Imagen Davi" value={datosInput.imgDavi} />
                    <input className='form-control' name="imgNequi" disabled onChange={changeInput} type="text" placeholder="Imagen Nequi" value={datosInput.imgNequi} />
                </> : ''}


                {statusBtnSend ? <> <label>Correo:</label> <input className='form-control' onChange={changeInput} value={datosInput.correo} name="correo" placeholder="Correo" type="email" /></> : <input onChange={changeInput} value={datosInput.correo} disabled name="correo" placeholder="Correo" type="email" />}
                <><label>Contraseña:</label></> <input className='form-control' onChange={changeInput} value={datosInput.contrasena} name="contrasena" placeholder="Contraseña" type="password" />
                {error ? <b>{error}</b> : ''}

                {statusBtnSend ? <button style={{ backgroundColor: 'green' }} onClick={sendEmail} className="btn-send-register">Enviar</button>
                    : <>
                        <i>Ingresa el codigo de verificacion enviado al correo electronico indicado en este formulario para continuar con la actualización de datos</i>
                        <input className='form-control' type='text' placeholder='codigo' value={inputCod} onChange={(e) => {
                            setInputCod(e.target.value)
                        }} />
                        <input type='submit' onClick={clickCodVerf} value={'dd'} />
                    </>}


            </form>
        </>
    )
}

actUser.getInitialProps = async (ctx) => {
    const dd = await axios.get(`http://localhost:3000/api/Login/?id=` + ctx.query.id)

    return {
        data: dd.data
    }
}

export default actUser