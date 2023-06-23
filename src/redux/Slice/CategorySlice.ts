/* eslint-disable react-hooks/rules-of-hooks */
import { axiosInstance } from "@/config/AxiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UploadFile, clearUpload } from "./UploadSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const upload = useSelector((state:RootState) => state.Upload)

const initialState = {
    status: 'idle',
    categories: {},
    products: [],
}

interface userdataProps {
    email: string;
    password: string;
    name?: string;
    avatar?: BinaryData;
    id?:number;
}

export const getCategories = createAsyncThunk("getcategories", async() => {
        try{
            const res = await axiosInstance.get("/categories")
            return res.data;
        }catch(err){
            throw(err)
        }
})

export const getProductsByCategory = createAsyncThunk("getproductsbycategory", async(category_id: number) => {
    try{
        const res  = await axiosInstance.get(`/categories/${category_id}/products`)
        return res.data
    }catch(err){
        throw(err)
    }
})


export const CategorySlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //Get Categories
        builder.addCase(getCategories.pending, (state, action)=> {
            state.status= "loading"
        })
        .addCase(getCategories.fulfilled, (state, {payload}) =>{
            state.categories=payload,
            state.status="idle"
        })
        .addCase(getCategories.rejected, (state, {payload}) => {
            state.status="idle"
        })

        //Get Products by Category
        builder.addCase(getProductsByCategory.pending, (state, action)=> {
            state.status= "loading"
        })
        .addCase(getProductsByCategory.fulfilled, (state, {payload}) =>{
            state.products=payload,
            state.status="idle"
        })
        .addCase(getProductsByCategory.rejected, (state, {payload}) => {
            state.status="idle"
        })
    }
})