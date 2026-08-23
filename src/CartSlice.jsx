import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },

    reducers: {
        addItem: (state, action) => {
            const { name, image, cost } = action.payload;

            // Check if the item already exists in the cart
            const existingItem = state.items.find(
                item => item.name === name
            );

            if (existingItem) {
                // If it exists, increase the quantity
                existingItem.quantity++;
            } else {
                // If it doesn't exist, add it with quantity 1
                state.items.push({
                    name,
                    image,
                    cost,
                    quantity: 1,
                });
            }
        },

        removeItem: (state, action) => {
            state.items = state.items.filter(
                item => item.name !== action.payload
            );
        },

        updateQuantity: (state, action) => {
            const { name, quantity } = action.payload;

            // Find the item in the cart
            const itemToUpdate = state.items.find(
                item => item.name === name
            );

            if (itemToUpdate) {
                itemToUpdate.quantity = quantity;
            }
        },
    },
});

// Export action creators
export const {
    addItem,
    removeItem,
    updateQuantity,
} = CartSlice.actions;

// Export reducer
export default CartSlice.reducer;