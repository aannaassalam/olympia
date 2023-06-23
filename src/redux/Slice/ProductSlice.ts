/* eslint-disable react-hooks/rules-of-hooks */
import { axiosInstance } from "@/config/AxiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UploadFile, clearUpload } from "./UploadSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const upload = useSelector((state:RootState) => state.Upload)

const initialState = {
    status: 'idle',
    products: [],
    product: {},
}

interface userdataProps {
    email: string;
    password: string;
    name?: string;
    avatar?: BinaryData;
    id?:number;
}

export const getProducts = createAsyncThunk("getproducts", async() => {
        try{
            const res = await axiosInstance.get("/products")
            return res.data;
        }catch(err){
            throw(err)
        }
})

export const getProductById = createAsyncThunk("getproductbyid", async(product_id: number) => {
    try{
        const res  = await axiosInstance.get(`/products/${product_id}`)
        return res.data
    }catch(err){
        throw(err)
    }
})


export const ProductSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //Get Categories
        builder.addCase(getProducts.pending, (state, action)=> {
            state.status= "loading"
        })
        .addCase(getProducts.fulfilled, (state, {payload}) =>{
            state.products=payload,
            state.status="idle"
        })
        .addCase(getProducts.rejected, (state, {payload}) => {
            state.status="idle"
        })

        //Get Products by Category
        builder.addCase(getProductById.pending, (state, action)=> {
            state.status= "loading"
        })
        .addCase(getProductById.fulfilled, (state, {payload}) =>{
            state.product=payload,
            state.status="idle"
        })
        .addCase(getProductById.rejected, (state, {payload}) => {
            state.status="idle"
        })
    }
})