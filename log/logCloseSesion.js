import { useRouter } from "next/router"

function LogCloseSesion() {
  const router = useRouter()

  function closeSesion() {
    localStorage.removeItem('auth')
    localStorage.removeItem('inf')
    router.push('/')
  }

  return { closeSesion }

}

export default LogCloseSesion