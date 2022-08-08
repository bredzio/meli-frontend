import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/images/Logo_ML.png'
import './SearchNavbar.scss'

const SearchNavBar = () => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue !== '') navigate(`/items?search=${decodeURI(inputValue)}`)
    else navigate('/')
  }

  return (
        <header className="meli-search-navbar">
            <div className="meli-container">
                <div className="meli-grid meli-flex-middle">
                    <div className="meli-width-auto">
                        <a className="meli-search-navbar-logo" href="/">
                            <img src={logo} alt="Mercadolibre" height="36" width="56" />
                        </a>
                    </div>
                    <div className="meli-width-expand">
                        <div>
                            <form className="meli-search-navbar-form" onSubmit={ handleSubmit }>
                                <input
                                    type="text"
                                    value={ inputValue }
                                    onChange={ handleInputChange }
                                    placeholder="Nunca dejes de buscar"
                                    className="meli-search-input"
                                />
                                <button className="meli-search-button" type="submit"></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
  )
}

export default SearchNavBar
