import logRegister from "log/logRegister"
import Head from "next/head"
import { useState } from "react"
import { ToastContainer } from "react-toast"
import Link from 'next/link';

export default function RegistroUsuarios() {

  let { changeInput, datosInput, error, loading, statusBtnSend
    , inputCod, setInputCod, sendEmail, clickCodVerf, changeFile1, changeFile2,
    changeFile3, im } = logRegister()



  return (
    <>
      <Head>

        <link rel="stylesheet" href="/style/registro.css" />
        <title>Formulario | Insertar Producto</title>
      </Head>


      {/* <main className='cont-form-register'>
        <ToastContainer delay={3000} position='top-right' />

    
          <form className="form-register">
    
                <h1>Registro de Usuarios</h1>
             
                <img style={{ maxWidth: '150px', borderRadius: '10px', margin: 'auto', display: 'block' }} src={`${im}`} />
                               
            <input onChange={changeFile1} placeholder="Imagen..." type="file" />
            <input onChange={changeInput} value={datosInput.nombre} name="nombre" placeholder="Nombre" type="text" />
            <input onChange={changeInput} value={datosInput.apellido} name="apellido" placeholder="Apellido" type="text" />

            <select onChange={changeInput} value={datosInput.tipo} name='tipoDoc' id="tipoDoc">
              <option value="Cédula de Ciudadania">Cedula de Ciudadania</option>
              <option value="Cédula Extranjera">Cédula Extranjera</option>
              <option value="Pasaporte">Pasaporte</option>
              <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
            </select>

            <input name="numDoc" type="text" onChange={changeInput} placeholder="Numero de Documento" value={datosInput.numDoc} />




            <div style={{ width: '100%' }}>
              <input style={{ width: '20%' }} onChange={changeInput} name="codInt" placeholder="Codigo Internacional" value={datosInput.codInt} autoComplete="postal-code" type="number" />

              <input style={{ width: '65%' }} onChange={changeInput} value={datosInput.telefono} name="telefono" placeholder="Teléfono" autoComplete="postal-code" type="number" />

            </div>

            <input onChange={changeInput} value={datosInput.edad} name="edad" placeholder="Edad" type="number" />

            <select onChange={changeInput} value={datosInput.pais} name="pais" >
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

            <input onChange={changeInput} value={datosInput.ciudad} name="ciudad" placeholder="Ciudad" type="text" />
            <input onChange={changeInput} value={datosInput.direccion} name="direccion" placeholder="Dirección" type="text" />

            <select onChange={changeInput} value={datosInput.rol} name='rol' id="tipo">
              <option value="1">Cliente</option>
              <option value="2">Vendedor</option>
            </select>

            {datosInput.rol == '2' ? <>
              <i>Como quieres ser vendendor, es necesario que adjuntes al </i>
              <i>menos dos QR (Daviplata o Nequi) para que te puedan depositar:</i>
              <input name="imgDavi" onChange={changeFile2} type="file" placeholder="Imagen Davi" />
              <input name="imgNequi" onChange={changeFile3} type="file" placeholder="Imagen Nequi" />
            </> : ''}


            {statusBtnSend ? <input onChange={changeInput} value={datosInput.correo} name="correo" placeholder="Correo" type="email" /> : <input onChange={changeInput} value={datosInput.correo} disabled name="correo" placeholder="Correo" type="email" />}
            <input onChange={changeInput} value={datosInput.contrasena} name="contrasena" placeholder="Contraseña" type="password" />
            {error ? <b>{error}</b> : ''}

            {statusBtnSend ?

              loading ? <img src="https://i.gifer.com/ZKZg.gif" style={{ maxWidth: '60px' }} /> :
                <button style={{ backgroundColor: 'green' }} onClick={sendEmail} className="btn-send-register">Enviarsi</button>


              : <>
                <i>Ingresa el codigo de verificacion enviado al correo electronico indicado en este formulario para continuar con la actualización de datos</i>
                <input type='text' placeholder='codigo' value={inputCod} onChange={(e) => {
                  setInputCod(e.target.value)
                }} />
                {loading ? <img src="https://i.gifer.com/ZKZg.gif" style={{ maxWidth: '60px' }} /> : <input type='submit' onClick={clickCodVerf} value={'dd'} />}

              </>}
          </form>
   


      </main > */}



      <div className='bg_signUp'>

        <section>
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
                          <select id="documento" onChange={changeInput} value={datosInput.rol} name='rol' autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5  ring-1 ring-inset text-gray-300 ring-gray-300 sm:text-sm sm:leading-6 bg-transparent">
                            <option disabled className='placeholder:text-black'>-- Elige el Rol</option>
                            <option value="1">Cliente</option>
                            <option value="2">Vendedor</option>
                          </select>
                        </div>
                      </div>

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
                        <label for="apellido" className="block text-sm font-medium leading-6">Tipo Documento</label>
                        <div className="mt-2">
                          <select onChange={changeInput} value={datosInput.tipo} name='tipoDoc' id="tipoDoc" className="block w-full rounded-md border-0 py-1.5  ring-1 ring-inset text-gray-300 ring-gray-300 sm:text-sm sm:leading-6 bg-transparent">
                            <option value="Cédula de Ciudadania">Cedula de Ciudadania</option>
                            <option value="Cédula Extranjera">Cédula Extranjera</option>
                            <option value="Pasaporte">Pasaporte</option>
                            <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                          </select>
                        </div>


                      </div>

                      <div className="sm:col-span-2">
                        <label for="apellido" className="block text-sm font-medium leading-6">Número Documento</label>
                        <div className="mt-2">
                          <input name="numDoc" type="text" onChange={changeInput} placeholder="Numero de Documento" value={datosInput.numDoc} className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset bg-transparent ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                      </div>


                      <div className="sm:col-span-2">
                        <label for="codInt" className="block text-sm font-medium leading-6">Código Internacional</label>
                        <div className="mt-2">
                          <input className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 bg-transparent placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={changeInput} name="codInt" placeholder="Codigo Internacional" value={datosInput.codInt} autoComplete="postal-code" type="number" />

                        </div>
                      </div>


                      <div className="sm:col-span-2">
                        <label for="telefono" class="block text-sm font-medium leading-6">Teléfono</label>
                        <div className="mt-2">


                          <input className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 bg-transparent placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={changeInput} value={datosInput.telefono} name="telefono" placeholder="Teléfono" autoComplete="postal-code" type="number" />

                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label for="edad" className="block text-sm font-medium leading-6">Edad</label>
                        <div className="mt-2">
                          <input onChange={changeInput} value={datosInput.edad} name="edad" placeholder="Edad" type="number" className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white bg-transparent focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label for="pais" className="block text-sm font-medium leading-6">País</label>
                        <div className="mt-2">
                          <select id="pais" onChange={changeInput} value={datosInput.pais} name="pais" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 bg-transparent focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6">
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
                          <input onChange={changeInput} value={datosInput.ciudad} name="ciudad" className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white bg-transparent focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Ciudad" type="text" />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label for="direccion" className="block text-sm font-medium leading-6">Dirección</label>
                        <div className="mt-2">
                          <input onChange={changeInput} className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white bg-transparent focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={datosInput.direccion} name="direccion" placeholder="Dirección" type="text" />
                        </div>
                      </div>



                      <div class="sm:col-span-2">
                        <label for="correo" class="block text-sm font-medium leading-6">Correo</label>
                        <div class="mt-2">
                          <input className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white bg-transparent focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={changeInput} value={datosInput.correo} name="correo" placeholder="Correo" type="email" />

                        </div>
                      </div>

                      <div class="sm:col-span-2">
                        <label for="correo" class="block text-sm font-medium leading-6">Contraseña:</label>
                        <div class="mt-2">
                          <input className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white bg-transparent focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={changeInput} value={datosInput.contrasena} name="contrasena" placeholder="Contraseña" type="password" />

                        </div>
                      </div>













                      {datosInput.rol == '2' ? <>

                        <div className="sm:col-span-2">
                          <label for="correo" className="block text-sm font-medium leading-6">Como quieres ser vendendor, es necesario que adjuntes al menos dos QR (Daviplata o Nequi) para que te puedan depositar:</label>
                        </div>



                      </> : ''}

                      {datosInput.rol == '2' ? <>

                        <div className="sm:col-span-2">
                          <label for="correo" className="block text-sm font-medium leading-6">Daviplata:</label>


                          <input accept="image/*" type="file" name="imgDavi" onChange={changeFile2} placeholder="Imagen Davi" />



                        </div>



                      </> : ''}



                      {datosInput.rol == '2' ? <>

                        <div className="sm:col-span-2">
                          <label for="correo" className="block text-sm font-medium leading-6">Nequi:</label>
                          <input accept="image/*" type="file" name="imgNequi" onChange={changeFile3} placeholder="Imagen Nequi" />



                        </div>



                      </> : ''}




                      {statusBtnSend ?

                        loading ? <img src="https://i.gifer.com/ZKZg.gif" style={{ maxWidth: '60px' }} /> :
                          <button onClick={sendEmail} className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >Registrarse</button>


                        : <>
                          <div className="sm:col-span-2">
                         
                            <i>Ingresa el codigo de verificacion enviado al correo electronico indicado en este formulario para continuar con la actualización de datos</i>
                      

                          </div>

                          <div className="sm:col-span-2">

                   
                            <input className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 bg-transparent placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type='text' placeholder='codigo' value={inputCod} onChange={(e) => {
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
