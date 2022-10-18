import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const CatContext = React.createContext();

export const CatConsumer = CatContext.Consumer;

const CatProvider = ({ children }) => {
  const [cats, setCats] = useState([])
  const [randomCat, setRandomCat] = useState(null)
  const [errors, setErrors] = useState(null)
  const [pagination, setPagination] = useState(1)
  const [headers, setHeaders] = useState({})
  const navigate = useNavigate()

  const getAllCats = (page = 1) => {
    axios.get(`/api/cats?page=${page}`)
      .then(res => {
        const { data, headers } = res 
        const totalPages = Math.ceil(headers['x-total'] / headers['x-per-page'])
        setPagination(totalPages)
        setCats(data)
        setHeaders(headers)
      })
      .catch(err => {
        setErrors({ 
          variant: 'danger',
          msg: err.response.data.errors[0]
        })
      })
  }

  const addCat = (cat) => {
    axios.post('/api/cats', { cat })
      .then(res => setCats([...cats, res.data]))
      .catch(err => {
        setErrors({ 
          variant: 'danger',
          msg: Object.keys(err.response.data.errors)[0] + " " + Object.values(err.response.data.errors)[0][0]
        })
      })
  }

  const updateCat = (id, cat) => {
    axios.put(`/api/cats/${id}`, { cat })
      .then( res => {
        const newUpdatedCats = cats.map( c => {
          if (c.id == id) {
            return res.data 
          }
          return c 
        })
        setCats(newUpdatedCats)
        navigate('/cats')
      })
      .catch(err => {
        setErrors({ 
          variant: 'danger',
          msg: Object.keys(err.response.data.errors)[0] + " " + Object.values(err.response.data.errors)[0][0]
        })
      })
  }

  const deleteCat = (id) => {
    axios.delete(`/api/cats/${id}`)
      .then(res => {
        setCats(cats.filter(c => c.id !== id))
      })
      .catch(err => {
        setErrors({ 
          variant: 'danger',
          msg: err.response.data.errors[0]
        })
      })
  }

  const getRandomCat = () => {
    axios.get('/api/randomcat')
      .then(res => {
        setRandomCat(res.data)
      })
      .catch(err => {
        setErrors({ 
          variant: 'danger',
          msg: err.response.data.errors[0]
        })
      })
  }

  return (
    <CatContext.Provider value={{
      cats, 
      errors, 
      setErrors, 
      getAllCats,
      addCat,
      updateCat, 
      deleteCat, 
      randomCat, 
      getRandomCat,
      pagination,
      headers, 
    }}>
      { children }
    </CatContext.Provider>
  )
}

export default CatProvider;