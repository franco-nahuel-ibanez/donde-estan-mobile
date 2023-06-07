import {useState} from 'react';
import { IRegisterValues } from '../interfaces';
import axios from 'axios';

export const useRegister = async (data: IRegisterValues) => {

  const imageToBlob = async (uri: string) => {
    try {

    } catch (error) {
      console.log('algo salio mal');
    }
  }

  const newImage = await imageToBlob(data.image?.uri || '');

  // console.log(newImage)

  const formData: any = new FormData();

  formData.append('name', data.name);
  formData.append('lastName', data.lastName);
  formData.append('age', data.age.toString());
  formData.append('dateOfDisappearance', data.dateOfDisappearance.toString());
  formData.append('placeOfDisappearance', data.placeOfDisappearance);
  formData.append('description', data.description);
  // formData.append('image', {
  //   uri: data.image?.uri,
  //   type: data.image?.type,
  //   name: data.image?.name,
  // });
  formData.append('image', newImage, "image.jpg");
  formData.append('phone', data.phone.toString());
  formData.append('email', data.email);

  console.log(formData.get('image'));

  axios.post('http://192.168.0.103:3000/api/missing', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  })
}
