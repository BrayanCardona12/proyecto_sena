import { useEffect } from 'react'

function EffectDarkModeStatus(setDarkMode) {

  useEffect(() => {

    let myName = document.querySelector('#myNom')
    let img = document.getElementById('imgUser')

    if (myName && img) {
      myName.textContent = localStorage.getItem('theName') ? localStorage.getItem('theName') : 'unknown'
      img.src = !localStorage.getItem('imgUser') ? 'unknown' : localStorage.getItem('imgUser')
    }


    setDarkMode(localStorage.getItem('theme') == 'dark')
    return
  }, [])

  return
}

export default EffectDarkModeStatus