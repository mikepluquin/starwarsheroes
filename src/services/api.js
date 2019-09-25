import { create } from 'apisauce'

const config = create({
  baseURL: 'https://swapi.co/api/',
  timeout: 20000
})

export const fetchPeoples = (params) => {
  return config.get('people/', params)
}