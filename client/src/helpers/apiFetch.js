import environment from '../environments/environment'

export const getResults = async (search) => {
  const PATH = environment.FRONTBaseURL
  const url = `${PATH}/api/items?q=${encodeURI(search)}`
  const resp = await fetch(url)
  const data = await resp.json()
  return data
}

export const getItemDetails = async ( id ) => {
  const PATH = environment.FRONTBaseURL
  const url = `${PATH}/api/items/${id}`;
  const resp = await fetch( url );
  const data = await resp.json();
  return data;
}
