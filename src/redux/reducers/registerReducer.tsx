import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch } from '../configStore';
import  {history} from '../../index'
import { ACCESS_TOKEN, getStore, getStoreJSON, http, setCookie, setStore, setStoreJSON, USER_LOGIN } from '../../util/setting';

export interface Register {
  // taiKhoan:        string;
  // email:           string;
  // soDT:            string;
  // maNhom:          
  // hoTen:           string;

}

export interface RegisterState {
    arrRegister:Register []
}

const initialState:RegisterState = {
    arrRegister: []
}

const RegisterReducer = createSlice({
  name: 'RegisterReducer',
  initialState,
  reducers: {
    getRegisterAction: (state:RegisterState,action:PayloadAction<Register[]>) =>{
        state.arrRegister = action.payload;
        
    }
  }
});

export const {getRegisterAction} = RegisterReducer.actions

export default RegisterReducer.reducer

 
//----------api-------------



export const signupApi:any = (Signup:{}) => {  // { "email": "", "password": "",  "name": "",  "gender": true, "phone": "" }
  return async (dispatch:AppDispatch) => {
      try {
          let result = await http.post('/QuanLyNguoiDung/DangKy', Signup);
          console.log('result', result.data);

          const action = getRegisterAction(result.data);
          dispatch(action);

          history.push('/Profile');
      } catch (err) {
          console.log(err);
      }
  }
}
 