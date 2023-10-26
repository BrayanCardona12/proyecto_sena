import { useRouter } from "next/router"
import { useEffect, useState } from "react"

function LogSesionStatus(authValor) {
  const router = useRouter()
  const [sesionActive, setSesionActive] = useState(false)

  useEffect(() => {

    let user = localStorage.getItem('auth')
    if (user != authValor) {
      router.push('/')
      return
    }else {
      setSesionActive(true)
      return
    }

  }, [])



  return { sesionActive }
}

export default LogSesionStatus