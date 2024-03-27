export function StylesHome() {
  return StylesHome1() + StylesHome2()
}

function StylesHome1() {
    return `
    body::-webkit-scrollbar{
        width:16px
    }
    body::-webkit-scrollbar-thumb{
        height:56px;
        border-radius:8px;
        border:4px solid transparent;
        background-clip:content-box;
        background-color:rgb(90, 90, 90)
    }
    
    
    html {
        line-height: 1.15; 
        -webkit-text-size-adjust: 100%; 
      }
      
    
      body {
        margin: 0;
      }
      
     
      main {
        display: block;
      }
      
      
      
      h1 {
        font-size: 2em;
        margin: 0.67em 0;
      }
      
    
      
      hr {
        box-sizing: content-box; 
        height: 0; 
        overflow: visible; 
      }
      
    
      pre {
        font-family: monospace, monospace; 
        font-size: 1em; 
      }
      
    
      
    
      a {
        background-color: transparent;
      }
      
    
      
      abbr[title] {
        border-bottom: none; 
        text-decoration: underline; 
        text-decoration: underline dotted; 
      }
    
      b,
      strong {
        font-weight: bolder;
      }
    
      code,
      kbd,
      samp {
        font-family: monospace, monospace; 
        font-size: 1em; 
      }
      
      small {
        font-size: 80%;
      }
      
     
      
      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }
      
      sub {
        bottom: -0.25em;
      }
      
      sup {
        top: -0.5em;
      }
      
    
      img {
        border-style: none;
      }
      
     
      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit; 
        font-size: 100%; 
        line-height: 1.15; 
        margin: 0; 
      }
      
     
      button,
      input { 
        overflow: visible;
      }
    
      button,
      select { 
        text-transform: none;
      }
      
     
      
      button,
      [type="button"],
      [type="reset"],
      [type="submit"] {
        -webkit-appearance: button;
      }
      
      button::-moz-focus-inner,
      [type="button"]::-moz-focus-inner,
      [type="reset"]::-moz-focus-inner,
      [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }
     
      
      button:-moz-focusring,
      [type="button"]:-moz-focusring,
      [type="reset"]:-moz-focusring,
      [type="submit"]:-moz-focusring {
        outline: 1px dotted ButtonText;
      }
      
    
      
      fieldset {
        padding: 0.35em 0.75em 0.625em;
      }
      
     
      legend {
        box-sizing: border-box; 
        color: inherit; 
        display: table; 
        max-width: 100%; 
        padding: 0; 
        white-space: normal; 
      }
      
     
      progress {
        vertical-align: baseline;
      }
      
    
      textarea {
        overflow: auto;
      }
      
      
      [type="checkbox"],
      [type="radio"] {
        box-sizing: border-box; 
        padding: 0; 
      }
      
    
      
      [type="number"]::-webkit-inner-spin-button,
      [type="number"]::-webkit-outer-spin-button {
        height: auto;
      }
      
    
      [type="search"] {
        -webkit-appearance: textfield; 
        outline-offset: -2px; 
      }
      
    
      
      [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
      }
    
      
      ::-webkit-file-upload-button {
        -webkit-appearance: button; 
        font: inherit; 
      }
      
    
      
      details {
        display: block;
      }
      
    
      
      summary {
        display: list-item;
      }
      
     
      
      template {
        display: none;
      }
      
      
      [hidden] {
        display: none;
      }       
      
      
      `
  }

 

function StylesHome2() {
    return `

    *{
        font-family: 'Poppins', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        border: none;
        text-decoration: none;
        text-transform: capitalize;
        transition: .2s linear;
    }
    img {
        max-width: 100%;
    }
    :root {
        --green: #244d4d;
        --orange: #E0592A;
        --black: #000000;
        --white: #fff;
        --light-color: #779;
        --light-bg: #f6fbf6;
        --border: .1rem solid var(--green);
        --box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .1);
        --dark--shadow: 0 0 0 100vw rgba(0, 0, 0,.5);
    }
    
    html {
        font-size: 62.5%;
        overflow-x: hidden;
    }
    .contenedor {
        max-width: 120rem;
        margin: 0 auto;
        width: 90%;
    }
    
    .btn {
        display: inline-block;
        margin-top: 1rem;
        padding: .9rem 3rem;
        font-size: 1.7rem;
        background-color: var(--orange);
        color: var(--white);
        cursor: pointer; 
    }
    .btn:hover {
        background-color: #ff4609be;
        font-weight: bold;
    }
    
    
    .header {
        padding: 2rem 9%;
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        background: var(--light-bg);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .logo{
        font-size: 2.5rem;
        color: var(--orange);
        font-weight: bolder;
    }
    .logo i {
        padding-right: .3rem;
    }
    
    .search-form {
        height: 5rem;
        width: 50rem;
        border-radius: 5rem;
        background-color: var(--white);
        overflow: hidden;
        display: flex;
        align-items: center;
        border: var(--border);
    }
    
    input {
        height: 100%;
        width: 100%;
        padding: 0 1.2rem;
        font-size: 1.6rem;
        color: var(--black);
        text-transform: none;
    }
    
    label {
        font-size: 2.2rem;
        padding-right: 1.7rem;
        cursor: pointer;
        color: var(--orange);
    }
    label:hover {
        color: var(--light-color);
    }
    
    .icons div{
        margin-left: 2rem;
        font-size: 2.5rem;
        cursor: pointer;
        color: var(--black);
    }
    .icons div:hover {
        color: var(--orange);
    }
    
    #search-btn {
        display: none;
    }
    
    @keyframes rotar{
        0% {
            transform: rotate(360deg);
            opacity: 0;
        }
    }
    
    #closer {
        position: fixed;
        top: 3rem;
        right: 2rem;
        font-size: 5rem;
        cursor: pointer;
        z-index: 10000;
        color: var(--black);
        animation: rotar .4s linear .4s backwards;
        display: none;
    }
    #closer:hover {
        color: var(--orange);
    }
    
    .navbar {
        position: fixed;
        top: 0;
        right: -100%;
        z-index: 1000;
        width: 35rem;
        height: 100vh;
        background-color: var(--white);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column;
    }
    
    .active {
        right: 0;
        box-shadow: var(--box-shadow);
        transition: .4s linear;
    }
    
    .navbar a {
        margin: 1rem 0;
        font-size: 2.5rem;
        color: var(--green);
    }
    .navbar a:hover {
        color: var(--orange);
    }
    
    .shopping-cart {
        position: fixed;
        top: 0;
        right: -100%;
        z-index: 1000;
        width: 35rem;
        height: 100vh;
        background-color: var(--white);
        padding: 2rem;
        padding-top: 8rem;
        overflow-y: scroll;
    }
    .active {
        right: 0;
        box-shadow: var(--dark--shadow);
        transition: .4s linear;
    }
    
    .shopping-cart::-webkit-scrollbar{
        width: 1rem;
    }
    
    .shopping-cart::-webkit-scrollbar-track{
        background-color: var(--white);
    }
    
    .shopping-cart::-webkit-scrollbar-thumb {
        background-color: var(--green);
    }
    .box {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        position: relative;
        margin-bottom: 1rem;
    }
    .box img {
        height: 7rem;
    }
    .fa-times {
        position: absolute;
        top: 50%;
        right: 2rem;
        transform: translateY(-50%);
        font-size: 2rem;
        color: var(--light-color);
        cursor: pointer;
    }
    
    .fa-times:hover {
        color: var(--orange);
    }
    
    .content h3{
        color: var(--black);
        font-size: 1.8rem;
        padding-bottom: .5rem;
    }
    .content span {
        font-size: 1.5rem;
        color: var(--light-color);
    }
    .multiply {
        margin: 0 1rem;
    }
    
    .total {
        text-align: center;
        font-size: 2rem;
        padding: 1rem 0;
        color: var(--light-color);
    }
    .total span {
        color: var(--orange);
    }
    
    .btn {
        width: 100%;
        text-align: center;
    }
    
    
    .login-form {
        position: fixed;
        top: 0;
        right: -100%;
        z-index: 1000;
        width: 35rem;
        height: 100vh;
        background-color: var(--white);
        padding: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .active {
        right: 0;
        box-shadow: var(--dark--shadow);
        transition: .4s linear;
    }
    form {
        padding: 1.7rem;
        border: var(--border);
    }
    h3 {
        font-size: 2.2rem;
        color: var(--black);
        padding-bottom: 1rem;
    }
    .box {
        width: 100%;
        text-transform: none;
        font-size: 1.5rem;
        color: var(--green);
        padding: 1rem 1.2rem;
        border: var(--border);
        margin: .7rem 0;
    }
    .remember {
        display: flex;
        align-items: center;
        justify-content: end;
        gap: .5rem;
    }
    .remember-input {
        width: 10%;
    }
    label {
        padding: 1rem 0;
        font-size: 1.5rem;
        cursor: pointer;
        color: var(var(--light-color));
    }
    .btn-margin {
        margin: 1rem 0;
    }
    .forget {
        padding-top: 1rem;
        font-size: 1.4rem;
        color: var(--light-color);
    }
    .forget a {
        color: var(--orange);
    }
    .forget a:hover {
        text-decoration: underline;
    }
    
    
    
    
    @keyframes fadeOut {
        0% {
            transform: scale(.5);
            opacity: 0;
        }
    }
    @keyframes fadeLeft {
        0% {
            transform: translateX(-5rem);
            opacity: 0;
        }
    }
    
    .home {
        position: relative;
    }
    .slides-container .slide{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: 0 9%;
        gap: 1.5rem ;
        display: none;
    }
    .slides-container .actives {
        display: flex;
    }
    .contenido {
        flex: 1 1 40rem;
        animation: fadeLeft .5s linear .7 backwards;
    }
    .contenido span {
        font-size: 2.5rem;
        color: var(--light-color);
    }
    .contenido h3 {
        font-size: 6rem;
        color: var(--green);
        padding-top: 5rem;
    }
    .contenido p {
        font-size: 1.4rem;
        color: var(--light-color);
        padding: .5rem 0;
        line-height: 2;
    }
    .image {
        flex: 1 1 40rem;
        padding: 3rem 0;
    }
    .image img {
        animation: fadeOut .4s linear;
    }
    #slide-next,
    #slide-prev {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        height: 5rem;
        width: 5rem;
        line-height: 5rem;
        font-size: 3rem;
        box-shadow: var(--box-shadow);
        border: var(--border);
        text-align: center;
        background-color: var(--white);
    }
    #slide-next:hover {
        background-color: var(--orange);
        color: var(--white);
    }
    #slide-prev:hover {
        background-color: var(--orange);
        color: var(--white);
    }
    #slide-next {
        right: 2rem;
    }
    
    #slide-prev {
        left: 2rem;
    }
    
    .contenido .btn {
        width: 50%;
    }
    
    
    .title {
        text-align: center;
        color: var(--black);
        margin: 1rem 0;
        font-size: 2.8rem;
        font-weight: bold;
        text-transform: uppercase;
    }
    .banner-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
        gap: 1.5rem;
        margin-bottom: 4rem;
    }
    .banner {
        height: 25rem;
        overflow: hidden;
        position: relative;
    }
    
    .banner img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    .banner img:hover {
        transform: scale(1.2);
    }
    .banner-content {
        position: absolute;
        top: 50%;
        left: 2rem;
        transform: translateY(-50%);
    }
    
    .banner-content span {
        font-size: 1.7rem;
        color: var(--orange);
        font-weight: bold;
    }
    .banner-content h3 {
        padding-top: .5rem;
        font-size: 2.5rem;
        color: #087023;
        font-weight: bold;
    }
    .banner-content .btn {
        padding: .7rem 2.5rem;
    }
    
    
    @media (max-width: 991px) {
        html {
            font-size: 55%;
        }
        .header {
            padding: 2rem;
        }
        section {
            padding: 3rem 2rem;
        }
        .home #slide-next,
        .home #slide-prev {
            top: 95%;
        }
        .home #slide-prev {
            left: auto;
            right: 8rem;
        }
    }
    
    @media (max-width: 768px) {
        #search-btn {
            display: inline-block;
        }
        .search-form {
            position: absolute;
            top: -100%;
            left: 0rem;
            right: 0rem;
            width: 100%;
            border-radius: 0;
            border-left: 0;
            border-right: 0;
            padding: 1rem;
        }
        .search-form.active {
            top: 99%;
        }
    }
    
    @media (max-width: 450px) {
        html {
            font-size: 50%;
        }
        .home .slides-container .slide .contenido h3 {
            font-size: 4rem;
        }
    }
    `
  }

export function StyleHomeCliente() {
    return `

    :root {
        --color-primary: #6C9BCF;
        --color-danger: #FF0060;
        --color-success: #1B9C85;
        --color-warning: #F7D060;
        --color-white: #FFF;
        --color-info-dark: #7D8DA1;
        --color-dark: #363949;
        --color-light: rgba(132, 139, 200, 0.18);
        --color-dark-variant: #677483;
        --color-background: #F6F6F9;
    
        --card-border-radius: 2rem;
        --border-radius-1: 0.4rem;
        --border-radius-2: 1.2rem;
    
        --card-padding: 1.8rem;
        --padding-1: 1.2rem;
    
        --box-shadow: 0 2rem 3rem var(--color-light);
    }

    
    body::-webkit-scrollbar{
        width:16px
    }
    body::-webkit-scrollbar-thumb{
        height:56px;
        border-radius:8px;
        border:4px solid transparent;
        background-clip:content-box;
        background-color:rgb(90, 90, 90)
    }
    
    
    .variables_modo_oscuro {
        --color-background: #181A1E;
        --color-white: #202528;
        --color-dark:#EDEFFD;
        --color-white-dark: #FFFFFF;
        --color-light: rgba(0 0 0 0.4);
        --box-shadow: 0 2rem 3rem var(--color-light);
    }
    
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        border: 0;
        text-decoration: none;
        box-sizing: border-box;
    }
    
    html {
        font-size: 14px;
    }
    
    #contMain {
        width: 100vw;
        height: 100vh;
        font-family: 'Poppins', sans-serif;
        font-size: 0.88rem;
        user-select: none;
        overflow-x: hidden;
        color: var(--color-dark);
        background-color: var(--color-background);
    }
    
    a {
        color: var(--color-dark);
    }
    
    img {
        display: block;
        width: 100%;
        object-fit: cover;
    }
    
    h1 {
        font-weight: 800;
        font-size: 1.8rem;
    }
    
    h2 {
        font-weight: 600;
        font-size: 1.4rem;
    }
    
    h3 {
        font-weight: 500;
        font-size: 0.87rem;
    }
    
    small {
        font-size: 0.76rem;
    }
    
    p {
        color: var(--color-dark-variant);
    }
    
    b {
        color: var(--color-dark);
    }
    
    .text_muted {
        color: var(--color-info-dark);
    }
    
    .primary {
        color: var(--color-primary);
    }
    
    .danger {
        color: var(--color-danger);
    }
    
    .contenedor {
        display: grid;
        width: 96%;
        margin: 0 auto;
        gap: 1.8rem;
        grid-template-columns: 12rem auto;
    }
    
    .seccion_nav {
        height: 100vh;
    }
    
    .toggle {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 1.4rem;
    }
    
    .logo {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .logo img {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
    }
    
    .cerrar {
        padding-right: 1rem;
        display: none;
    }
    
    .sidebar {
        display: flex;
        flex-direction: column;
        background-color: var(--color-white);
        box-shadow: var(--box-shadow);
        border-radius: 15px;
        height: 80vh;
        position: relative;
        top: 1.5rem;
        transition: all 0.3s ease;
    }
    
    .sidebar:hover {
        box-shadow: none;
    }
    
    .sidebar a {
        display: flex;
        align-items: center; 
        color: var(--color-info-dark);
        height: 3.7rem;
        gap: 1rem;
        position: relative;
        margin-left: 2rem;
        transition: all 0.3s ease;
    }
    
    .sidebar a span {
        font-size: 1.6rem;
        transition: all 0.3s ease;
    }
    
    .sidebar a:last-child {
        position: absolute;
        bottom: 1rem;
        width: 100%;
    }
    
    .sidebar a.active {
        width: 100%;
        color: var(--color-primary);
        background-color: var(--color-light);
        margin-left: 0;
    }
    
    .sidebar a.active::before {
        content: '';
        width: 6px;
        height: 18px;
        background-color: var(--color-primary);
    }
    
    .sidebar a.active span {
        color: var(--color-danger);
        margin-left: calc(1rem - 3px);
    }
    
    .sidebar a:hover {
        color: #6C9BCF;
    }
    
    .sidebar a:hover span {
        margin-left: 0.6rem;
    }
    
    
    
    
    .seccion_right {
        margin-top: 1.4rem;
    }
    
    .nav {
        display: flex;
        justify-content: end;
        gap: 2rem;
    }
    
    .nav button {
        display: none;
    }
    
    .modo_oscuro {
        display: flex;
        justify-content: space-between;
        background-color: var(--color-light);
        align-items: center;
        height: 1.6rem;
        width: 4.2rem;
        cursor: pointer;
        border-radius: var(--border-radius-1);
    }
    
    .modo_oscuro span {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        width: 50%;
        height: 100%;
    }
    
    .modo_oscuro span.active {
        background-color: var(--color-primary);
        color: var(--color-white);
        border-radius: var(--border-radius-1);
    }
    
    .perfil {
        display: flex;
        gap: 2rem;
        text-align: right;
    }
    
    .foto_perfil {
        width: 2.8rem;
        height: 2.8rem;
        border-radius: 50%;
        overflow: hidden;
    }
    
    
    @media screen and (max-width: 1200px) {
        .contenedor {
            width: 95%;
            grid-template-columns: 7rem auto;
        }
    
        .logo h2 {
            display: none;
        }
    
        .sidebar h3 {
            display: none;
        }
    
        .sidebar a {
            width: 5.6rem;
        }
    
        .sidebar a:last-child {
            position: relative;
            margin-top: 1.8rem;
        }
    }
    
    @media screen and (max-width: 768px) {
        .contenedor {
            width: 100%;
            grid-template-columns: 1fr;
            padding: 0 1.2rem;
        }
    
        .seccion_nav {
            position: fixed;
            background-color: var(--color-white);
            width: 18rem;
            z-index: 3;
            box-shadow: 1rem 3rem 4rem var(--color-light);
            height: 100vh;
            left: -100%;
            display: none;
            animation: showMenu 0.4s ease forwards;
        }
    
        @keyframes showMenu {
            to {
                left: 0;
            }
        }
    
        .logo {
            margin-left: 1rem;
        }
        .logo h2 {
            display: inline;
        }
        .sidebar h3{
            display: inline;
        }
        .sidebar a {
            width: 100%;
            height: 3.4rem;
        }
    
        .sidebar a:last-child {
            position: absolute;
            bottom: 5rem;
        }
    
        .cerrar {
            display: inline-block;
            cursor: pointer;
        }
        .nav {
            position: fixed;
            width: 100%;
            left: 0;
            top: 0;
            align-items: center;
            padding: 0 var(--padding-1);
            background-color: var(--color-white);
            height: 4.6rem;
            z-index: 2;
        }
    
        
        .modo_oscuro {
            width: 4.4rem;
            position: absolute;
            left: 66%
        }
        
        .informacion {
            display: none;
        }
    
        .nav button {
            display: inline-block;
            background-color: transparent;
            cursor: pointer;
            color: var(--color-dark);
            position: absolute;
            left: 1rem;
        }
        .nav button span {
            font-size: 2rem;
        }
    }
    
    
    
    .slider {
        max-width: 1350px;
        position: absolute;
        top: 7%;
        left: 15%;
        width: 83%;
        height: 500px;
        margin: 1rem 0;
        box-shadow: 0 20px 30px #DBDBDB;
        border-radius: 1rem;
    }
    
    .item_bg--one {
        background-image: url(../img/cosmetic_01.jpg);
    }
    
    .item_bg--two {
        background-image: url(../img/cosmetic_02.jpg);
    }
    
    .item_bg--three {
        background-image: url(../img/cosmetic_03.jpg);
    }
    
    .item_bg--four {
        background-image: url(../img/cosmetic_04.jpg);
    }
    
    .item_bg--five {
        background-image: url(../img/cosmetic_05.webp);
    }
    
    .item_bg--six {
        background-image: url(../img/cosmetic_06.png);
    }
    
    .slider .slider_item .item {
        position: absolute;
        width: 200px;
        height: 300px;
        top: 50%;
        transform: translate(0, -50%);
        border-radius: 20px;
        box-shadow: 0 20px 20px #505050;
        background-position: 50% 50%;
        background-size: cover;
        display: inline-block;
        transition: 0.5s;
    }
    
    .slider_item .item:nth-child(1),
    .slider_item .item:nth-child(2) {
        top: 0;
        left: 0;
        transform: translate(0, 0);
        border-radius: 1rem;
        width: 100%;
        height: 100%;
    }
    
    .slider_item .item:nth-child(3) {
        left: 50%;
    }
    
    .slider_item .item:nth-child(4) {
        left: calc(50% + 220px);
    }
    
    .slider_item .item:nth-child(5) {
        left: calc(50% + 440px);
    }
    
    .slider_item .item:nth-child(n + 6) {
        left: calc(50% + 660px);
        opacity: 0;
    }
    
    .item .item_info {
        position: absolute;
        top: 50%;
        left: 100px;
        width: 300px;
        text-align: left;
        color: #eee;
        transform: translate(0, -50%);
        display: none;
    }
    
    .slider_item .item:nth-child(2) .item_info {
        display: block;
    }
    
    .item_info .item_nombre {
        font-size: 40px;
        text-transform: uppercase;
        font-weight: bold;
        color: #1d5739;
        opacity: 0;
        animation: animate 1s ease-in-out 1 forwards;
    }
    .item_info .item_descripcion {
        margin-top: 10px;
        margin-bottom: 20px;
        opacity: 0;
        color: #909090;
        animation: animate 1s ease-in-out 0.3s 1 forwards;
    }
    
    .item_info button {
        padding: 10px 20px;
        border: none;
        cursor: pointer;
        border-radius: 1rem;
        background-color: #ffffff;
        color: #000;
        opacity: 0;
        animation: animate 1s ease-in-out 0.6s 1 forwards;
    }
    
    @keyframes animate {
        from {
            opacity: 0;
            transform: translate(0, 100px);
            filter: blur(33px);
        }
        to {
            opacity: 1;
            transform: translate(0);
            filter: blur(0);
        }
    }
    .item_info button:hover {
        background-color: #ee5717;
        color: #ffffff;
        transition: 0.5s;
    }
    .button {
        width: 100%;
        text-align: center;
        position: absolute;
        bottom: 20px;
    }
    
    .button button {
        width: 40px;
        height: 35px;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        margin: 0 5px;
        border: 1px solid #000;
        transition: 0.3s;
    }
    
    .button button:hover {
        background-color: #ee5717;
        color: #FFF;
    }
    

    .input-filter {
        width: 100%;
        margin: 9px;
        font-size: 1.2rem;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        border: 2px dashed rgb(73, 73, 73);
      }
    `
}
 

export function StyleCardProducto() {
    return `
    
    .cardP {
        position: relative;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        max-width: 250px;
        border-radius: 16px;
        -webkit-box-shadow: 0px 0px 10px 1px rgba(64, 64, 64, 1);
        -moz-box-shadow: 0px 0px 10px 1px rgba(64, 64, 64, 1);
        box-shadow: 0px 0px 10px 1px rgba(64, 64, 64, 1);
        overflow: hidden;
      
      }
      
      .cardP:hover {
        scale: 1.05;
        transition: all ease-in-out .1s;
      }


      .botones {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        display: flex;
        justify-content: end;
      
      
      
      }
      
      .botones span {
        padding: 9px;
        font-size: 1.3rem;
        border-radius: 10px;
      }
      
      .btn-a {
        background-color: orange;
      }
      
      .btn-e {
        background-color: red;
      }
      
      
      .cardP img {
        width: 100%;
        height: 250px;
        object-fit: cover;
      }
      
      .cardP p {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
      
      }
      
      .cardPCont {
        padding: 12px 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      
      .cardPCont b {
        font-size: 1.5rem;
      }
    
    
    `
}


export function StyleIndex() {
    return `
        
    .container {
      max-width: 120rem;
      width: 90%;
      margin: 0 auto;
  }
  
  
  .header{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 6px 5%;
      background: transparent;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.19);
      z-index: 5;
  }
  
  .logo_sivg{
      font-size: 30px;
      color: #fff;
      text-decoration: none;
      font-weight: 700;
  }
  
  .logo_sivg:hover {
      color: #ed7700;
      transition: 0.7s ease-out;
  }
  
  .social{
      margin: 0 auto 0 50px;
  }
  
  .social .social_link {
      display: inline-flex;
      justify-content: center;
      text-align: center;
      width: 40px;
      height: 40px;
      background: transparent;
      border: 2px solid #fff;
      border-radius: 6px;
      text-decoration: none;
      transition: all 0.5s ease;
      margin-right: 5px;
  }
  
  .social_link:hover{
      background: #ed7700;
  }
  
  .social_net{
      display: flex;
      font-size: 25px;
      color: #fff;
      padding-top: 6px;
      transition: all 0.5s ease;
  }
  
  .social_net:hover {
      color: #ffffff;
  }
  .navbar {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
  }
  .nav_link__menu {
      font-size: 18px;
      color: #fff;
      text-decoration: none;
      font-weight: 500;
      margin-left: 30px;
      text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  
  .icon_inicio {
      font-size: 25px;
      color: #fff;
      font-weight: 500;
      text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  
  .nav_link__menu:hover,
  .icon_inicio:hover {
      color: #ed7700;
  }
  
  .hamburger {
      display: none;
      cursor: pointer;
  }
  
  .bar {
      display: block;
      width: 25px;
      height: 3px;
      margin: 5px auto;
      transition: all 0.3s ease-in-out;
      background-color: #fff;
  }
  /* Falta agregar estilos responsive */
  
  /*seccion banner*/
  .banner{
      position: relative;
      width: 100%;
      height: 100vh;
      overflow-x: hidden;
  }
  
  .slider .slide{
      position: absolute;
      width: 100%;
      height: 100vh;
  }
  
  .slide_img {
      position: absolute;
      object-fit: cover;
      width: 100%;
      height: 100%;
      pointer-events: none;
      opacity: 0;
      transition: 0.3s ease;
  }
  
  .slide.active .slide_img {
      opacity: 1;
  }
  
  .slide .left_info{
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      transform: translateX(-100%);
      transition: 0s;
  }
  
  .slide.active .left_info{
      transform: translateX(0);
      z-index: 1;
      transition: 1s ease;
  }
  
  .left_info .penetrte_blur{
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(20px);
      display: flex;
      justify-content: flex-end;
      align-items: center;
  }
  
  .penetrte_title {
      font-size: 100px;
      color: #fff;
      text-shadow: 0 0 10px rgba(0, 0, 0, 5);
  }
  
  .left_info .content{
      position: absolute;
      bottom: 8%;
      left: 10%;
      color: #fff;
  }
  
  .content_title {
      font-size: 20px;
  }
  
  .content_pagraf {
      font-size: 16px;
      margin: 10px 0 1.5rem;
  }
  
  .content .btn_info{
      display: inline-block;
      padding: 10px 28px;
      border: 2px solid white;
      border-radius: 6px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      font-size: 25px;
      color: #fff;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.5s ease;
  }
  
  .content .btn_info:hover{
      background-color: rgba(242, 77, 6, 0.644);
      color: #FFFFFF;
  }
  
  .slide .right_info{
      position: absolute;
      top: 0;
      right: 0;
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      transform: translateX(100%);
      transition: 0s;
  }
  
  .slide.active .right_info{
      transform: translateX(0);
      z-index: 1;
      transition: 1s ease;
  }
  
  .right_info .right_title{
      font-size: 120px;
      color: #fff;
      text-shadow: 
          0 1px 0 #ccc,
          0 2px 0 #c9c9c9,
          0 3px 0 #bbb,
          0 4px 0 #b9b9b9,
          0 5px 0 #aaa,  
          0 6px 1px rgba(0, 0, 0, 0.1),  
          0 0px 5px rgba(0, 0, 0, 0.1),  
          0 1px 3px rgba(0, 0, 0, 0.3),  
          0 3px 5px rgba(0, 0, 0, 0.2),  
          0 5px 10px rgba(0, 0, 0, 0.25),  
          0 10px 10px rgba(0, 0, 0, 0.2),  
          0 20px 20px rgba(0, 0, 0, 0.15);
  }
  
  .right_info .right_subtitle {
      position: absolute;
      font-size: 45px;
      color: #fff;
      text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      transform: translateY(190%);
      margin-left: 20px;
  }
  
  .navigation{
      position: absolute;
      bottom: 8%;
      right: 5%;
      z-index: 99;
  }
  
  .navigation .span_icon {
      display: inline-flex;
      width: 70px;
      height: 70px;
      background: #fff;
      border: 2px solid #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      cursor: pointer;
      margin-left: 40px;
      border-radius: 6px;
      align-items: center;
      justify-content: center;
  }
  
  .navigation .span_icon:nth-child(1){
      background: transparent;
  }
  
  .navigation .span_icon:nth-child(1):hover{
      background: #fff;
  }
  
  .navigation .span_icon .nav_icon {
      color: #de530d;
      transition: all .5s ease;
  }
  
  .navigation .span_icon:nth-child(1) i{
      color: #de530d;
  }
  
  .navigation .span_icon:nth-child(1):hover i{
      color: #de530d;
  }
  
  /*Media queries banner */
  @media (max-width: 768px) {
      .penetrte_blur h1{
          font-size: 90px;
      }
      .right_info h1 {
          font-size: 90px;
      }
      .right_info h3 {
          margin-top: 0;
      }
  }
  @media (max-width: 640px) {
      .banner {
          height: 70vh;
      }
      .slider .slide{
          height: 70vh;
      }
      .penetrte_blur h1{
          font-size: 36px;
      }
      .content .btn_info {
          padding: 1rem 1rem;
      }
      .content p {
          font-size: 12px;
      }
      .content h3 {
          display: none;
      }
      .right_info h1 {
          font-size: 36px;
      }
      .right_info h3 {
          font-size: 24px;
          margin-top: 0;
      }
  }
  
  
  .nosotros_title {
      margin-top: 5rem;
      text-align: center;
      text-transform: uppercase;
      font-size: 2.8rem;
  }
  
  .nosotros_title span {
      color: #d44d0a;
  }
  
  .nosotros_grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      gap: 2rem;
      
      
  }
  .nosotros_img img{
      width: 100%;
      height: 100%;
      
      border-radius: 2rem;
      box-shadow: -15px 14px 21px 4px rgba(184,184,184,1);
  }
  
  .nosotros_texto {
      text-align: justify;
      padding: 0 1.5rem;
  }
  
  @media (max-width: 992px) {
      .nosotros_grid {
          grid-template-columns: repeat(1, 1fr);
      }
  }
  
  /* seccion productos */
  .producto_title h2{
      margin-top: 5rem;
      text-align: center;
      text-transform: uppercase;
      font-size: 2.8rem;
  }
  
  .producto_title span {
      color: #d44d0a;
  }
  
  
  .producto_grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      padding: 3rem 0;
      max-width: 120rem;
      width: 90%;
      margin: 0 auto;
  }
  .producto_img {
      width: 100%;
  }
  .producto_img:hover{
      transform: scale(1.1);
      transition-duration: 0.3s;
  }
  
  .producto_titulo {
      text-align: center;
      font-size: 25px;
      text-transform: uppercase;
      color: #0c370d;
      font-weight: 600;
  }
  
  .producto_texto {
      text-align: center;
  }
  
  @media (max-width: 768px) {
      .producto_grid {
          grid-template-columns: repeat(1, 1fr);
      }
  }
  
  
  
  .explorar_title {
      text-align: center;
      margin: 50px 0;
      font-size: 28px;
      text-transform: uppercase;
      font-weight: 500;
  }
  
  .span_title {
      color: #e75309;
  }
  
  .link_catalogo {
      width: 100%;
  }
  
  .footer {
      margin-top: 50px;
      background-color: #24252a;
      padding: 10px 0;
  }
  .footer_grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      padding: 10px 0;
      gap: 10px;
      max-width: 120rem;
      width: 90%;
      margin: 0 auto;
  }
  
  .footer_title {
      font-size: 18px;
      text-transform: uppercase;
      color: darkorange;
      font-weight: 500;
  }
  
  .footer_link {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
      font-size: 14px;
      text-decoration: none;
      color: #9b9b9b;
  }
  
  
  .footer_link:hover {
      color: #FFFFFF;
  }
  
  @media (max-width: 992px) {
      .footer_grid {
          grid-template-columns: repeat(2, 1fr);
      }
  }
  
  @media (max-width: 492px) {
      .footer_grid {
          grid-template-columns: repeat(1, 1fr);
      }
  }
  
  .icons_networks {
      display: flex;  
      gap: 15px;
  }
  
  .footer_networks {
      font-size: 20px;
      color: #FFFFFF;
  }
  
  .footer_networks:hover{
      color: #ff5500;
  }
  
  .linea_hr {
      width: 90%;
      height: 2px;
      background-color: #FFFFFF;
      border-radius: 5px;
  }
  .derechos_reservados {
      text-align: center;
      color: #9b9b9b;
      margin-top: 10px;
  }
    
    
    
    `
}

export function StyleFormLogin() {
    return `

    .bg_signUp {
        background-image: linear-gradient(#1f1f1f11, #151515c9), url(https://www.clara.es/medio/2019/11/18/tratamientos-belleza-regalar-navidad-olga-san-bartolome_7fa8843b_1280x772.jpg);
        background-repeat: no-repeat;
        background-position: contain;
        background-size: cover;
        min-height: 100vh;
    }
    
    .center_contenido {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
    }
    
    .container_login {
        width: 420px;
        background-color: transparent;
        border: 2px solid rgba(255, 255, 255, .2);
        backdrop-filter: blur(20px);
        box-shadow: 0 0 10px rgba(0, 0, 0, .2);
        color: #fff;
        border-radius: 10px;
        padding: 30px 40px;
    }
    
    .titulo {
        font-size: 36px;
        text-align: center;
    }
    
    .input_box {
        position: relative;
        width: 100%;
        height: 50px;
        margin: 30px 0;
    }
    .rol {
        width: 100%;
        height: 100%;
        background-color: transparent;
        border: none;
        outline: none;
        border: 2px solid rgba(255, 255, 255, .2);
        border-radius: 40px;
        font-size: 16px;
        color: #fff;
        padding: 0 14px 0 14px;
   
    }
    .color_option {
        background-color: #e1e1e1;
        color: #000;
       
    }
    .input_wh {
        width: 100%;
        height: 100%;
        background-color: transparent;
        border: none;
        outline: none;
        border: 2px solid rgba(255, 255, 255, .2);
        border-radius: 40px;
        font-size: 16px;
        color: #fff;
        padding: 20px 45px 20px 20px;
    }
    
    .input_wh::placeholder {
        color: #fff;
    }
    
    .icono_login {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 20px;
    }
    
    .recordar_contra {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        margin: -15px 0 15px;
    }
    
    .box_pass {
        accent-color: #fff;
        margin-right: 3px;
    }
    
    .link_pass {
        color: #fff;
    }
    
    .link_pass:hover {
        text-decoration: underline;
    }
    
    .btn_signUp {
        width: 100%;
        height: 45px;
        background-color: #fff;
        border: none;
        outline: none;
        border-radius: 40px;
        box-shadow: 0 0 10px rgba(0, 0, 0, .1);
        cursor: pointer;
        font-size: 16px;
        color: #333;
        font-weight: 600;
    }
    .btn_signUp:hover {
        background-color: #e8e8e8;
        color: #000;
    }
    .registro_link {
        font-size: 14px;
        text-align: center;
        margin: 20px 0 15px;
    }
    
    .texto_info_link {
        color: #fff;
        font-weight: 600;
    }
    
    .texto_info_link:hover {
        text-decoration: underline;
    }
    
    `
}
