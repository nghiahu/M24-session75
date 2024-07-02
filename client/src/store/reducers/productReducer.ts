import { createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts, getCart } from "../../service/product.service";
export const getAllProduct:any = createAsyncThunk("product/getAllProduct",getProducts)
export const getAllCart:any = createAsyncThunk("cartProduct/getAllCart",getCart)
const productReducer = createSlice({
    name:"product",
    initialState:{
        products:[],
        cart:[]
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(getAllProduct.pending,(state,action)=>{
            console.log("trạng thái chờ xử lý")
        })
        .addCase(getAllProduct.fulfilled,(state:any,action)=>{
            state.products = action.payload
        })
        .addCase(getAllProduct.rejected,(state,action)=>{
            console.log("hàm xử lý lỗi")
        })
        .addCase(getAllCart.fulfilled,(state,action)=>{
            state.cart = action.payload
        })
    }
})
export default productReducer.reducer;