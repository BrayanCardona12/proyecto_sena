import Link from 'next/link'
import React from 'react'

function StatusCode404() {

 
  return (
    <>
     <style jsx>
    {
      `
.body {
  font-family: Arial, sans-serif;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;
}

.error-container {
  text-align: center;
}

.error-code {
  font-size: 10em;
  color: #dc3545;
  margin: 0;
}

.error-message {
  font-size: 1.5em;
  margin: 10px 0;
}

.back-link {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2em;
}

.back-link:hover {
  text-decoration: underline;
}
`

    }
  </style>
      <div className='body'>
        <div className="error-container">
          <h1 className="error-code">404</h1>
          <p className="error-message">¡Ups! Parece que la página que estás buscando no existe.</p>
          <Link className="back-link" href={'/'}>Volver a la página de inicio</Link>
        </div>
      </div>


    </>
  )
}

export default StatusCode404