import { Link } from 'react-router-dom'
import { currencyFormat } from '../../../helpers/currencyFormat'
import './ProductListItem.scss'

export const ProductListItem = ({ data }) => {
  const url = `/items/${data.id}`
  const freeShipping = data.free_shipping ? 'meli-item-free-shipping' : 'meli-item-no-free-shipping'
  const condition = data.condition === 'new' ? 'Nuevo' : 'Usado'
  const symbol = data.price.symbol || '$'
  const price = currencyFormat(data.price.amount, symbol)

  return (
        <article className="meli-results-list-item">
            <div className="meli-grid">
                <div>
                    <div className="meli-item-picture">
                        <Link to={url}>
                            <img src={data.picture} alt={data.title} width="180" height="180" />
                        </Link>
                    </div>
                </div>

                <div>
                    <div className="mali-item-price-wrapper">
                        <div className="meli-item-price">{price}<sup>00</sup><span className={freeShipping}></span></div>
                        <div className="meli-item-condition">{condition}</div>
                    </div>
                    <h2>
                        <Link to={url}>{data.title}</Link>
                    </h2>
                </div>
            </div>
        </article>
  )
}

export default ProductListItem
