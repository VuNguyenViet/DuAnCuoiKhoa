import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Introduce from '../../components/Introduce';
import ProductCard from '../../components/ProductCard';
import { AppDispatch, RootState } from '../../redux/configStore'
import { getAllProductApi, Product } from '../../redux/reducers/productReducer';
import TuvanKhoahoc from '../TuvanKhoahoc/TuvanKhoahoc';
import Carousel from './Carousel';
type Props = {}

export default function Home({ }: Props) {

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
      <div>
        <Carousel />
        <div className='container '>
          <div className='ProductFeature'>
            {/* <div className='ProductText'>
              <h1>Đào tạo lập trình chuyên sâu cho người trái nghành</h1>
              <div className='ProductText_2'> </div>
            </div> */}
            <Introduce />
          </div>
         
        </div>
        <TuvanKhoahoc />
      </div>
    </>
  )
}


