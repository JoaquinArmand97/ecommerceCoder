import { createSlice } from "@reduxjs/toolkit";
import categories from "../data/categories.json";
import products from "../data/products.json";

export const shopSlice = createSlice ({

        name: "shop",
        initialState:{
        categories: categories, 
        products: products,
        productsFilteredByCategory: [],
        productSelected:{}
    },
    reducers:{
        setProductsFilteredByCategory: (state,action) => {
            state.productsFilteredByCategory = state.products.filter(product => product.category === action.payload)
        }
    }
})

export const {setProductsFilteredByCategory} = shopSlice.actions

export default shopSlice.reducer


