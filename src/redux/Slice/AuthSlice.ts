/* eslint-disable react-hooks/rules-of-hooks */
import { axiosInstance } from "@/config/AxiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UploadFile, clearUpload } from "./UploadSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const upload = useSelector((state:RootState) => state.Upload)

const initialState = {
    status: 'idle',
    user: {},
}

interface userdataProps {
    email: string;
    password: string;
    name?: string;
    avatar?: BinaryData;
    id?:number;
}

export const Signup = createAsyncThunk("signup", async(userdata:userdataProps, {dispatch}) => {
        try{
            await dispatch(UploadFile(userdata.avatar as BinaryData))
            const user  = await axiosInstance.post("/users", {...userdata, avatar: upload.file})
            dispatch(clearUpload())
            dispatch(Signin({email: userdata.email, password: userdata.password}))
            return user?.data;
        }catch(err){
            throw(err)
        }
})

export const Signin = createAsyncThunk("signin", async(userdata:userdataProps) => {
    try{
        const res  = await axiosInstance.post("/auth/login", userdata)
        return res.data
    }catch(err){
        throw(err)
    }
})

export const getCurrentUser = createAsyncThunk("getcurrentuser", async(id: number) => {
    try{
        const res = await axiosInstance.get(`/users/${id}`)
        return res.data;
    }catch(err){
        throw(err)
    }
})

export const updateCurrentUser = createAsyncThunk("updatecurrentuser", async(userdata: userdataProps) => {
    try{
        const res = await axiosInstance.post(`/users/${userdata.id}`, userdata)
        return res.data;
    }catch(err){
        throw(err)
    }
})


export const AuthSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //Sign Up
        builder.addCase(Signup.pending, (state, action)=> {
            state.status= "loading"
        })
        .addCase(Signup.fulfilled, (state, {payload}) =>{
            state.user=payload,
            state.status="idle"
        })
        .addCase(Signup.rejected, (state, {payload}) => {
            state.status="idle"
        })

        //Sign Up
        builder.addCase(Signin.pending, (state, action)=> {
            state.status= "loading"
        })
        .addCase(Signin.fulfilled, (state, {payload}) =>{
            state.user=payload,
            state.status="idle"
            localStorage.setItem('token', payload.access_token)
            localStorage.setItem('refresh_token', payload.refresh_token)
        })
        .addCase(Signin.rejected, (state, {payload}) => {
            state.status="idle"
        })

        //Current User
        builder.addCase(getCurrentUser.pending, (state, {payload})=> {
            state.status="loading"
        })
        .addCase(getCurrentUser.fulfilled, (state, {payload})=>{
            state.user=payload
            state.status="idle"
        })
        .addCase(getCurrentUser.rejected, (state, action)=>{
            state.status="idle"
        })

        //Update User
        builder.addCase(updateCurrentUser.pending, (state, {payload})=> {
            state.status="loading"
        })
        .addCase(updateCurrentUser.fulfilled, (state, {payload})=>{
            state.user=payload
            state.status="idle"
        })
        .addCase(updateCurrentUser.rejected, (state, action)=>{
            state.status="idle"
        })
    }
})