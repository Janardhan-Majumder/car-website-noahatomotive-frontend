import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Car } from '../../../types';

interface ProductsState {
  items: Car[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  items: [],
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Car[]>) => {
      state.items = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    addProduct: (state, action: PayloadAction<Car>) => {
      state.items.push(action.payload);
    },
    updateProduct: (state, action: PayloadAction<Car>) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { setProducts, setLoading, setError, addProduct, updateProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;