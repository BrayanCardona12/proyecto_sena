import Head from "next/head"

function rolV() {
    return (
        <>


            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Productos</title>

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />
            </Head>

            <style jsx>
                {
                    `

.grid_contenido {
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
    width: 100%;
}
.card_contenido {
    width: 28rem;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    border: 1px solid #e0e0e0;
    border-radius: 20px;
}
.card_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
}
.card_header a .fa-pen-to-square {
    font-size: 2.2rem;
    color: #45a049;
    padding: .7rem;
    border-radius: 50%;
    
}
.card_header a .bx-trash {
    font-size: 2.3rem;
    color: #a72525;
    padding: 1rem;
    border-radius: 50%;
    
}
.card_header a .fa-pen-to-square:hover {
    color: #59d25f;
}
.card_header a .bx-trash:hover {
    color: #ff0000;
}

.card_image img {
    width: 150px;
    height: 150px;
    margin: 0 auto;
    display: block;
}
.producto_detalle {
    padding: 1rem;
    text-align: center;
}

.producto_marca {
    font-size: 1.3rem;
    color: #b5b5b5;
}
.producto_category {
    color: #000000;
    font-weight: 500;
}
.producto_title {
    margin: .5rem 0;
    color: #222f3e;
    font-size: 2rem;
}

.producto_desc {
    color: #777777;
}

.producto_cantidad {
    color: #222f3e;
    font-size: 1.6rem;
    font-weight: 700;
    margin: 1rem 0;
}

.producto_precio {
    font-size: 2.6rem;
    font-weight: 600;
    color: #e74c3c;
}

@media (max-width: 768px) {
    .card_contenido {
        margin: 0 auto;
        display: block;
    }
}

    
    `
                }
            </style>

            <main className="card_product">
                <h1 className="form_title">Productos</h1>

                <div className="grid_contenido">
                    <div className="card_contenido">
                        <div className="card_header">
                            <a href="#">
                                <i className="fa-solid fa-pen-to-square"></i>
                            </a>
                            <a href="#">
                                <i className='bx bx-trash'></i>
                            </a>
                        </div>
                        <div className="card_image">
                            <img src="img/colonia_01.jpg" alt="producto" />
                        </div>
                        <div className="producto_detalle">
                            <p className="producto_marca">Yanbal</p>
                            <span className="producto_category">Colonia</span>
                            <h4 className="producto_title">JAQUE</h4>
                            <p className="producto_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic suscipit
                                laudantium ipsam.</p>
                            <p className="producto_cantidad">Cantidad: 6</p>
                            <p className="producto_precio">$ 60.000</p>
                        </div>
                    </div>


                </div>

            </main>
        </>
    )
}

export default rolV