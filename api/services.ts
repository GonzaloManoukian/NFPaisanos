import axios from 'axios'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
console.log('API_BASE_URL', API_BASE_URL)
const config = {
  headers: {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    'Access-Control-Allow-Origin': '*'
  }
}

export const getEthUsdPrice = () => {
  return axios.get(`${API_BASE_URL}/eth-price`, config)
}

export const getPopularAuctions = () => {
  return axios.get(`${API_BASE_URL}/nfpaisanos/popular`, config)
}

export const getAllAuctions = () => {
  return axios.get(`${API_BASE_URL}/nfpaisanos/aunctions`, config)
}
