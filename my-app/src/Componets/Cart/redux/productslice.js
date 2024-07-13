import { createSlice } from "@reduxjs/toolkit"



const initialState={
    items: []
}
localStorage.getItem("Product")!==null?
initialState.items= JSON.parse(localStorage.getItem('Product')): initialState.items=[]

const productslice=createSlice({
    name: 'product' ,
    initialState,
    reducers:{
        addtocart: (state,action)=>{
            state.items.push(action.payload)
            localStorage.setItem('Product', JSON.stringify(state.items))
        }, remove: (state,action)=>{
            const ItemId= action.payload.id
            let removed =false
            state.items=state.items.filter((item)=>{
                if(!removed && item.id === ItemId){
                    removed =true
                    return false
                }
                return true
            })
            localStorage.setItem('Product', JSON.stringify(state.items))
        }
        
    }
})
export default productslice;