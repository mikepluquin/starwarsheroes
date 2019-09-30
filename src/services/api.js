import { create } from 'apisauce'

const api = create({
  baseURL: 'https://swapi.co/api/',
  timeout: 20000
})

export const fetchPeoples = (params) => {
  return api.get('people/', params)
}