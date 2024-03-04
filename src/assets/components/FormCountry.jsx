import './styles/FormCountry.css'
import { useRef } from "react"

const FormCountry = ({setCity}) => {
  
    const inputSearch = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    setCity(inputSearch.current.value.trim().toLowerCase());
    
    }
  
  
    return (
    <form className="search" onSubmit={handleSubmit} action="">
        <input className="search__input" ref={inputSearch} type="text" placeholder="Buscar ciudad" />
        <button className="search__btn" type="submit">🔍</button>
    </form>
  )
}


export default FormCountry
