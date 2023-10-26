import { packagesType } from "./packagesType";
import { userType } from "./userType";

export type bookingType = {
  _id:string;
  user: userType;
  beautyPackage: packagesType;
  createdAt:string;
  updatedAt:string;
  __v:number
}