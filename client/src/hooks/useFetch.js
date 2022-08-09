import { useState, useEffect } from 'react'
import ApiFetchService from '../helpers/ApiFetchService'

export const useFetchResults = (search) => {
  const [state, setState] = useState({
    data: {},
    loading: true
  })

  useEffect(() => {
    (async () => {
      const data = await ApiFetchService.getResults(search)

      setState({
        data,
        loading: false
      })
    })()
  }, [search])

  return state
}

export const useFetchItemDetails = (id) => {
  const [state, setState] = useState({
    data: {},
    loading: true
  })

  useEffect(() => {
    (async () => {
      const data = await ApiFetchService.getItemDetails(id)

      setState({
        data,
        loading: false
      })
    })()
  }, [id])

  return state
}
