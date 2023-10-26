import axios from 'axios';
import React, { useEffect, useState } from 'react'

function getListVendedores() {

    const [info, setInfo] = useState([])


    useEffect(() => {
        async function getInfoVendedores() {
            const { data } = await axios.get('/api/RegisterUsers')
            setInfo(data);
            
        }
    
        getInfoVendedores()
        return
    
    
    }, [])


  return {info}
}

export default getListVendedores