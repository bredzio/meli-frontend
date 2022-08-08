import React, { Suspense, lazy } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Loading from './components/Shared/Loading/Loading'

function App () {
  const HomeView = lazy(() => import('./pages/Home/Home'))
  const ResultView = lazy(() => import('./pages/Results/Result'))
  const DetailView = lazy(() => import('./pages/Detail/Detail'))

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route exact path="" element={<HomeView/>}/>
          <Route path="/items/:id" element={<DetailView/>}/>
          <Route path="/items" element={<ResultView/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
