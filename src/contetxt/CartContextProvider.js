import React, {createContext, useReducer} from 'react';
const initialState={
    selectedItem:[],
    itemsCounter : 0,
    total : 0,
    checkout : 0
}

const cartReducer=(state , action) =>{
    switch(action.type){
        case "ADD_ITEM":
            if(!state.selectedItem.find(item => item.id === action.payload.id)){
                state.selectedItem.push({
                    ...action.payload,
                    quantity : 1
                })
            }
            return {
                ...state,
                selectedItem:[...state.selectedItem]
            }
        case "REMOVE_ITEM":
            const newSelectItems=state.selectedItem.filter(item => item.id !== action.payload.id);
            return{
                ...state,
                selectedItem :[...newSelectItems]
            }
        case "INCREASE":
            const indexI = state.selectedItem.findIndex(item =>item.id === action.payload.id);
            state.selectedItem[indexI].quantity++;
            return{
                ...state,
            }
        case "DICREASE":
            const indexD = state.selectedItem.findIndex(item =>item.id === action.payload.id);
            state.selectedItem[indexD].quantity--;
            return{
                ...state,
            }
        case "CHECKOUT":
            return{
                selectedItem :[],
                itemsCounter : 0,
                total : 0,
                checkout : true
            }
        case "CLEAR":
            return{
                selectedItem :[],
                itemsCounter : 0,
                total : 0,
                checkout : false
            }
        default :
        return state;
    }
}

export const CartContext=createContext();
const CartContextProvider = ({children}) => {
    const [state ,dispatch]=useReducer(cartReducer ,initialState)

    return (
        <CartContext.Provider value={{state,dispatch}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;