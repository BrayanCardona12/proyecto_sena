import LogCloseSesion from 'log/logCloseSesion'
import Head from 'next/head'
import { useState } from 'react'

function ScreenError() {

    let { closeSesion } = LogCloseSesion()
    let [load, setLoad] = useState(true)

    setTimeout(() => setLoad(false), 4500)

    return (

        <>

            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Error en el Servidor</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
            </Head>
            <style jsx>
                {`
main {
font-family: Arial, sans-serif;
margin: 0;
padding: 0;
height: 100vh;
background-color: #f8f9fa;
display: flex;
justify-content: center;
align-items: center;
}

.error-container {
text-align: center;
background-color: #fff;
padding: 30px;
border-radius: 8px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.error-icon {
color: #ff6347;
font-size: 48px;
margin-bottom: 20px;
}

h1 {
color: #333;
margin-bottom: 20px;
}

p {
color: #666;
margin-bottom: 20px;
}

.back-button {
background-color: #458945;
color: #fff;
padding: 10px 20px;
border: none;
border-radius: 5px;
text-decoration: none;
cursor: pointer;
transition: background-color 0.3s;
}

.back-button:hover {
background-color: #51a951;
}
`}
            </style>

            {
                load ?
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column' ,minHeight: '100vh' }}>
                      <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid"
                    display="block"
                    width="24%"
                >
                    <rect x="15" y="30" width="10" height="40" fill="#a65c00">
                        <animate
                            attributeName="height"
                            values="50;10;50"
                            dur="1s"
                            repeatCount="indefinite"
                            begin="0.1"
                            keyTimes="0;0.5;1"
                            keySplines="0.2 0 0.8 1;0.2 0 0.8 1"
                            calcMode="spline"
                        ></animate>
                    </rect>
                    <rect x="40" y="30" width="10" height="40" fill="#ffb224">
                        <animate
                            attributeName="height"
                            values="50;10;50"
                            dur="1s"
                            repeatCount="indefinite"
                            begin="0.2"
                            keyTimes="0;0.5;1"
                            keySplines="0.2 0 0.8 1;0.2 0 0.8 1"
                            calcMode="spline"
                        ></animate>
                    </rect>
                    <rect x="65" y="30" width="10" height="40" fill="#ffe56c">
                        <animate
                            attributeName="height"
                            values="50;10;50"
                            dur="1s"
                            repeatCount="indefinite"
                            begin="0.3"
                            keyTimes="0;0.5;1"
                            keySplines="0.2 0 0.8 1;0.2 0 0.8 1"
                            calcMode="spline"
                        ></animate>
                    </rect>
                </svg>
                <h1 style={{fontSize:'1.4rem'}}>Cargando...</h1>
                </div>
                :

                    <main>
                        <div className="error-container">
                            <div className="error-icon"><i className="fas fa-exclamation-triangle"></i></div>
                            <h1>Error en el Servidor</h1>
                            <p>{"Ha habido un error en el servidor. Por favor, intente nuevamente en 30 minutos"}</p>
                            <p>o vuelva a la página principal para iniciar sesión nuevamente.</p>

                            <span onClick={() => {

                                closeSesion()
                                window.location.href = '/'
                            }} className="back-button">Volver a la página principal</span>
                        </div>
                    </main>
            }


        </>
    )
}

export default ScreenError