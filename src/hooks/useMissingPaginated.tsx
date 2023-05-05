import axios from 'axios'
import {useState} from 'react'
import { IMissing, LastMissingResponse } from '../interfaces'
import { ToastAndroid } from 'react-native'

interface Filters {
  page?: number,
  search?: string,
  size?: number,
}



export const useMissingPaginated = (filters?: Filters) => {
  const [loading, setLoading] = useState(false)
  
  const showToast = (message: string) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

    const getMissing = async (filters?: Filters) => {
      console.log(filters)
      try {
        setLoading(true)
        const url = 'http://192.168.0.103:3000/api/missing/'
        const {data} = await axios.get<LastMissingResponse>(url, {
          params: filters ? filters : null
        })
        console.log(data.data)
        setLoading(false)
        return data.data
      } catch (error) {
        axios.isCancel(error)
        setLoading(false)
        showToast("Error al obtener los últimos desaparecidos")
      }
    }
  
  return {
    loading,
    setLoading,
    getMissing,
  }
}