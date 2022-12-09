import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: true,
  users: [
    
  ],

  }
 

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetching(state){
        state.loading = true;
    },
    fetchSuccess(state, action){
        state.loading = false;
        state.users = action.payload   
        
        state.error = '' 
    },
    fetchError(state, action){
        state.loading = false;
        state.error = action.payload.message
    }
  }
})

export const { fetching, fetchSuccess, fetchError } = usersSlice.actions

export default usersSlice.reducer

