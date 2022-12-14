import { currencyFormat } from "../../helpers/currencyFormat";
import './ProductDetail.scss';

export const ProductDetail = ({ item }) => {
    if(!item) return (<div></div>);

    const symbol = item.price.symbol || "$";
    const price = currencyFormat(item.price.amount, symbol);
    const condition = item.condition === 'new' ? 'Nuevo' : 'Usado';

    return (
        <article className="meli-item-details">

            <div className="meli-grid">
                <div className="meli-column-picture">
                    <div>
                        <img src={item.picture} alt={item.title} />
                    </div>
                </div>

                <div className="meli-column-details">
                    <div>
                        <div className="meli-conditions-and-sold-quantity">{condition} - {item.sold_quantity} vendidos</div>
                        <h1>{item.title}</h1>
                        <div className="meli-price">{price}<sup>00</sup></div>

                        <button className="meli-button-primary meli-width-1-1">Comprar</button>
                    </div>
                </div>
            </div>

            <div className="meli-description">
                <h2>Descripción del producto</h2>
                <div dangerouslySetInnerHTML={{ __html: item.description.replace(/(\r\n|\n|\r)/gm, "<br>") }} />
            </div>

        </article>
    );
}

export default ProductDetail;