import debounce from 'just-debounce-it'
import {useState} from 'react'

function logFilterProdUsersInput(infoList) {

    let [textInputFilter, setTextInputFilter] = useState('')
    let [cardFilter, setCardFilter] = useState([])
  
    const debounceProdFilter = debounce((text) => {
  
      let cardF = infoList.filter(x => x.nombre.toLowerCase().includes(text.toLowerCase()) )
  
      if (cardF.length != 0) {
        setCardFilter(cardF)
      } else {
        setCardFilter([])
      }
  
  
    }, 500)
  
  
    const Change = ({ target: { value } }) => {
      setTextInputFilter(value)
      debounceProdFilter(value)
    }
  

  return { Change, textInputFilter, cardFilter, setCardFilter}
}

export default logFilterProdUsersInput