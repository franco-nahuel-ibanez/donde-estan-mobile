import { useState } from 'react';
import { IRegisterValues } from '../interfaces';
import axios from 'axios';
import * as FileSystem from 'expo-file-system';
import { ToastAndroid } from 'react-native';

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  
  const showToast = (message: string) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const onSubmit = async (data: IRegisterValues) => {
    setLoading(true);
    const imageBlob = await FileSystem.getInfoAsync(data.image);
    const imageUri = imageBlob.uri;
  
    const formData: any = new FormData();
  
    formData.append('name', data.name);
    formData.append('lastName', data.lastName);
    formData.append('age', data.age.toString());
    formData.append('dateOfDisappearance', data.dateOfDisappearance.toString());
    formData.append('placeOfDisappearance', data.placeOfDisappearance);
    formData.append('description', data.description);
    formData.append('phone', data.phone.toString());
    formData.append('email', data.email);
  
    const imageFile = {
      uri: imageUri,
      name: 'image.jpg',
      type: 'image/jpeg'
    };
  
    formData.append('image', imageFile);
  
    try {
      const response = await axios.post('http://192.168.0.103:3000/api/missing/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      showToast('Error al registrar el desaparecido');
    }
    finally {
      setLoading(false);
    }
  }

  return {
    onSubmit,
    loading,
  };
};