import { useLocation } from 'react-router-dom'
import SearchNavBar from '../../components/SearchNavBar/SearchNavBar.jsx'
import ProductList from '../../components/ProductList/ProductList.jsx'
import { useFetchResults } from '../../hooks/useFetch'
import Breadcrumbs from '../../components/Shared/Breadcrumb/Breadcrumb.jsx'
import './Result.scss'
import useSEO from '../../hooks/useSEO.js'
import meli from '../../assets/images/meli.png'

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

const Result = () => {
  const query = useQuery()
  const searchQuery = query.get('search')
  const { data, loading } = useFetchResults(searchQuery)
  const loadingClass = loading ? 'meli-content-loading meli-container' : 'meli-container'

  const title = `${searchQuery} | Mercado libre`
  const description = `Envíos Gratis en el día ✓ Comprá ${searchQuery} en cuotas sin interés! Conocé nuestras increíbles ofertas y promociones en millones de productos.`
  const ogTitle = `${searchQuery} | Mercado libre`
  const ogDescription = `Envíos Gratis en el día ✓ Comprá ${searchQuery} en cuotas sin interés! Conocé nuestras increíbles ofertas y promociones en millones de productos.`
  const ogImage = meli

  useSEO({ title, description, ogTitle, ogImage, ogDescription })

  return (
        <main className="meli-page-results">
            <SearchNavBar />
            <div className={loadingClass}>
                <Breadcrumbs items={data.categories} />
                <ProductList search={searchQuery} items={data.items} />
            </div>
        </main>
  )
}

export default Result
