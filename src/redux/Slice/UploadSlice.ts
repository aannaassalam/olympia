import { axiosInstance } from "@/config/AxiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: 'idle',
    file: "",
}

export const UploadFile = createAsyncThunk("uploadfile", async(file: BinaryData, {dispatch}) => {
        try{
            const res  = await axiosInstance.post("/files/upload", {file})
            return res.data.location;
        }catch(err){
            throw(err)
        }
})

export const clearUpload = createAsyncThunk("clearupload", async() => {
    return "";
})


export const UploadSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //Upload File
        builder.addCase(UploadFile.pending, (state, action)=> {
            state.status= "loading"
        })
        .addCase(UploadFile.fulfilled, (state, {payload}) =>{
            state.file=payload,
            state.status="idle"
        })
        .addCase(UploadFile.rejected, (state, {payload}) => {
            state.status="idle"
        })

        //Clear file location
        builder.addCase(clearUpload.pending, (state, {payload})=> {
            state.status="loading"
        })
        .addCase(clearUpload.fulfilled, (state, {payload})=>{
            state.file=payload
            state.status="idle"
        })
        .addCase(clearUpload.rejected, (state, action)=>{
            state.status="idle"
        })
    }
})