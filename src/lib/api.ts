import axios from 'axios'

const API_URL = 'https://localhost:7165'

export const api = axios.create({
  baseURL: `${API_URL}/api`
})
