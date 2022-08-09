import SearchNavBar from '../../components/SearchNavBar/SearchNavBar.jsx'
import useSEO from '../../hooks/useSEO.js'
import meli from '../../assets/images/meli.png'

const Home = () => {
  const title = 'Mercado libre Argentina - Envíos Gratis en el día'
  const description = 'Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles.'
  const ogTitle = 'Mercado libre Argentina - Envíos Gratis en el día'
  const ogDescription = 'Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles.'
  const ogImage = meli
  useSEO({ title, description, ogTitle, ogImage, ogDescription })

  return (
    <>
      <main className="meli-page-home">
        <SearchNavBar/>
      </main>
    </>
  )
}

export default Home
