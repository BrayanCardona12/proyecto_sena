import Link from 'next/link'
import { useRouter } from 'next/router'

function CardUser({ datos, clickIcon }) {

    const router = useRouter()

    let clickLink = (e) => {
        e.preventDefault()
        clickIcon(true)
        setTimeout(() => {
            clickIcon(false)
            router.push(`/RolCliente/${datos.id}/?idC=` + localStorage.getItem('inf') + '&nom=' + datos.nombre)
        }, 2500)
    }

    return (<>

        <style jsx>
            {
                `
  .vendedor_card h2{
    text-align: center;
}
.wrapper {
    background-color: #ECF0F3;
    box-shadow: 0 1rem 2rem rgba(31, 38, 135, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 1rem;
    max-width: 300px
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
    font-size: 1.5rem;
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

  `
            }
        </style>

        <div style={{ position: 'relative' }}>

            <Link onClick={clickLink} href={`/`}>
                <div className="wrapper">

                    <div className="img_area">
                        <div className="inner_area">
                            <img src={datos.imagen} alt="vendedor" />
                        </div>
                    </div>
                    <div className="name">{datos.nombre}</div>
                    <div className="about">{datos.ciudad + ' | ' + datos.pais}</div>

                    <div className="description" style={{ color: 'darkgray' }}>{datos.correo}</div>

                    <div className="rol">Vendedor</div>

                </div>


            </Link>

            <div style={{ position: 'absolute', bottom: '0', width: '100%', display: 'flex', justifyContent: 'space-between' }} className="social_icons">
                <a href={`mailto:${datos.correo}`} className="yt"><i className='bx bxl-gmail'></i></a>
                <a target='_blank' href={`https://api.whatsapp.com/send?phone=${datos.codInt}${datos.telefono}`} className="what"><i className='bx bxl-whatsapp'></i></a>
            </div>
        </div>





    </>)
}

export default CardUser