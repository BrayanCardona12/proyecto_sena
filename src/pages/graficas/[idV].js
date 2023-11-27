import { useState } from "react";
import { Bar, Line, Pie, Doughnut} from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import axios from "axios";


function graficas(props) {

   


    let { data: { data1, data2, data3, data4 } } = props;


    const [userData1, setUserData1] = useState({
        labels: data1.map((y) => y.idPedido),
        datasets: [{
            label: 'Ganancias',
            data: data1.map((y) => y.totalP),
            backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,

        }]
    })

    const [userData2, setUserData2] = useState({
        labels: data2.map((y) => y.estadoP),
        datasets: [{
            label: 'Cant - Pedidos',
            data: data2.map((y) => y.cantidad_registros),
            backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,

        }]
    })

    
    const [userData3, setUserData3] = useState({
        labels: data3.map((y) => y.estado),
        datasets: [{
            label: 'Ganancias',
            data: data3.map((y) => y.cantidad_registros),
            backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,

        }]
    })


    const [userData4, setUserData4] = useState({
        labels: data4.map((y) => y.nombre),
        datasets: [{
            label: 'Cant - Productos',
            data: data4.map((y) => y.cantidad),
            backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,

        }]
    })

    return (
        <>
            <style jsx>
                {`
           

           * {
           padding: 0;
           margin: 0;
           box-sizing: border-box;
           font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
       }


       .linea {
        width: 100%;
        border: 1px dashed black;
        margin: 30px 5px 30px 5px;
    }

    .lineaV {
        height: 440px;
        border: 1px dashed black;

    }

            `}
            </style>

            <h1 style={{ textAlign: 'center' }}>Mi Negocio</h1>
            <div>


                <div style={{width:'100%',display:'flex' ,justifyContent: 'space-evenly', alignItems:'center' ,flexWrap: 'wrap'}}>
                  
                  
                    <div style={{width:'100%', maxWidth:'700px'}}>
                        <h5 style={{ textAlign: 'center' }}>Ganancias | Pedidos</h5>
                        <Bar data={userData1} />

                    </div>

                 

                    <div style={{width:'100%', maxWidth:'450px'}}>
                        <h5 style={{ textAlign: 'center' }}>Pedidos | Estados</h5>
                        <Pie data={userData2} />
                    </div>
                </div>




                <div className="linea"></div>

                <div style={{width:'100%',display:'flex' ,justifyContent: 'space-evenly', alignItems:'center' ,flexWrap: 'wrap'}}>
                   
                    <div style={{width:'100%', maxWidth:'450px'}}>
                        <h5 style={{ textAlign: 'center' }}>Carrito | Productos</h5>
                    <Doughnut data={userData3} />

                    </div>

                   
                    <div style={{width:'100%', maxWidth:'700px'}}>
                        <h5 style={{ textAlign: 'center' }}>Cantidad | Productos</h5>
                        <Line data={userData4} />
                    </div>

                   
                 
                </div>

            </div>


        </>


    )

}

export default graficas

graficas.getInitialProps = async (ctx) => {

    const response1 = await axios.get(`http://localhost:3000/api/grafico/${ctx.query.idV}`);
    const response2 = await axios.post(`http://localhost:3000/api/grafico/${ctx.query.idV}`);
    const response3= await axios.put(`http://localhost:3000/api/grafico/${ctx.query.idV}`);
    const response4 = await axios.patch(`http://localhost:3000/api/grafico/${ctx.query.idV}`);

    // const data1 = response1.data;
    // const data2 = response2.data;
    // const data3 = response3.data;

    const info = {
        data1: response1.data,
        data2: response2.data,
        data3: response3.data,
        data4: response4.data
    }



    return {
        data: JSON.parse(JSON.stringify(info))
    };
}