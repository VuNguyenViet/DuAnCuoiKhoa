import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import ProductCard from '../../components/ProductCard';
import { AppDispatch, RootState } from '../../redux/configStore'
import { getAllProductApi, Product } from '../../redux/reducers/productReducer';
type Props = {}

export default function Home({}: Props) {

    const {arrProduct} = useSelector((state:RootState)=> state.productReducer);

    const dispatch:AppDispatch = useDispatch();

    console.log({arrProduct});
    useEffect(()=>{
        //Gọi api
        const action = getAllProductApi();
        dispatch(action);
    },[])


  return (
    <div className='container '> 
     <div className='ProductFeature'>
        <div className='ProductText'>
          <h3>Thông tin khóa học</h3>
        </div>
      </div>   
        <div className='row'>
            {arrProduct.map((item:Product,index:number)=>{
                return <div className='col-4' key={index}>
                    <ProductCard prod={item} />
                </div>
            })}
        </div>
    </div>
  )
}


