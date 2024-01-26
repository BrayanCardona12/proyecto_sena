import LogCloseSesion from 'log/logCloseSesion'
import Head from 'next/head'

function ScreenError() {

    let { closeSesion } = LogCloseSesion()

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
        </>
    )
}

export default ScreenError