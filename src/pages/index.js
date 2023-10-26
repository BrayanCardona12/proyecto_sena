import Head from 'next/head'
import BodyHome from 'components/BodyHome'
import LogSesionStatus from 'log/logSesionStatus'
import { useRouter } from 'next/router'


export default function Home() {
const router = useRouter()

  const {sesionActive:status1} = LogSesionStatus('trueC')
  const {sesionActive:status2} = LogSesionStatus('trueV')

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
      <title>SGVC | Proyecto SENA</title>
        <meta name="description" content="Sistema para la Gestión de Ventas por Catalogos." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
            integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
            crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
     <main>
      
      <BodyHome/>

     </main>
    </>
  )
}
