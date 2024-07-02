import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getAllProduct } from '../store/reducers/productReducer'
import './product.scss'
export default function Product() {
    const data:any = useSelector(state => state)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllProduct());
    },[])
  return (
    <div className='ListProductoutLine'>
      <h3>List Product</h3>
      <div className='formListProduct'>
        <ul className='listProduct'>
          {data.productReducer.products.map((item:any,index:number)=>{
            return <li key={item.id} className='product'>
              <div className='productImg'><img src={item.image} alt="" className='img'/></div>
              <div className='productInfo'>
                <div className='productName'>{item.name}</div>
                <div>{item.describe}</div>
                <div className='productStock'>Total: {item.stock}</div>
              </div>
              <div className='productBuy'>
                <input type="number" className='inpProductBuy' min={1}/>
                <div>Price: $ {item.price}</div>
                <button className='btnProductBuy'>Add to cart</button>
              </div>
            </li>
          })}
        </ul>
      </div>
    </div>
  )
}
