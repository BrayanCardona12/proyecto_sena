import axios from 'axios'
import { useEffect, useRef, useState } from 'react'

function logGetInfoUser() {
    let [datos, setDatos] = useState([])

    useEffect(() => {
        async function getInfo() {
            const { data } = await axios.get(`/api/Login?id=${localStorage.getItem('inf')}`)

            setDatos(data)
        }

        getInfo()


    }, [])


    return { info: datos }
}

export default logGetInfoUser