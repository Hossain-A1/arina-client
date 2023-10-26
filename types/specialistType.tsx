import { packagesType } from "./packagesType";

export type specialistType = {
  _id:string;
  name: string;
  designation: string;
  bio: string;
  photoUrl: string;
  dateOfBirth: string;
  beautyPackages: packagesType[];
  createdAt:string;
  updatedAt:string;
  __v:number
} 