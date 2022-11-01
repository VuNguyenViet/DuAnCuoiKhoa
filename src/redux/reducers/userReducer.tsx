import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch } from '../configStore';
import  {history} from '../../index'
import { ACCESS_TOKEN, getStore, getStoreJSON, http, setCookie, setStore, setStoreJSON, USER_LOGIN } from '../../util/setting';

export interface User {
  taiKhoan:        string;
  matKhau:         string
}

const initialState = {
  userLogin: getStoreJSON(USER_LOGIN), //null
  newUser: {},
}


const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUserLoginAction : (state,action) => {
      let userLogin = action.payload;
      state.userLogin =  userLogin;
      // state.userLogin.email = email;
  },
  }
});

export const {setUserLoginAction} = userReducer.actions

export default userReducer.reducer

 
//----------api-------------

export const signinApi = (userLogin:any) => { //userLogin = {email:'',password}


  return async (dispatch:AppDispatch) => {
      try {
          let result = await http.post('/QuanLyNguoiDung/DangNhap',userLogin);

          //thành công
          //Lưu lại token
          setStore(ACCESS_TOKEN,result.data.accessToken);
          setCookie(result.data.accessToken,30,ACCESS_TOKEN);
          //Lưu email 
          setStoreJSON(USER_LOGIN,result.data)
      
          // console.log(result);
          const action = setUserLoginAction(result.data);
          dispatch(action);
          history.push('/profile');


      } catch (err) {
          console.log({err});
          alert('Tài khoản hoăc  mật khẩu không đúng !')
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
 