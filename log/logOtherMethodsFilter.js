import { formatter } from "log/formatterInt"
import { useState } from "react"

function logOtherMethodsFilter(data1, cardFilter, setCardFilter) {

    let [statusFilter, setStatusFilter] = useState(false)

    const filterPriceDown = () => {

        data1.sort(function (a, b) { return a.precio - b.precio })
        cardFilter.sort(function (a, b) { return a.precio - b.precio })
        setStatusFilter(!statusFilter)
    
    
      }
    
      const filterPriceUp = () => {
    
        data1.sort(function (a, b) { return b.precio - a.precio })
        cardFilter.sort(function (a, b) { return b.precio - a.precio })
    
        setStatusFilter(!statusFilter)
      }
    
      const filterStockUp = () => {
    
        data1.sort(function (a, b) { return b.cantidad - a.cantidad })
        cardFilter.sort(function (a, b) { return b.cantidad - a.cantidad })
    
        setStatusFilter(!statusFilter)
      }
    
      const filterStockDown = () => {
    
        data1.sort(function (a, b) { return a.cantidad - b.cantidad })
        cardFilter.sort(function (a, b) { return a.cantidad - b.cantidad })
    
        setStatusFilter(!statusFilter)
      }
    
      const filterCategoria = (e) => {
    
        let i = data1.filter(x => x.categoria.toLowerCase() == e.target.textContent.toLowerCase())
    
        setCardFilter([...i])
    
      }
    
    
    const total = (d) => {
      let total = 0
      for (let i of d) {
        total += i.precio * i.cantidadProducto
      }
    
      return formatter.format(total)
    }

  return {
    filterPriceDown,
    filterPriceUp,
    filterStockUp,
    filterStockDown,
    filterCategoria,
    total
}
}

export default logOtherMethodsFilter