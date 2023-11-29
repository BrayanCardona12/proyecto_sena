import axios from 'axios';
import { formatter } from 'log/formatterInt';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toast';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

function pedidos(props) {
    let { data } = props

   // let router = useRouter()



   
    let colores = {
        Solicitado: '#B0B0B0',
        Verificando_Pago: '#FFA07A',
        Aprobado: '#FFD700',
        Preparando: '#A4D3A5',
        Enviando: '#FFA500',
        Entregado: '#98FB98',
        Cancelado: '#FF6347',
    }

    let [datos, setDatos] = useState([...data])


    const filterCategoria = (e) => {

        let sss = data.filter(x => x.estadoP.toLowerCase() == e.target.textContent.toLowerCase())
        setDatos(sss)


    }


    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Pedidos Vendedor</title>

                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />

                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.0/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://cdn.datatables.net/responsive/2.5.0/css/responsive.dataTables.min.css" />
                <link rel="stylesheet" href="https://cdn.datatables.net/1.13.7/css/dataTables.bootstrap5.min.css" />


            </Head>

            <style jsx>
                {`
        
        /*========== VARIABLES CSS ==========*/
:root {
    --header-height: 5.6rem;
    --nav-width: 219px;
  
    /*========== Colors ==========*/
    --first-color: #f76307;
    --first-color-light: #F4F0FA;
    --title-color: #19181B;
    --text-color: #58555E;
    --text-color-light: #A5A1AA;
    --body-color: #F9F6FD;
    --container-color: #FFFFFF;
  
    /*========== Font and typography ==========*/
    --body-font: 'Poppins', sans-serif;
    --normal-font-size: 1.5rem;
    --small-font-size: 1.2rem;
    --smaller-font-size: 1.2rem;
  
    /*========== Font weight ==========*/
    --font-medium: 500;
    --font-semi-bold: 600;
  
    /*========== z index ==========*/
    --z-fixed: 100;
}
   
/*========== BASE ==========*/

/* *, ::before, ::after {
    box-sizing: border-box;
  } */

html {
    font-size: 62.5%;
    box-sizing: border-box;
    scroll-behavior: smooth;
}
*, *::before, *::after {
    box-sizing: inherit;
}
  
body {
    margin: var(--header-height) 0 0 0;
    font-family: var(--body-font);
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
/* .container {
    max-width: 120rem;
    width: 90%;
    margin: 0 auto;
} */
  
  /*========== HEADER ==========*/
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

.header_cliente {
    text-align: right;
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

/* seccion carrito*/
.cartTab {
    width: 40rem;
    background-color: #e1e1e1;
    color: #000;
    position: fixed;
    inset: 57px -400px 0 auto;
    display: grid;
    grid-template-rows: 70px 1fr 35px 40px;
    transition: .5s;
    z-index: 999;
}

body.showCart .cartTab {
    inset: 57px 0 0 auto;
}


.cart_flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.icon_close--cart {
    padding: 0 1rem 0;
}
.cartTab h1 {
    padding: 2rem 0 2rem 1rem;
    margin: 0;
    font-weight: 300;
}

.list_Cart {
    padding: .5rem;    
    overflow: auto;
}

.list_Cart::-webkit-scrollbar {
    width: 0;
}

.cartTab .list_Cart .cart_item img {
    width: 100%;
}

.cartTab .list_Cart .cart_item {
    display: grid;
    grid-template-columns: 70px 80px 85px 90px 15px;
    gap: 10px;
    text-align: center;
    align-items: center;
}

.list_Cart .cart_cantidad span {
    display: inline-block;
    width: 25px;
    height: 25px;
    background-color: #eee;
    color: #000;
    border-radius: 50%;
    cursor: pointer;
}

.list_Cart .cart_cantidad span:nth-child(2) {
    background-color: transparent;
    color: #000;
}

.list_Cart .cart_item:nth-child(even) {
    background-color: #19191911
}

.cart_delete i{
    font-size: 2rem;
    color: #f71a02;
}

.cart_total {
    padding: 0 1rem;
}
.cart_total h3 {
    text-align: right;
    color: #31344b;
}
.cart_total span {
    color: #5b5b5b;
}
.cartTab .cart_btn button {
    width: 100%;
    height: 100%;
    background-color: #f76307;
    border: none;
    font-size: 1.6rem;
    font-weight: 600;
}
.cart_btn button a {
    color: #FFFFFF;
}

@media (max-width: 460px) {
    .cartTab {
        width: 30rem;
    }
    .cartTab .list_Cart .cart_item img {
        width: 70%;
    }
    .cartTab .list_Cart .cart_item {
        grid-template-columns: 55px 36px 50px 100px 15px;
        gap: 7px;
    }
    .cart_name {
        font-size: 1rem;
    }
    .cart_precio {
        font-size: 1.2rem;
    }
    .list_Cart .cart_cantidad span {
        width: 20px;
        height: 23px;
    }
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

/* seccion cliente */
/* .cliente {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    padding: 1rem 9rem 0 1rem;
    background-color: #25D366;
} */
.wrapper {
    background-color: #ECF0F3;
    box-shadow: 0 1rem 2rem rgba(31, 38, 135, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 1rem;
}

.social_icons a {
    background-color: #ecf0f3;
    border-radius: 10px;
    box-shadow: -3px -3px 7px #FFFFFF, 3px 3px 5px #ceced1;
}

.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 25rem;
    padding: 2rem;
}

.wrapper .img_area {
    margin: 0 auto;
    background-color: #e06b11;
    border-radius: 10px;
    box-shadow: -3px -3px 7px #FFFFFF, 3px 3px 5px #ceced1;
}

.wrapper .img_area {
    height: 12rem;
    width: 12rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.img_area .inner_area {
    height: calc(100% - 10px);
    width: calc(100% - 10px);
    border-radius: 50%;
}
.inner_area img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
}

.name {
    font-size: 2.3rem;
    font-weight: 500;
    color: #31344b;
    margin: 1rem 0 .5rem 0;
}

.about {
    font-weight: 400;
    color: #44476a;
    font-size: 1.6rem;
}
.description {
    font-size: 1.2rem;
    text-align: center;
    margin: .5rem 0;
}
.rol {
    font-size: 1.5rem;
    color: #716e75;
    font-weight: 900;
}

.social_icons {
    margin: 15px 0 25px 0;
}

.social_icons a {
    height: 40px;
    width: 40px;
    display: inline-flex;
    margin: 0 .5rem;
    border-radius: 50%;
    position: relative;
}

.social_icons a:hover::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #ECF0F3;
    border-radius: 50%;
    box-shadow: inset -3px -3px 7px #FFFFFF, inset 3px 3px 5px #ceced1;
}

.social_icons a i {
    font-size: 2rem;
    text-align: center;
    width: 100%;
    height: 100%;
    line-height: 4rem;
    position: relative;
    z-index: 5;
}

.social_icons a.yt i {
    color: #FF0000;
}
.social_icons a.what i {
    color: #25D366;
} 

.icon {
    margin-left: 21rem;
}

.wrapper .icon i {
    font-size: 2.3rem;
    color: #e74c3c;
}

/* seccion vendedores MQ */
@media (max-width: 768px) {
    .cliente {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 640px) {
    .cliente {
        grid-template-columns: repeat(1, 1fr);
    }
    
} /*arreglar el enlace de ir a producto vendedor */

/* productos del vendedor  / productos */
.productos h2 {
    text-align: center;
    text-transform: uppercase;
}

.filtrar {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative; 
    z-index: 1;
    margin-bottom: 2rem;
}

.filtrar ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
}

.filtrar li {
    display: inline-block;
    position: relative;
}

.filtrar a {
    display: block;
    padding: 10px 15px;
    text-decoration: none;
    color: #333;
    background-color: #f4f4f4;
    border-right: 1px solid #ccc;
}

.filtrar li a:hover {
    /* background-color: #ddd; */
    background-color: #f76307;
    color: #fff;
}

.filtrar ul li ul li {
    width: 18rem;
}
/* Estilos para los submenús */
.filtrar ul ul {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    z-index: 1;
}

.filtrar ul li:hover > ul {
    display: inherit;
}

.filtrar ul ul li {
    width: 100%;
    float: none;
    display: list-item;
    position: relative;
    text-align: left;
}

.filtrar ul ul ul li {
    position: relative;
    top: 0;
    left: 100%; 
}

@media (max-width: 768px) {
    .filtrar {
        flex-direction: column; 
        align-items: stretch; 
    }

    .filtrar li {
        display: block;
        width: 100%; 
        border-bottom: 1px solid #ccc;
    }

    .filtrar ul ul {
        position: static; 
        display: none;
        width: 100%; 
    }

    .filtrar ul ul li {
        width: 100%;
    }

    .filtrar ul li ul li {
        width: 100%;
    }

    .filtrar ul ul ul li {
        left: 0;
    }
}

.galeria {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
}

.galeria_content {
    width: 20%;
    margin: 1.5rem;
    float: left;
    text-align: center;
    border-radius: 20px;
    padding-top: 1rem;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    background-color: #f2f2f2;
    transition: .4s;
}

.galeria_content:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transform: translate(0px, -8px);
}

.galeria_img {
    width: 20rem;
    height: 20rem;
    text-align: center;
    margin: 0 auto;
    display: block;
}

.galeria_tipo {
    font-size: 1.2rem;
    margin: 1rem 0;
    text-align: center;
    color: #7f7f7f;
}

.galeria_marca {
    font-size: 2rem;
    text-align: center;
    color: #222f3e;
    margin: 0;
}
.galeria_descripcion {
    text-align: center;
    color: #b2bec3;
    padding: 0 8px;
}

.galeria_cantidad {
    font-size: 1.5rem;
    margin: 1rem 0;
    text-align: center;
    color: #44476a;
}
.galeria_precio {
    font-size: 2.6rem;
    text-align: center;
    color: #222f3e;
    margin: 1rem 0;
}

.btn_buy {
    text-align: center;
    font-size: 2rem;
    color: #FFFFFF;
    width: 100%;
    padding: 1.5rem;
    border: none;
    outline: none;
    cursor: pointer;
    margin-top: .5rem;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: #ff9f43;
}

/*MQ responsive*/
@media (max-width: 1000px) {
    .galeria_content {
        width: 45%;
    }
}

@media (max-width: 768px) {
    .galeria_content {
        width: 75%;
        margin: 0 auto;
        margin-bottom: 1.5rem;
    }
}

/*form actualizar datos */

.form {
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.form_container {
    width: 80%;
    height: 75vh;
    display: flex;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, .212);
}

.form_image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
    background-color: #d8d8d8d7;
    padding: 1rem;
}

.form_image img {
    width: 31rem;
}

.form_contenido {
    width: 60%;
    /* display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; */
    padding: 3rem;
}

.form_header {
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
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

.input_group {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1rem 0;
}

.input_box {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.1rem;
}

.input_box input,
.input_box select {
    margin: 0.6rem 0;
    padding: 0.8rem 1.2rem;
    border: none;
    border-radius: 10px;
    box-shadow: 1px 1px 6px #00000049;

}

.input_box input:hover {
    background-color: #eeeeee75;
}

.input_box input:focus-visible,
.input_box select:focus-visible {
    outline: 1px solid #f76307;
}

.input_box label {
    font-size: 1.2rem;
    font-weight: 600;
    color: #000000c0;
}

.input_box input::placeholder,
.input_box select::placeholder {
    color: #000000be;
}

.form_btn button{
    width: 50%;
    display: block;
    margin: 0 auto;
    margin-top: 2.5rem;
    border: none;
    background-color: #f76307;
    padding: 0.62rem;
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
        width: 50%;
    }
    .form_contenido {
        width: 100%;
        margin-top: 4rem;
    }
}

@media (max-width: 1024px) {
    .form_container {
        width: 90%;
        height: auto;
    }
    .input_group {
        flex-direction: column;
        overflow-y: scroll;
        flex-wrap: nowrap;
        max-height: 40rem;
        padding: .5rem;
    }
    .input_group::-webkit-scrollbar {
        width: 0;
    }
}

/*tabla pedido cliente*/
.pedido {
    margin-top: 2rem;
}
.recibo_icon i {
    color: #201d1c;
}
.pedido table tr th{
    text-align: center;
}
.pedido table tr td {
    text-align: center;
}

.pedido_icon {
    margin: 0;
}

.pedido_icon a {
    width: 25px;
    height: 25px;
}

.pedido_icon a i {
    font-size: 1.5rem;
    line-height: 26px;
}

/*tabla vendedor pedido */
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
    visibility: hidden;
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
    visibility: visible;
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
        
.nave {
       display: flex;
         justify-content: space-between;
         align-items: center;
     }

     .nave div {
         width: 100%;
         text-align: center;
         padding: 3px 5px;
     }
        
        `}
            </style>

            <div className="nave">
                <div onClick={filterCategoria} style={{ backgroundColor: colores.Solicitado }} className="Solicitado">Solicitado</div>
                <div onClick={filterCategoria} style={{ backgroundColor: colores.Verificando_Pago }} className="Verificando_Pago">Verificando_Pago</div>
                <div onClick={filterCategoria} style={{ backgroundColor: colores.Aprobado }} className="Aprobado">Aprobado</div>
                <div onClick={filterCategoria} style={{ backgroundColor: colores.Preparando }} className="Preparando">Preparando</div>
                <div onClick={filterCategoria} style={{ backgroundColor: colores.Enviando }} className="Enviando">Enviando</div>
                <div onClick={filterCategoria} style={{ backgroundColor: colores.Entregado }} className="Entregado">Entregado</div>
                <div onClick={filterCategoria} style={{ backgroundColor: colores.Cancelado }} className="Cancelado">Cancelado</div>
                <div onClick={() => {
                    setDatos(props.data)
                }} style={{ backgroundColor: 'darkgray'}} className="Cancelado">Todo</div>
            </div>
            <div className="html">


                <ToastContainer delay={8000} position='top-right' />
                <div className="cont-pedidos">
                    <h1 style={{ textAlign: 'center' }}>Lista - Pedidos</h1>
                    <table id="example" className="table table-striped display responsive nowrap" style={{ width: '90%', margin: 'auto' }}>
                        <tbody>
                            <tr>
                                <th>/</th>
                                <th>ID-Pedido</th>
                                <th>ID-Vendedor</th>
                                <th>NomVendedor</th>
                                <th>Contacto</th>
                                <th>Total</th>
                                <th>F-Solicitud</th>
                                <th>F-Vencimiento</th>
                                <th>Estado</th>
                            </tr>
                            {
                                datos.map(x => (
                                    <tr style={{ backgroundColor: `${colores[x.estadoP]}` }} key={x.idPedido}>
                                        <td >
                                            <Link className='recibo_icon' href={`/facturaCompra/${x.idC}/${x.idV}/${x.idPedido}`}>
                                                <i class="fa-regular fa-file">👁‍🗨</i>
                                            </Link>



                                        </td>
                                        <td>{x.idPedido}</td>
                                        <td>{x.idV}</td>
                                        <td>{x.nombre}</td>
                                        <td>
                                            <div className="social_icons pedido_icon">
                                                <a className='what' target='_blank' href={`https://api.whatsapp.com/send?phone=${x.codInt}${x.telefono}`}><i className='bx bxl-whatsapp'></i></a>
                                                <a className="yt" href={`mailto:${x.correo}`}><i className='bx bxl-gmail'></i></a>
                                            </div>

                                        </td>
                                        <td>{formatter.format(x.totalP)}</td>
                                        <td>{x.fechaS}</td>
                                        <td>{x.fechaV}</td>
                                        <td style={{ backgroundColor: `${colores[x.estadoP]}` }} className="estado_menu">{x.estadoP}</td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                    {data.length == 0 ? <h3 style={{ textAlign: 'center' }}>Tabla Vacia...</h3> : ''}

                </div>
            </div>
        </>
    )
}

export default pedidos

pedidos.getInitialProps = async (ctx) => {
    try {
        const response1 = await axios.get('http://localhost:3000/api/compra/?idC=' + ctx.query.idC);

        return {
            data: response1.data
        };
    } catch (error) {


        return { data: {} };
    }
}