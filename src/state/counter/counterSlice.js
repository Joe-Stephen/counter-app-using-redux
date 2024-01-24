import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    value:0,
};

const counterSlice = createSlice({
    name:'counter',
    initialState,
    //sync
    reducers:{
        increment:(state)=>{
            state.value +=1;
        },
        decrement:(state)=>{
            state.value -=1;
        },
        incrementByAmount:(state, action)=>{
            state.value +=action.payload;
        },
    },
//async
    extraReducers:(builder) =>{
        builder
        .addCase(incrementAsync.pending, ()=>{
            console.log("Loading...");
        })
        .addCase(incrementAsync.fulfilled, (state, action)=>{
            state.value +=action.payload;
        });
    },
});

export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async(amount)=>{
        await new Promise((resolve)=>setTimeout(resolve,2000));
        return amount;
    }
)

export const {increment, decrement, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;