import React from 'react';
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from 'react-redux';

type CounterState = {
  counterValue: number;
  accessFlag: boolean;
};

const initialState: CounterState = {
  counterValue: 0,
  accessFlag: true,
};

export const counterSlice = createSlice({
  name: "Counter",
  initialState,
  reducers:{
    increment: (state)=>{
        state.counterValue+=1;
    },
    decrement: (state)=>{
        state.counterValue = state.counterValue>0?state.counterValue-=1:state.counterValue;
    },
    reset: (state)=>{
        state.counterValue=0;
    }
  }
});

const {decrement, increment, reset} = counterSlice.actions;

export default counterSlice.reducer;

const store = configureStore({
    reducer:{
        counter:counterSlice.reducer
    }
})

export const useGlobalStore = ()=>{
    const count = useSelector((state)=>state.counter.counterValue);
    const dispatch = useDispatch();
    return{
        count,
        increment:()=>dispatch(increment()),
        decrement:()=>dispatch(decrement()),
        reset:()=>dispatch(reset()),
    }


}

export const GlobalStoreProvider = ({children})=> <Provider store={store}> {children} </Provider>