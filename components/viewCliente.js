import CardUser from './cardUser'

function ViewCliente({info}) {
    return (
        <>
            <style jsx>
                {`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          .cont-main-user {
           
            width: 100%;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 15px;
            padding: 20px 0;
          }
        
        `}
            </style>
            <main className="cont-main-user">

                {info.map((x) => (
                <CardUser key={x.id} datos={x}/>
                ))}
            </main>

        </>
    )
}

export default ViewCliente