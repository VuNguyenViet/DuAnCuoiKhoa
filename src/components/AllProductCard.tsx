import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../redux/configStore'
import { getAllProductApi, Product } from '../redux/reducers/productReducer';
import ProductCard from '../components/ProductCard'

type Props = {}

export default function AllProductCard({}: Props) {
    const { arrProduct } = useSelector((state: RootState) => state.productReducer);

    const dispatch: AppDispatch = useDispatch();
  
    console.log({ arrProduct });
    useEffect(() => {
      //Gọi api
      const action = getAllProductApi();
      dispatch(action);
    }, []);
  return (
    <>
    <div className='row'>
    {arrProduct.map((item: Product, index: number) => {
      return <div className='col-4' key={index}>
        <ProductCard prod={item} />
      </div>
    })}
  </div>
  </>
  )
}