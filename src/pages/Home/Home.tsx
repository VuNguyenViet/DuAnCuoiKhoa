import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Introduce from '../../components/Introduce';
import ProductCard from '../../components/ProductCard';
import { AppDispatch, RootState } from '../../redux/configStore'
import { getAllProductApi, Product } from '../../redux/reducers/productReducer';
import TuvanKhoahoc from '../TuvanKhoahoc/TuvanKhoahoc';
import Carousel from './Carousel';
import '../../assets/scss/pages/_home.scss'
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
            <div className='ProductText'>
              <h3>Thông tin khóa học</h3>
            </div>
          </div>
          <div className='row'>
            {arrProduct.map((item: Product, index: number) => {
              return <div className='col-lg-4 g-lg-5 col-md-6 col-sm-12' key={index}>
                <ProductCard prod={item} />
              </div>
            })}
          </div>
         
        </div>
      </div>
    </>
  )
}


