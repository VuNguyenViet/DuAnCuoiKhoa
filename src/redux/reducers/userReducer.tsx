import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch } from '../configStore';
import  {history} from '../../index'
import { ACCESS_TOKEN, getStore, getStoreJSON, http, setCookie, setStore, setStoreJSON, USER_LOGIN } from '../../util/setting';

export interface User {
  taiKhoan:        string;
  email:           string;
  soDT:            string;
  maNhom:          string;
  maLoaiNguoiDung: string;
  hoTen:           string;
  accessToken:     string;
}

export interface UserState {
    arrUser:User []
}

const initialState:UserState = {
    arrUser: []
}

const UserReducer = createSlice({
  name: 'UserReducer',
  initialState,
  reducers: {
    getUserAction: (state:UserState,action:PayloadAction<User[]>) =>{
        state.arrUser = action.payload;
        
    }
  }
});

export const {getUserAction} = UserReducer.actions

export default UserReducer.reducer

 
//----------api-------------

export const signinApi:any = (userLogin:{}) => { //userLogin = {email:'',password}


  return async (dispatch:AppDispatch) => {
      try {
          let result = await http.post('QuanLyNguoiDung/DangNhap',userLogin);

          //thành công
          //Lưu lại token
          setStore(ACCESS_TOKEN,result.data.accessToken);
          setCookie(result.data.accessToken,30,ACCESS_TOKEN);
          //Lưu email 
          setStoreJSON(USER_LOGIN,result.data)
      
          // console.log(result);
          //Đưa lên userLogin thành công lên reducer
          //result.data.content = {email:'',accessToken:''}
          const action = getUserAction(result.data);
          dispatch(action);
          history.push('/Profile');


      } catch (err) {
          console.log({err});
          alert('Tài khoản hoăc 1 mật khẩu không đúng !')
          history.push('/Register')
         

      }
  }
}

// export const signupApi:any = (userSignin:{}) => {  // { "email": "", "password": "",  "name": "",  "gender": true, "phone": "" }
//   return async (dispatch:AppDispatch) => {
//       try {
//           let result = await http.post('/users/signup', userSignin);
//           console.log('result', result.data);

//           const action = setNewUser(result.data);
//           dispatch(action);

//           history.push('/login');
//       } catch (err) {
//           console.log(err);
//       }
//   }
// }
 