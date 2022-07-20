import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit'


export const fetchSearchResults = createAsyncThunk('search/fetchSearchResults',async(para1)=>{
    const response = await fetch(`https://www.reddit.com/search.json${para1}`);
    const data = response.json()
    return data
})

export const searchSlice = createSlice({
    name:'search',
    initialState:{
        data:{},
        load:false
    },
    
    extraReducers:{
        [fetchSearchResults.pending]:(state,action)=>{
            console.log('Data is loading')
            state.load = false
        },
        [fetchSearchResults.fulfilled]:(state,action)=>{
            state.data = action.payload
            state.load = true
        },
        [fetchSearchResults.rejected]:(state,action)=>{
            console.log('Ooopps Got an error')
        }
    }
})

export const selectData = state => state.search.data.data
export const selectLoad = state => state.search.load