import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/router"
import { useRef, useState } from "react"


function forgotPass() {

  const router = useRouter();
  let [error, setError] = useState('');

  const codRamdon = useRef(Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000);

  const [camposInput, setCamposInput] = useState({
    email: '',
    cod: 0,
    newPass: '',
    statusCod: false,
    statusChangePass: false
  });


  const Change = ({ target: { name, value } }) => {
    setCamposInput({ ...camposInput, [name]: value })
  };

  const Recuperar = (e) => {

    e.preventDefault();

    if (camposInput.email == '') {

      setError('Error, Campo Vacio...')
      return

    }

    if (!camposInput.email.includes('@') || !camposInput.email.includes('.')) {
      setError('Error, Ingresa un Correo Valido')
      return
    };

    (async () => {
      const { data } = await axios.put('/api/Login', { correo: camposInput.email })

      if (data == '') {
        setError('Error, este usuario no se encuentra registrado en nuestra BD, por favor registrece.')

        return
      } else {
        (async () => {
          await axios.post(`http://localhost:4055/send/${camposInput.email}/${codRamdon.current}`)
          
          setCamposInput({ ...camposInput, statusCod: true })
        })();
        
      }
    })();

    setError('');

    return
  }

  const Enviar = (e) => {
    e.preventDefault();

    if (camposInput.cod == codRamdon.current) {
      console.log('siii');

      setCamposInput({ ...camposInput, statusChangePass: true, statusCod: false })
    } else {
      setError('Error, código incorrecto')
    }
  }


  const Cambiar = (e) => {
    e.preventDefault();
    // hacer la consulta para actualizar la pass

    router.push('/')
  }



  return (
    <div>
      <h1>Recuperar Tu Contraseña</h1>
      <p>Por favor introduce el correo electrónico que usabas para iniciar sesión.</p>
      {camposInput.statusChangePass || camposInput.statusCod ? <input name="email" disabled value={camposInput.email} onChange={Change} type="email" placeholder="pedrito123@gmail.com..." /> : <input name="email" value={camposInput.email} onChange={Change} type="email" placeholder="pedrito123@gmail.com..." />} <br />
      {camposInput.statusChangePass || camposInput.statusCod ? '' : <button onClick={Recuperar}>Recuperar</button>}


      {camposInput.statusCod ? <div>
        <i>acabamos de enviar un codigo de verificación al correo indicado, por favor ingresalo:</i><br />
        <input name="cod" value={camposInput.cod} onChange={Change} type="number" placeholder="1234" /> <br />
        <button onClick={Enviar}>Enviar</button>

      </div> : ''}

      {camposInput.statusChangePass ? <div>
        <h3>Excelente, hemos confirmado que eres tu</h3>
        <p>Por favor, ingresa una nueva contraseña: <br />
          <input name="newPass" value={camposInput.newPass} onChange={Change} type="text" placeholder="$Ar12Cad12$" /> <br />
          <button onClick={Cambiar}>Cambiar</button>
        </p>
      </div> : ''}
      {error != '' ? <b>{error}</b> : ''}
      {error == 'Error, este usuario no se encuentra registrado en nuestra BD, por favor registrece.' ? <Link href='/Registro_Usuarios'>Registrece</Link> : ''}
    </div>
  )
}

export default forgotPass