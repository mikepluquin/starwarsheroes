import { create } from 'apisauce'

const config = create({
  baseURL: 'https://swapi.co/api/',
  timeout: 20000
})

export const login = (attributes) => {
  return config
    .post(
      'auth/login',
      {
        email: attributes.email, password: attributes.password
      }
    )
}

export const fetchPeoples = () => {
  return config.get('people')
}