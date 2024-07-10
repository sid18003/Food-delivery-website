import React, { createContext, useEffect, useState } from 'react';
import { food_list as initialFoodList } from '../assets/assets'; // Ensure this contains unique _id values

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [food_list] = useState(initialFoodList);
    const [cartItems, setCartItems] = useState({});

    const addToCart = (_id) => {
        setCartItems(prev => ({
            ...prev,
            [_id]: (prev[_id] || 0) + 1
        }));
    };

    const removeFromCart = (_id) => {
        setCartItems(prev => {
            const newCart = { ...prev };
            if (newCart[_id] > 1) {
                newCart[_id]--;
            } else {
                delete newCart[_id];
            }
            return newCart;
        });
    };

    const gettotalcartamount=()=>{
         let totalamount = 0;
         for(const item in cartItems){
            if(cartItems[item]>0){
                let iteminfo = food_list.find((product) => product._id===item);
                totalamount += iteminfo.price * cartItems[item];

            }
         }
         return totalamount;
    }


    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        setCartItems,
        gettotalcartamount
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
