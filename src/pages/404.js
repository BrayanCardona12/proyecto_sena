import Link from 'next/link'
import React from 'react'

function StatusCode404() {
  return (
   <>
    <h1>¡¡¡¡Terrible!!!</h1>
    <b>Página no encontrada</b><br/>
    <Link href={'/'}>Regresar al Home</Link>
   </>
  )
}

export default StatusCode404