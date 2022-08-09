import { useParams } from 'react-router-dom'
import ProductDetail from '../../components/ProductDetail/ProductDetail'
import SearchNavBar from '../../components/SearchNavBar/SearchNavBar'
import Breadcrumbs from '../../components/Shared/Breadcrumb/Breadcrumb'
import { useFetchItemDetails } from '../../hooks/useFetch'
import useSEO from '../../hooks/useSEO'

const Detail = () => {
  const { id } = useParams()

  const { data, loading } = useFetchItemDetails(id)
  const { item, category_path } = data

  const items = category_path || []

  const loadingClass = loading ? 'meli-content-loading meli-container' : 'meli-container'

  const title = item ? `${item.title} | Mercado Libre` : 'Mercado Libre'
  const description = item ? `${item.description.substr(0, 200)}` : 'Mercado Libre'
  const ogTitle = item ? `${item.title} | Mercado Libre` : 'Mercado Libre'
  const ogDescription = item ? `${item.description.substr(0, 200)}` : 'Mercado Libre'
  const ogImage = item ? `${item.picture}` : ''

  useSEO({ title, description, ogTitle, ogImage, ogDescription })
  return (
    <main className="meli-page-details">
            <SearchNavBar/>
            <div className={loadingClass}>
                <Breadcrumbs items={items} />
                <ProductDetail item={item} />
            </div>
        </main>
  )
}

export default Detail
