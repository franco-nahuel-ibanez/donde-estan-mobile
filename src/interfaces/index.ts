
export interface LastMissingResponse {
  data: IMissing[];
}

export interface IMissing {
  id:                   number;
  name:                 string;
  lastName:             string;
  age:                  number;
  dateOfDisappearance:  string;
  placeOfDisappearance: string;
  description:          null | string;
  image:                null | string;
  phone:                string;
  email:                null | string;
  createdAt:            null;
  updatedAt:            null;
}

export interface IRegisterValues {
  name: string;
  lastName: string;
  age: number;
  dateOfDisappearance: string | Date;
  placeOfDisappearance: string;
  description: string;
  image: string;
  phone: string;
  email: string;
}