import { configureStore } from '@reduxjs/toolkit'
import { AuthSlice } from './Slice/AuthSlice'
import { UploadSlice } from './Slice/UploadSlice'
// ...
const store = configureStore({
  reducer: {
    Auth: AuthSlice.reducer,
    Upload: UploadSlice.reducer
  },
})
export type RootState = ReturnType<typeof store.getState>

export default store