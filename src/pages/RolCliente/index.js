import axios from 'axios'
import ScreenError from 'components/screenError'
import ViewRolCliente from 'components/viewRolCliente'
import EffectDarkModeStatus from 'log/EffectDarkModeStatus'
import { host } from 'log/const'
import LogCloseSesion from 'log/logCloseSesion'
import logFilterProdUsersInput from 'log/logFilterProdUsersInput'
import LogSesionStatus from 'log/logSesionStatus'
import { useState } from 'react'


function HomeCliente({ data }) {

  let [darkMode, setDarkMode] = useState(false)

  EffectDarkModeStatus(setDarkMode)

  const { sesionActive } = LogSesionStatus('trueC')

  let { closeSesion } = LogCloseSesion()

  let { Change, textInputFilter, cardFilter } = logFilterProdUsersInput(data)


  return (
    <>{
      sesionActive && !data.error ?
        <ViewRolCliente
          infoListV={data}
          closeSesion={closeSesion}
          Change={Change}
          textInputFilter={textInputFilter}
          cardFilter={cardFilter}
          darkMode={darkMode}
          setDarkMode={setDarkMode}

        /> :
        <ScreenError/>
    }
    </>
  )
}

HomeCliente.getInitialProps = async (ctx) => {

  try {
    const { data } = await axios.get(`${host}/api/RegisterUsers`);
   
    return {
      data: JSON.parse(JSON.stringify(data))

    };
  } catch (error) {

    return {
      data: {
        error: true
      }
    }

  }
}

export default HomeCliente