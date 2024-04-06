import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from 'next/router'


const CarruselVendedores = ({ items, clickIcon }) => {
    // const [isMobile, setIsMobile] = useState(false);
    const [numVisibleItems, setNumVisibleItems] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(0);

    const router = useRouter()

    let clickLink = (e, datos) => {
        e.preventDefault()
        clickIcon(true)
        setTimeout(() => {
            clickIcon(false)
            router.push(`/RolCliente/${datos.id}/?idC=` + localStorage.getItem('inf') + '&nom=' + datos.nombre)
        }, 2500)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1200) {
                setNumVisibleItems(5);
            } else if (window.innerWidth >= 768) {
                setNumVisibleItems(2);
            } else {
                setNumVisibleItems(1);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    //     const handleResize = () => {
    //         setIsMobile(window.innerWidth <= 768);
    //     };
    //     handleResize();
    //     window.addEventListener("resize", handleResize);
    //     return () => window.removeEventListener("resize", handleResize);
    // }, []);

    const nextItem = () => {
        setCurrentIndex(prevIndex => (prevIndex + numVisibleItems >= items.length ? 0 : prevIndex + numVisibleItems));
    };

    const prevItem = () => {
        setCurrentIndex(prevIndex => (prevIndex - numVisibleItems < 0 ? items.length - numVisibleItems : prevIndex - numVisibleItems));
    };

    return (<>
        <style jsx>
            {`

.social_icons a {
    background-color: #ecf0f3;
    border-radius: 10px;
    box-shadow: -3px -3px 7px #FFFFFF, 3px 3px 5px #ceced1;
}

.icon {
    margin-left: 21rem;
}

        
        .carrusel__titulo {
            text-align: center;
            font-size: 25px;
            font-weight: 500;
            text-transform: uppercase;
        }
        .carrusel {
            display: flex;
            justify-content: center;
            margin-top: 20px;
            gap: 20px;
            position: relative;
        }
        
        .carrusel_bg {
            background-color: #ffffff;
            border-radius: 20px;
            border: 1px solid #272727;
            width: 75%;
        }
        .carrusel__image {
            padding: 10px;
        }
        .carrusel__img {
            width: 200px;
            height: 200px;
            object-Fit: cover;
            margin: 0 auto;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
        }
        .carrusel__footer {
            background-color: #F0F0F0;
            padding: 20px;
            border-radius: 20px;
        }
        
        .carrusel__name {
            font-size: 18px;
            font-weight: 500;
            color: #808080;
        }
        
        .carrusel__marca {
            color: #272727;
            margin-top: 10px;
        }
        .carrusel__detalle {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 3;
            text-align: justify;
            margin-top: 10px;
        }
        .flex__carrusel {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 10px;
        }
        .carrusel__precio {
            color: #0e0b0b;
            font-size: 20px;
        }
        .carrusel__btn {
            background-color: #F87831;
            color: #FFFFFF;
            padding: 5px;
            border-radius: 10px;
            border: 0.5px solid transparent;
        }
        .carrusel__btn:hover {
            background-color: #FFFFFF;
            color: #F87831;
            border-color: #F87831;
        }
        
        .carrusel__buttons {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
            justify-content: space-between;
            width: 100%;
        }
        
        .carrusel__button {
            font-size: 30px;
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 10px;
        }
        
        
        /*media querys carrusel */
        @media (min-width: 1240px) {
            .carrusel_bg {
                width: 15%;
            }
        }

        .social_icons {
            margin: 15px 0 10px 0;
        }
        
        .social_icons a {
            height: 40px;
            width: 40px;
            display: inline-flex;
            margin: 0 .5rem .0rem .5rem;
            border-radius: 50%;
            position: relative;
        }
      
        .social_icons a i {
            font-size: 2rem;
            text-align: center;
            width: 100%;
            height: 100%;
            line-height: 2.4rem;
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
        
        `}
        </style>
        <div>
            <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{ position: "relative" }}
            >
                <div className="carrusel">
                    {items.slice(currentIndex, currentIndex + numVisibleItems).map((item, index) => (


                        <div style={{ position: 'relative' }}  key={index} className="carrusel_bg">
                            <div onClick={(e) => { clickLink(e, item) }}>
                            <div className="carrusel__image">
                                <img src={item.imagen} alt={item.nombre} className="carrusel__img" />
                            </div>
                            <div className="carrusel__footer">
                                <h2 className="carrusel__name">{item.nombre}</h2>
                                <h3 className="carrusel__marca">{`${item.ciudad} | ${item.pais}` }</h3>
                                <p className="carrusel__detalle">{item.correo}</p>
                                <div className="flex__carrusel">
                                    <p className="carrusel__precio">1</p>
                                </div>
                            </div>
                            </div>

                            <div style={{ position: 'absolute', bottom: '0', width: '100%', display: 'flex', justifyContent: 'space-between' }} className="social_icons">
                                <a href={`mailto:${item.correo}`} className="yt"><i className='bx bxl-gmail'></i></a>
                                <a target='_blank' href={`https://api.whatsapp.com/send?phone=${item.codInt}${item.telefono}`} className="what"><i className='bx bxl-whatsapp'></i></a>
                            </div>
                        </div>





                    ))}
                </div>
                <div className="carrusel__buttons">
                    <button onClick={prevItem} className="carrusel__button">{"<-"}</button>
                    <button onClick={nextItem} className="carrusel__button">{'->'}</button>
                </div>

            </motion.div>
            {/* <div>
                <button onClick={prevItem} ><i class="fa-solid fa-angle-left"></i></button>
                <button onClick={nextItem} ><i class="fa-solid fa-angle-right"></i></button>
            </div> */}

        </div>
    </>

    );
};

export default CarruselVendedores;



// const [currentIndex, setCurrentIndex] = useState(0);

//     const nextItem = () => {
//         setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
//     };

//     const prevItem = () => {
//         setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
//     };

//return (
// <div style={{ position: "relative" }}>
//     <motion.div
//         key={currentIndex}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.5 }}
//     >
//         <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
//             <img src={items[currentIndex].image} alt={items[currentIndex].name} style={{ width: "200px", height: "200px", objectFit: "cover", borderRadius: "50%" }} />
//             <h2>{items[currentIndex].name}</h2>
//             <p>{items[currentIndex].detail}</p>
//         </div>
//     </motion.div>
//     <button onClick={prevItem} style={{ position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)" }}>Anterior</button>
//     <button onClick={nextItem} style={{ position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)" }}>Siguiente</button>
// </div>
// <div>
//     <motion.div
//         key={currentIndex}
//         initial={{opacity: 0}}
//         animate= {{opacity: 1}}
//         exit={{opacity: 0}}
//         transition={{duration: 0.5}}
//     >
//         {items[currentIndex]}
//     </motion.div>
//     <button onClick={prevItem}>Anterior</button>
//     <button onClick={nextItem}>Siguiente</button>
// </div>
//);