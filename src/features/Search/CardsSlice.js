import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit'

export const fetchCardDetails  = createAsyncThunk('card/fetchCardDetails',async(para)=>{
     const response = await fetch(`https://www.reddit.com/${para}.json`)
     const data = response.json()
     return data
})

export const CardsSlice = createSlice({
    name:'cards',
    initialState:{
        data:[],
        load:false
    },
    extraReducers:{
        [fetchCardDetails.pending]:(state,action)=>{
            console.log('Data is loading')
            state.load = false
        },
        [fetchCardDetails.fulfilled]:(state,action)=>{
            state.data = action.payload
            state.load = true
        },
        [fetchCardDetails.rejected]:(state,action)=>{
            console.log('OOPPSS YOU HAVE AN ERROR')
        },
    }
})

export const selectLoadForCard = state => state.card.load
export const selectDataForCard = state => state.card.data