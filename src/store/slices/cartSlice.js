import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from '@reduxjs/toolkit';
import { fetchCartList } from '../../apis/cartApi/cartApi';

const initialState = {
  entities: [],
  savedCart: [],
  loading: false,
  error: false,
};

export const getCartList = createAsyncThunk('cart/getCartList', async () => {
  try {
		const cartList = await fetchCartList();

    return cartList;
  } catch (error) {
    return isRejectedWithValue(error);
  }
});

export const getCartListSlice = createSlice({
  name: 'getCarts',
  initialState,
  reducers: {
    incrementQuantity: (state, action) => {
      const product = state.entities.find(
        (item) => item.cartProductId === action.payload.cartProductId
      );
      if (product) {
        product.cartProductCount += 1;
        product.productPrice = product.productPrice + product.productPrice;
      }
    },
    decrementQuantity: (state, action) => {
      const product = state.entities.find(
        (item) => item.cartProductId === action.payload.cartProductId
      );
      if (product && product.cartProductCount > 1) {
        product.cartProductCount -= 1;
        product.productPrice = product.productPrice - product.cartProductCount;
      }
    },
    saveCart: (state) => {
      state.savedCart = [...state.entities];
    },
    loadSavedCart: (state) => {
      state.entities = [...state.savedCart];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCartList.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getCartList.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(getCartList.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const { incrementQuantity, decrementQuantity,saveCart,loadSavedCart } =
  getCartListSlice.actions;
export default getCartListSlice.reducer;
