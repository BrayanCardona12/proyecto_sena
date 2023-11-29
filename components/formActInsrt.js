import logformActInsrt from "log/logformActInsrt"

import { ToastContainer } from "react-toast"




function FormActInsrt() {

    let { Submit, Change, producto, inputMarca, setInputMarca, changeMarca, setFileImg, router, setIm, im } = logformActInsrt()


    // return (
    //     <div>

    //         <style jsx>
    //             {`
    //             .form-actInsert {
    //                 width: 50%;
    //                 display: flex;
    //                 flex-direction: column;
    //                 gap: 12px;
    //               }
    //             `}
    //         </style>

    //         <form className="form-actInsert" onSubmit={Submit}>
    //             <ToastContainer delay={4000} position="top-right" />
    //             <h1 className='text-center'>Form</h1>




    //             <label htmlFor="imagen" className='form-label' >Imagen:</label>
    //             <input className='form-control' onChange={(e) => {
    //                 setFileImg(e.target.files[0])
    //             }} type="file" name="imagen" />

    //             <label htmlFor="nombre" className='form-label'>Nombre:</label>
    //             <input className='form-control' type="text" onChange={Change} name="nombre" value={producto.nombre} />

    //             <label htmlFor="categoria" className='form-label'>Categoria:</label>

    //             <select onChange={Change} value={producto.categoria} name='categoria' className="form-control">
    //                 <option value="Perfume">Perfume</option>
    //                 <option value="Colonia">Colonia</option>
    //                 <option value="Joyeria">Joyeria</option>
    //                 <option value="Maquillaje">Maquillaje</option>
    //                 <option value="Cuidado de piel">Cuidado de piel</option>
    //                 <option value="Labial">Labial</option>
    //                 <option value="Desodorante">Desodorante</option>
    //                 <option value="Delineador">Delineador</option>
    //                 <option value="Protección Solar">Protección Solar</option>
    //                 <option value="Tratamiento Facial">Tratamiento Facial</option>
    //             </select>

    //             <details>
    //                 <summary>Marca: {producto.marca}</summary>
    //                 <span style={{ display: 'block' }} onClick={changeMarca}>Yanbal</span>
    //                 <span style={{ display: 'block' }} onClick={changeMarca}>Avon</span>
    //                 <span style={{ display: 'block' }} onClick={changeMarca}>Carmel</span>
    //                 <span style={{ display: 'block' }} onClick={changeMarca}>Esika</span>
    //                 <span style={{ display: 'block' }} onClick={changeMarca}>Cyzone</span>
    //                 <span style={{ display: 'block' }} onClick={() => { setInputMarca(true) }}>otro...</span>
    //             </details>

    //             {inputMarca ? <><input name='marca' value={producto.marca} onChange={Change} /> <span onClick={() => { setInputMarca(false) }}>✅</span></> : ''}

    //             <label className='form-label' htmlFor="descripcion">Descripcion:</label>
    //             <textarea className='form-control' value={producto.descripcion} onChange={Change} name="descripcion" rows="2" />


    //             <label htmlFor="cantidad" className='form-label'>Cantidad Disponible:</label>
    //             <input className='form-control' type="number" onChange={Change} name="cantidad" value={producto.cantidad} />


    //             <label htmlFor="precio" className='form-label' >Precio:</label>
    //             <input className='form-control' onChange={Change} type="number" value={producto.precio} name="precio" />




    //             <button className="btn btn-success  my-2 mx-auto d-block w-25">Guardar Producto</button>

    //         </form>
    //     </div>
    // )


    return (
        <>
            <style jsx>
                {`
            
    :root {
        --header-height: 5.6rem;
        --nav-width: 219px;
      
        --first-color: #f76307;
        --first-color-light: #F4F0FA;
        --title-color: #19181B;
        --text-color: #58555E;
        --text-color-light: #A5A1AA;
        --body-color: #F9F6FD;
        --container-color: #FFFFFF;
      
    
        --body-font: 'Poppins', sans-serif;
        --normal-font-size: 1.5rem;
        --small-font-size: 1.2rem;
        --smaller-font-size: 1.2rem;
      
      
        --font-medium: 500;
        --font-semi-bold: 600;
      
    
        --z-fixed: 100;
    }
    
    html {
        font-size: 62.5%;
        box-sizing: border-box;
        scroll-behavior: smooth;
        
    }
    *, *::before, *::after {
        box-sizing: inherit;
        font-family: 'Poppins', sans-serif;
    
    }
      
    body {
        margin: var(--header-height) 0 0 0;
        font-family: 'Poppins', sans-serif;
        font-size: var(--normal-font-size);
        background-color: var(--body-color);
        color: var(--text-color);
        width: 100%;
    }
    body::-webkit-scrollbar {
        width: 0;
    }
    h1,
    h2,
    h3 {
        margin: 0;
    }
    
    a {
        text-decoration: none;
    }
    
    p {
        margin: 0;
    }
    
    img {
        max-width: 100%;
        height: auto;
    }
    
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: var(--container-color);
        box-shadow: 0 1px 0 rgba(22, 8, 43, 0.1);
        padding: 0 1rem;
        z-index: var(--z-fixed);
    }
      
    .header_contenedor {
        display: flex;
        align-items: center;
        height: var(--header-height);
        justify-content: space-between;
    }
    
    .header_info {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    .header_info .icon_cart {
        position: relative;
    }
    .header_info .icon_cart span {
        display: flex;
        width: 2.5rem;
        height: 2.5rem;
        background-color: red;
        justify-content: center;
        align-items: center;
        color: #FFFFFF;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        right: -12px;
    }
    .icon_cart i {
        font-size: 3rem;
        cursor: pointer;
    }
    .header_datos--per span {
        color: #222f3e;
    }
    .header_cliente {
        text-align: right;
        color: #a5a5a5;
    }
    
    .header_img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
    }
      
    .header_logo {
        color: var(--title-color);
        font-weight: var(--font-medium);
        display: none;
    }
      
    .header_search {
        display: flex;
        padding: .40rem .75rem;
        background-color: var(--first-color-light);
        border-radius: .25rem;
    }
      
    .header_input {
        width: 100%;
        border: none;
        outline: none;
        background-color: var(--first-color-light);
    }
      
    .header_input::placeholder {
        font-family: var(--body-font);
        color: var(--text-color);
    }
      
    .header_icon, 
    .header_toggle {
        font-size: 1.2rem;
    }
      
    .header_toggle {
        color: var(--title-color);
        cursor: pointer;
    }
    
    /* NAVEGACION */
    .nav {
        position: fixed;
        top: 0;
        left: -100%;
        height: 100vh;
        padding: 1rem 1rem 3rem;
        background-color: var(--container-color);
        box-shadow: 1px 0 0 rgba(22, 8, 43, .1);
        z-index: var(--z-fixed);
        transition: .4s;
    }
    
    .nav_container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        overflow: auto;
        scrollbar-width: none; /* para mozilla*/
    }
    
    .nav_container::-webkit-scrollbar {
        display: none; /* para google y otros */
    }
    
    .nav_logo {
        font-weight: var(--font-semi-bold);
        margin-bottom: 2.5rem;
    }
    .nav_logo img {
        width: 50px;
        height: 50px;
    }
    .nav_list,
    .nav_items {
        display: grid;
    }
    
    .nav_list {
        row-gap: 2.5rem;
    }
    
    .nav_items {
        row-gap: 1.5rem;
    }
    
    .nav_subtitle {
        font-size: var(--normal-font-size);
        text-transform: uppercase;
        letter-spacing: .1rem;
        color: var(--text-color-light);
    }
    
    .nav_link {
        display: flex;
        align-items: center;
        color: var(--text-color);
    }
    
    .nav_link:hover {
        color: var(--first-color);
    }
    
    .nav_icon {
        font-size: 1.2rem;
        margin-right: .5rem;
    }
    
    .nav_name {
        font-size: var(--small-font-size);
        font-weight: var(--font-medium);
        white-space: nowrap;
    }
    
    .nav_logout {
        margin: 0 0 1rem;
    }
    
    /* dropdown */
    .nav_dropdown {
        overflow: hidden;
        max-height: 21px;
        transition: .4s ease-in-out;
    }
    
    .nav_dropdown-collapse {
        background-color: var(--first-color-light);
        border-radius: .25rem;
        margin-top: 1rem;
    }
    
    .nav_dropdown-content {
        display: grid;
        row-gap: .5rem;
        padding: .75rem 2.5rem .75rem 1.8rem;
    }
    
    .nav_dropdown-item {
        font-size: var(--smaller-font-size);
        font-weight: var(--font-medium);
        color: var(--text-color);
    }
    
    .nav_dropdown-item:hover {
        color: var(--first-color);
    }
    
    .nav_dropdown-icon {
        margin-left: auto;
        transition: .4s;
    }
    
    /* mostrar dropdown */
    .nav_dropdown:hover {
        max-height: 100rem;
    }
    
    .nav_dropdown:hover .nav_dropdown-icon {
        transform: rotate(180deg);
    }
    
    /*mostrar menu */
    .show-menu {
        left: 0;
    }
    
    /*active*/
    .active {
        color: var(--first-color);
    }
    
    /* MEDIA QUERIES */
    @media (max-width: 767px) {
        .header_datos {
            display: none;
        }
        .header_info {
            gap: 1rem;
        }
        .header_info .icon_cart span {
            width: 1.5rem;
            height: 1.5rem;
            color: #FFFFFF;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            right: -7px;
        }
        .icon_cart i {
            font-size: 2rem;
        }
    }
    @media (max-width: 320px) {
        .header_search {
            width: 70%;
        }
    }
    
    @media (min-width: 768px) {
        body {
            padding: 1rem 3rem 1rem 8rem;
        }
        .header {
            padding: 0 3rem 0 8rem;
        }
        .header_search {
            width: 300px;
            padding: .55rem .75rem;
        }
        .header_toggle {
            display: none;
        }
        .header_logo {
            display: block;
        }
        .header_info {
            order: 1;
        }
        .header_img {
            width: 40px;
            height: 40px;
        }
        .nav {
            left: 0;
            padding: 1.2rem 2.5rem 0;
            width: 68px; /* Reduced navbar */
        }
        .nav_items {
            row-gap: 1.7rem;
        }
        .nav_icon {
            font-size: 1.8rem;
        }
        
        /* Element opacity */
        .nav_logo-name, 
        .nav_name, 
        .nav_subtitle, 
        .nav_dropdown-icon {
            opacity: 0;
            transition: .3s;
        }
          
          
        /* Navbar expanded */
        .nav:hover {
            width: var(--nav-width);
        }
          
        /* Visible elements */
        .nav:hover .nav_logo-name {
            opacity: 1;
        }
        .nav:hover .nav_subtitle {
            opacity: 1;
        }
        .nav:hover .nav_name {
            opacity: 1;
        }
        .nav:hover .nav_dropdown-icon {
            opacity: 1;
        }
    }
    
    /* PRODUCTOS VENDEDOR */
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
    
    /*seccion formulario agregar  y actualizar */
    .form_title {
        text-align: center;
    }
    .formAdd_content {
        max-width: 1170px;
        margin: 0 auto;
        padding: 1.2rem;
    }
    .form_wrapper--add {
        display: grid;
        grid-template-columns: 2fr 1fr;
        padding: 2rem;
        gap: 1.5rem;
        box-shadow: 0 0 20px 0 rgb(184, 183, 183);
    }
    
    .form_contenido {
        padding: 0 1rem;
    }
    .form_contenido h3 {
        font-size: 2rem;
        font-weight: 700;
        margin: 1rem 0;
        color: #f76307;
        text-align: center;
        text-transform: uppercase;
    }
    
    .form_contenido form input {
        width: 100%;
        border: none;
        border-bottom: 1px solid #bec092;
        outline: none;
        margin: 1.5rem 0;
        padding: 1rem 0;
        background-color: unset;
    }
    
    .form_contenido form select {
        width: 100%;
        margin: 1.5rem 0;
        padding: 1rem;
        border: 1px solid #bec092;
        border-radius: 10px;
        outline: none;
    }
    
    .form_contenido form option {
        background-color: #b9b9b94a; /* Color de fondo de las opciones */
        color: #333; /* Color del texto de las opciones */
        padding: 5px; /* Espaciado interno de las opciones */
        
    }
    .flex_marca {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin: 1.5rem 0;
    }
    
    .flex_marca span {
        display: flex;
        flex-direction: column;
    }
    .form_contenido form textarea {
        width: 100%;
        margin: 1.5rem 0;
        border: none;
        outline: none;
        border-bottom: 1px solid #bec092;
    }
    .form_file {
        margin-bottom: 1rem;
    }
    
    .form_file p {
        margin-bottom: 1rem;
    }
    
    form .form_file input { /* input file */
        border-bottom: unset;
    }
    .input-file {
        display: none; /* Oculta el input original */
    }
    
    .custom-file-upload {
        display: inline-block;
        width: 100%;
        padding: 10px 20px;
        cursor: pointer;
        background-color: #dedede;
        color: #000;
        border-radius: 5px;
        text-align: center;
    }
    
    .custom-file-upload:hover {
        background-color: #45a049;
        color: #FFFFFF;
    }
    
    .form_send--btn {
        margin: 1rem 0;
    }
    .form_send--btn button {
        width: 30%;
        font-size: 1.7rem;
        display: block;
        padding: 1rem;
        margin: 0 auto;
        background-color: #f76307;
        border: none;
        border-radius: 5px;
        color: #FFFFFF;
        cursor: pointer;
    }
    
    .form_send--btn button:hover {
        background-color: rgba(247, 99, 7, 0.768);
        transition: .7s;
    }
    
    .formAdd_info {
        margin: 1rem 0;
        padding: 1rem;
        background-color: #fafafa6c;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        border-radius: 20px;
    }
    
    .form_info--text  {
        text-transform: uppercase;
        font-size: 1.6rem;
    }
    
    .formAdd_info .form_info--text::after {
        content: "";
        display: block;
        height: 0.3rem;
        background-color: #f76307;
        margin: 0 auto;
        width: 85px;
        position: absolute;
        border-radius: 10px;
    }
    
    .form_texto--add {
        margin-top: 1.5rem;
    }
    .fa-add:before, .fa-plus:before {
        margin-right: 1rem;
        color: #B57A58;
    }
    
    .fa-pen-nib:before {
        margin-right: 1rem;
        color: #B57A58;
    }
    
    .form_list {
        margin-top: 2rem;
        border: 1px solid #e1e1e1;
        padding: 1rem;
    }
    .form_list li {
        color: #131313;
        text-align: justify;
    }
    
    .form_list li::marker {
        color: #B57A58;
    }
    
    @media (max-width: 768px) {
        .form_wrapper--add {
            display: flex;
            flex-direction: column;
        }
        .form_contenido {
            border-right: none;
        }
        .formAdd_info .form_info--text::after {
            width: 100px;
        }
        .form_send--btn button {
            width: 100%;
        }
    }
    
    /* FORMULARIO VENDEDOR ACTUALIZAR DATOS*/
    .form_container {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 1.5rem;
        padding: 3rem;
        max-width: 1220px;
        margin: 0 auto;
    }
    
    .form_image {
        display: flex;
        flex-direction: column;
        padding: 2rem;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, .212);
        border-radius: 10px;
        max-height: 1315px;
    }
    
    .form_texto--info h2 {
        color: #e67e22;
    }
    .form_texto--info p {
        font-size: 1.6rem;
        text-align: justify;
        margin: 1rem 0;
    }
    
    .form_texto--info h3 {
        font-size: 2rem;
        color: #e67e22;
    }
    
    .form_image--vendedor {
        margin-top: 2rem;
    }
    .form_image--vendedor img {
        height: 723px;
    }
    .form_header {
        margin-bottom: 3rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1rem;
    }
    
    .form_header h1::after{
        content: "";
        display: block;
        width: 25rem;
        height: 0.3rem;
        background-color: #f76307;
        margin: 0 auto;
        position: absolute;
        border-radius: 10px;
    }
    .form_photo img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    
    .input_box p,
    .input_box label {
        font-weight: 500;
        color: #000000c0;
    }
    
    .input_box input,
    .input_box select {
        width: 100%;
        border: none;
        outline: none;
        margin: 1rem 0;
        padding: 1rem;
        box-shadow: 1px 1px 6px #00000049;
        border-radius: 10px;
        color: #848484;
    }
    
    .input-file {
        display: none; /* Oculta el input original */
    }
    
    .custom-file-upload {
        display: inline-block;
        width: 100%;
        padding: 10px 20px;
        cursor: pointer;
        background-color: #dedede;
        color: #000;
        border-radius: 5px;
        text-align: center;
        margin: 1rem 0;
    }
    
    .custom-file-upload:hover {
        background-color: #45a049;
        color: #FFFFFF;
    }
    
    .input_box input:hover,
    .input_box select:hover {
        background-color: #e0e0e075;
    }
    
    .input_box input:focus-visible,
    .input_box select:focus-visible {
        outline: 1px solid #f76307;
    }
    
    .form_btn button{
        width: 50%;
        display: block;
        margin: 0 auto;
        margin-top: 1rem;
        border: none;
        background-color: #f76307;
        padding: 1rem;
        border-radius: 5px;
        cursor: pointer;
    }
    
    .form_btn button:hover {
        background-color: #f76307d9;
        transition: .7s;
    }
    
    .form_btn button a {
        font-size: 1.4rem;
        font-weight: 500;
        color: #FFFFFF;
    }
    
    @media (max-width: 1330px) {
        .form_image {
            display: none;
        }
        .form_container {
            grid-template-columns: repeat(1, 1fr);
        }
        .form_contenido {
            width: 100%;
        }
    }
    @media (max-width: 1024px) {
        .input_group {
            display: flex;
            flex-direction: column;
            overflow-y: scroll;
            flex-wrap: nowrap;
            max-height: 50rem;
            padding: .5rem;
        }
        .input_group::-webkit-scrollbar {
            width: 0;
        }
        .form_btn button{
            width: 100%;
        }
    } 
    
    /*TABLA PEDIDOS VENDEDOR */
    .pedidoVen {
        margin-top: 2rem;
    }
    .pedidoVen table tr th{
        text-align: center;
    }
    .pedidoVen table tr td {
        text-align: center;
    }
    
    .ver_icon i {
        color: #201d1c;
    }
    .pedidoVen table ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        cursor: pointer;
        display: inline-block; 
    }
    
    .pedidoVen table li {
        padding: 10px;
        border: 1px solid #ccc;
        margin-bottom: 5px;
        background-color: #f9f9f9;
    }
    
    .pedidoVen table li:hover {
        background-color: #e0e0e0;
    }
    
    
    .pedidoVen .estado_menu {
        position: relative;
        display: inline-block;
    }
    
    .pedidoVen .estado_menu--dp {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        z-index: 5;
    }
    
    .pedidoVen .estado_menu--dp li {
        display: block;
    }
    
    .pedidoVen .estado_menu:hover .estado_menu--dp {
        display: block;
    }
    
    .social_icons a.yt i {
        color: #FF0000;
    }
    .social_icons a.what i {
        color: #25D366;
    }
    
    @media (max-width: 1205px) {
        .pedido table tr th{
            text-align: initial;
        }
        .pedido table tr td {
            text-align: initial;
        }
        .pedidoVen table tr th{
            text-align: unset;
        }
        .pedidoVen table tr td {
            text-align: unset;
        }
        .pedidoVen table li {
            border: none;
        }
    }
            `}
            </style>

            <main className="form_add">
                <ToastContainer delay={4000} position="top-right" />

                <div className="formAdd_content">
                    <div className="form_wrapper--add">
                        <div className="form_contenido">
                            <h3>{router.query.id ? 'Actualiza Tu Producto' : 'Inserta tu producto'}</h3>

                            <form onSubmit={Submit}>
                                <div className="form_file">
                                    <img style={{ maxWidth: '150px', borderRadius: '10px', margin: 'auto', display: 'block' }} src={`${im}`} />
                                    <p>Imagen Producto</p>
                                    <label className='custom-file-upload' htmlFor="imagen" >Subir Archivo</label>
                                    <input className="input-file" onChange={(e) => {
                                        if (e.target.files[0]) {
                                            setFileImg(e.target.files[0])
                                            let reader = new FileReader()
                                            reader.onload = (e) => {

                                                setIm( e.target.result)
                                            }

                                            reader.readAsDataURL(e.target.files[0])


                                        }

                                    }} type="file" id="imagen" name="imagen" />
                                </div>
                                <div>
                                    <label htmlFor="nombre">Nombre</label>
                                    <input className='form-control' type="text" onChange={Change} name="nombre" id="nombre" value={producto.nombre} />

                                </div>
                                <div className="form_select">
                                    <label htmlFor="category">Categoria</label>

                                    <select onChange={Change} value={producto.categoria} name='categoria' className="category">
                                        <option value="Perfume">Perfume</option>
                                        <option value="Colonia">Colonia</option>
                                        <option value="Joyeria">Joyeria</option>
                                        <option value="Maquillaje">Maquillaje</option>
                                        <option value="Cuidado de piel">Cuidado de piel</option>
                                        <option value="Labial">Labial</option>
                                        <option value="Desodorante">Desodorante</option>
                                        <option value="Delineador">Delineador</option>
                                        <option value="Protección Solar">Protección Solar</option>
                                        <option value="Tratamiento Facial">Tratamiento Facial</option>
                                    </select>
                                </div>
                                <div>

                                    <details>
                                        <summary>Marca: {producto.marca}</summary>
                                        <span style={{ display: 'block' }} onClick={changeMarca}>Yanbal</span>
                                        <span style={{ display: 'block' }} onClick={changeMarca}>Avon</span>
                                        <span style={{ display: 'block' }} onClick={changeMarca}>Carmel</span>
                                        <span style={{ display: 'block' }} onClick={changeMarca}>Esika</span>
                                        <span style={{ display: 'block' }} onClick={changeMarca}>Cyzone</span>
                                        <span style={{ display: 'block' }} onClick={() => { setInputMarca(true) }}>otro...</span>
                                    </details>
                                    <br />
                                </div>
                                {inputMarca ? <><input name='marca' value={producto.marca} onChange={Change} /> <span onClick={() => { setInputMarca(false) }}>✅</span></> : ''}

                                <div>
                                    <label htmlFor="des">Descripción</label>
                                    <textarea className='form-control' value={producto.descripcion} onChange={Change} name="descripcion" rows="2" />
                                </div>
                                <div>
                                    <label htmlFor="cantidad">Cantidad Disponible</label>
                                    <input className='form-control' type="number" onChange={Change} name="cantidad" value={producto.cantidad} />


                                </div>
                                <div>
                                    <label htmlFor="precio">Precio</label>
                                    <input className='form-control' onChange={Change} type="number" value={producto.precio} name="precio" />


                                </div>
                                <div className="form_send--btn">
                                    <button>Enviar</button>
                                </div>

                            </form>
                        </div>

                        <div className="formAdd_info">

                            <p className="form_texto--add">
                                <i className="fa-solid fa-pen-nib">{router.query.id ? 'Actualiza Tu Producto' : 'Inserta tu producto'}</i>
                            </p>
                            <div className="form_list">
                                <li>{router.query.id ? 'Actualiza' : 'Inserta '} la información que necesites cambiar, como el nombre, descripción, precio, imágenes, etc.</li>
                                <li>Asegúrate de que el producto esté asignado a la categoría correcta</li>
                                <li>{router.query.id ? 'Actualiza' : 'Inserta '} la cantidad disponible en el inventario si es necesario.</li>
                                <li>Realiza ajustes en detalles adicionales como dimensiones, peso, colores, etc.</li>
                                <li>Cambia precios, descuentos u ofertas según sea necesario.</li>
                                <li>Asegúrate de hacer clic en "Enviar" para aplicar los cambios</li>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

        </>
    )
}

export default FormActInsrt