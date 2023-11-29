import axios from 'axios';
import { useEffect, useState } from 'react'
import { toast } from 'react-toast';

function getListVendedores() {

    const [info, setInfo] = useState([])


    useEffect(() => {
        async function getInfoVendedores() {
            try {
                const { data } = await axios.get('/api/RegisterUsers')
                setInfo(data);
            } catch (error) {
                toast.error('Error, por favor intentalo mas tarde')
                console.log(error);
            }


        }

        getInfoVendedores()
        return


    }, [])


    return { info }
}

export default getListVendedores