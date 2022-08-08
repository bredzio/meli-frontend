import SearchNavBar from '../../components/SearchNavBar/SearchNavBar.jsx'

const Home = () => {
  document.title = 'Mercado libre Argentina - Envíos Gratis en el día'
  return (
    <>
      <main className="meli-page-home">
        <SearchNavBar/>
      </main>
    </>
  )
}

export default Home
