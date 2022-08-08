import { ProductListItem } from './ProductListItem/ProductListItem'
import './ProductList.scss'

export const ProductList = ({ items = [] }) => {
  const list = items.map((i) => {
    return (
            <div key={i.id}>
                <ProductListItem data={i}/>
            </div>
    )
  })

  return (
    <section className="meli-results-list">
        <div className="meli-grid meli-child-width-1-1">
            {list.length ? list : <div>No hay publicaciones que coincidan con tu búsqueda.</div>}
        </div>
    </section>
  )
}

export default ProductList
