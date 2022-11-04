import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import { http } from '../../util/setting';
import { AppDispatch } from '../configStore';

export interface Product {
    maKhoaHoc:      string;
    biDanh:         string;
    tenKhoaHoc:     string;
    moTa:           string;
    luotXem:        number;
    hinhAnh:        string;
    maNhom:         string;
    ngayTao:        string;
    soLuongHocVien: number;
    nguoiTao:      string;
    danhMucKhoaHoc: string;
}

export interface ProductState {
    arrProduct:Product[]
}

const initialState:ProductState = {
    arrProduct: []
}

const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    getProductAction: (state:ProductState,action:PayloadAction<Product[]>) =>{
        state.arrProduct = action.payload;
        
    },
    laydanhsachAction: (state:ProductState,action:PayloadAction<Product[]>) =>{
        state.arrProduct = action.payload;
        
    }
  }
});

export const {getProductAction,laydanhsachAction} = productReducer.actions

export default productReducer.reducer


//----------api-------------

export const getAllProductApi = () => {
    return async (dispatch:AppDispatch) => {
        try{
            const result = await http.get('/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01');
            //Sau khi lấy dữ liệu từ api về => đưa lên redux
            const action = getProductAction(result.data);
            dispatch(action);
        }   
        catch(err) {
            console.log({err})
        }
    }
}

// api lấy danh sách theo khóa học 
export const LayDanhSachKhoaHoc = () => {
    return async (dispatch:AppDispatch) => {
        try{
            const result = await http.get('QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=FrontEnd&MaNhom=GP01');
            //Sau khi lấy dữ liệu từ api về => đưa lên redux
            const action = laydanhsachAction(result.data);
            dispatch(action);
        }   
        catch(err) {
            console.log({err})
        }
    }
}

