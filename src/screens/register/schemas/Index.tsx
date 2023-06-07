import {object, string, number, date, mixed, } from 'yup';

export const register = object().shape({
  name: string().required('El nombre es requerido'),
  lastName: string().required('El apellido es requerido'),
  age: string().required('La edad al momento de ausencia es requerida'),
  dateOfDisappearance: date().required('La fecha de ausencia es requerida'),
  placeOfDisappearance: string().required('El lugar de ausencia es requerido'),
  description: string().required('La descripción es requerida'),
  // image: string().required('La imagen es requerida'),
  image: mixed().required('La imagen es requerida'),
  phone: number().required('El teléfono es requerido'),
  email: string().email().required('El email es requerido'),
});

export const prueba = object().shape({
  name: string().required('El nombre es requerido'),
  lastName: string().required('El apellido es requerido'),
});

