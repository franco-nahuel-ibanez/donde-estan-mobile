
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

export interface IImage {
  uri: string;
  name?: string | null | undefined;
  type?: string | null | undefined;
}

export interface IRegisterValues {
  name: string;
  lastName: string;
  age: number;
  dateOfDisappearance: string | Date;
  placeOfDisappearance: string;
  description: string;
  image: IImage | null | undefined;
  phone: string;
  email: string;
}