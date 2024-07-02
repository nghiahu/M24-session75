import React, { useEffect } from 'react'
import './cart.scss'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getCart } from '../service/product.service'
export default function cart() {
    const data:any = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCart())
    },[])
  return (
    <div>
        <h3>Shopping cart</h3>
        <div>
            <ul>
                {}
            </ul>
        </div>
    </div>
  )
}
