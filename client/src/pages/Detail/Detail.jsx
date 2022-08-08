import { useParams } from "react-router-dom";
import ProductDetail from "../../components/ProductDetail/ProductDetail"
import SearchNavBar from "../../components/SearchNavBar/SearchNavBar";
import Breadcrumbs from "../../components/Shared/Breadcrumb/Breadcrumb"
import { useFetchItemDetails } from "../../hooks/useFetch";

const Detail = () => {
  let { id } = useParams();
  
  const { data, loading } = useFetchItemDetails( id );
  const { item, category_path } = data;

  const items = category_path || [];
  
  const loadingClass = loading ? 'meli-content-loading meli-container' : 'meli-container';
  if(item){
    document.title = `${item.title} | Mercado Libre`
  }
  return(
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
