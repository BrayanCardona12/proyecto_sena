import { useEffect } from 'react'

function EffectDarkModeStatus(setDarkMode) {

    useEffect(() => {

        setDarkMode(localStorage.getItem('theme') == 'dark')
        return
      }, [])

    return 
}

export default EffectDarkModeStatus