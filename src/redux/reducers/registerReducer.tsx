// import { createSlice,PayloadAction } from '@reduxjs/toolkit'
// import { AppDispatch } from '../configStore';
// import  {history} from '../../index'
// import { ACCESS_TOKEN, getStore, getStoreJSON, http, setCookie, setStore, setStoreJSON, USER_LOGIN } from '../../util/setting';

// export interface Register {
//   taiKhoan:        string;
//   matKhau:           string;
//   hoTen:            string;
//   soDT:          string;
//   maNhom:           string;
//   email:           string

// }

// export interface RegisterState {
//     arrRegister:Register []
// }

// const initialState:RegisterState = {
//   userLogin: getStoreJSON(USER_LOGIN), //null
//   newUser: {},
// }

// const RegisterReducer = createSlice({
//   name: 'RegisterReducer',
//   initialState,
//   reducers: {
//     getRegisterAction: (state:RegisterState,action:PayloadAction<Register[]>) =>{
//         state.arrRegister = action.payload;
        
//     },
//     setNewUser: (state, action) => {
//       state.newUser = action.payload;
//   }
//   }
// });

// export const {getRegisterAction,} = RegisterReducer.actions

// export default RegisterReducer.reducer

 
// //----------api-------------



// export const signupApi = (Signup:any) => {  // { "email": "", "password": "",  "name": "",  "gender": true, "phone": "" }
//   return async (dispatch:AppDispatch) => {
//       try {
//           let result = await http.post('/QuanLyNguoiDung/DangKy', Signup);
//           console.log('result', result.data);

//           const action = getRegisterAction(result.data);
//           dispatch(action);

//           history.push('/profile');
//       } catch (err) {
//           console.log(err);
//       }
//   }
// }
import React from 'react'

type Props = {}

export default function registerReducer({}: Props) {
  return (
    <div>registerReducer</div>
  )
}