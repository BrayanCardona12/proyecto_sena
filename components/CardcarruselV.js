import React from 'react'

function CardcarruselV({ clickLink, item, }) {
    return (
        <>

            <style jsx>
                {`
            .wrapper {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                width: 90%;
                margin: 0 auto;
                padding: 20px;
                background-color: #ECF0F3;
                box-shadow: 0 5px 10px rgba(31, 38, 135, 0.75);
                border: 1px solid rgba(255, 255, 255, 0.18);
                border-radius: 15px;
            }



            .social_icons .link_icon {
                background-color: #ecf0f3;
                border-radius: 10px;
                box-shadow: -3px -3px 7px #FFFFFF, 3px 3px 5px #ceced1;
            }
            
            .wrapper .img_area {
                margin: 0 auto;
                background-color: #e06b11;
                border-radius: 10px;
                box-shadow: -3px -3px 7px #FFFFFF, 3px 3px 5px #ceced1;
            }
            
            .wrapper .img_area {
                height: 120px;
                width: 120px;
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
            .inner_area .img_bg {
                height: 100%;
                width: 100%;
                border-radius: 50%;
                object-fit: cover;
            }
            
            .name {
                font-size: 23px;
                font-weight: 500;
                color: #31344b;
                margin: 10px 0 5px 0;
            }
            
            .about {
                font-weight: 400;
                color: #44476a;
                font-size: 16px;
            }
            .description {
                font-size: 14px;
                text-align: center;
                margin: 5px 0;
            }
            .rol {
                font-size: 20px;
                color: #5c5c5c;
                font-weight: 700;
            }
            
            .social_icons {
                margin: 15px 0 25px 0;
          
            }
            
            .social_icons .link_icon {
                height: 40px;
                width: 40px;
                display: inline-flex;
                margin: 0 7px;
                border-radius: 50%;
                position: relative;
            }
            
            .social_icons .link_icon:hover::before {
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
            
            .social_icons .link_icon .icon_networ {
                font-size: 20px;
                text-align: center;
                width: 100%;
                height: 100%;
                line-height: 40px;
                position: relative;
                z-index: 5;
            }
            
            .social_icons .yt .icon_networ {
                color: #FF0000;
            }
            .social_icons .what .icon_networ {
                color: #25D366;
            } 
            
            .icon {
                position: absolute; /* Añade posición absoluta para el botón */
                top: 10px; 
                right: 10px; 
                width: 40px; 
                height: 40px; 
            }
            
            .icon button {
                width: 100%; 
                height: 100%; 
            }
            
            .wrapper .icon .favorite_icon {
                font-size: 25px;
            }
            
            @media (min-width: 768px) {
                .wrapper {
                    width: 40%;
                }
            }
            @media (min-width: 1024px) {
                .wrapper {
                    width: 23%;
                    margin: unset;
                }
            }

            `}
            </style>

            <div  className='wrapper'>

                <div onClick={(e) => { clickLink(e, item) }} className='img_area'>
                    <div className='inner_area'>

                        <img className='img_bg' src={item.imagen} alt={item.nombre} />

                    </div>
                </div>
                <div onClick={(e) => { clickLink(e, item) }} style={{textAlign:'center'}}>
                          <div className='name'>{item.nombre}</div>
                <div className='about'>{`${item.ciudad} | ${item.pais}`}</div>
                <div className='rol'>Vendedor</div>
                </div>
          

                <div  className='social_icons'>
                <a href={`mailto:${item.correo}`} className='link_icon yt'><i className='bx bxl-gmail icon_networ'></i></a>
                <a target="_blank" href={`https://api.whatsapp.com/send?phone=${item.codInt}${item.telefono}`} className='link_icon what'><i className='bx bxl-whatsapp icon_networ'></i></a>
            </div>
            </div>
     
        </>

    )
}

export default CardcarruselV