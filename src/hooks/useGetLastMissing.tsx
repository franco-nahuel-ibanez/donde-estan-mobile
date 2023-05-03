import { Alert, ToastAndroid } from 'react-native'
import { useState, useEffect } from "react";
import axios from "axios";
import { IMissing, LastMissingResponse } from '../interfaces';


export const useGetLastMissing = () => {
  const [lastMissing, setLastMissing] = useState<IMissing[]>([]);

  const showAlert = (title: string, message: string) => {
    Alert.alert(title, message, [
      {
        text: "Ok",
      },
    ]);
  };

  const showToast = (message: string) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };
  
  useEffect(() => {
    const getLastMissing = async () => {
      try {
        const url = "http://192.168.0.103:3000/api/missing/last";
    
        const { data } = await axios.get<LastMissingResponse>(url);
        console.log(data)
        setLastMissing(data.data);
      } catch (error) {
        showToast("Error al obtener los últimos desaparecidos")
        // showAlert("Error", "Error al obtener los últimos desaparecidos");
      }
    };

    getLastMissing();
  }, []);

  return {
    lastMissing,
  }
}
