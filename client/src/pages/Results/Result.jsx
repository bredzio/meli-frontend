import { useLocation } from 'react-router-dom'
import SearchNavBar from '../../components/SearchNavBar/SearchNavBar.jsx'
import ProductList from '../../components/ProductList/ProductList.jsx'
import { useFetchResults } from '../../hooks/useFetch'

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

const ResultsView = () => {
  const query = useQuery()
  const searchQuery = query.get('search')
  const { data, loading } = useFetchResults(searchQuery)
  const loadingClass = loading ? 'meli-content-loading meli-container' : 'meli-container'
  document.title = `${searchQuery} | Mercado libre`

  return (
        <main className="meli-page-results">
            <SearchNavBar />
            <div className={loadingClass}>
                <ProductList search={searchQuery} items={data.items} />
            </div>
        </main>
  )
}

export default ResultsView