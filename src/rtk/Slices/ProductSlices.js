
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchProducts =createAsyncThunk('productSlices/fetchProducts' , async ()=> {
    const res = await fetch('./data/data.js');
    const data = await res.json();
    console.log(data)
    return data 
} ) 

export const productSlices= createSlice({
  name: 'productSlices',
  initialState: [],
  reducers: {

  }
  ,
  // extraReducers: (builder) => {
  //   // Add reducers for additional action types here, and handle loading state as needed
  //   builder.addCase(fetchUserById.fulfilled, (state, action) => {
  //     // Add user to the state array
  //     state.entities.push(action.payload)
  //   })
  // },
})

export const {  } = productSlices.actions

export default productSlices.reducer