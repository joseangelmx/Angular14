export interface User {
 email: string;
 password: string;
 firstName:string;
 lastName: string;
 phoneNumber:string;
 status:boolean;
}
export interface signIn{
  email:string;
  password:string;
}
export interface signUp{

}
export interface signInResponse{
  title:string;
  status:number;
  message:string;
}
