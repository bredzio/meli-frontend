import { useState, useEffect } from 'react'
import { getResults } from '../helpers/apiFetch'

export const useFetchResults = (search) => {
  const [state, setState] = useState({
    data: {},
    loading: true
  })

  useEffect(() => {
    (async () => {
      const data = await getResults(search)

      setState({
        data,
        loading: false
      })
    })()
  }, [search])

  return state
}
