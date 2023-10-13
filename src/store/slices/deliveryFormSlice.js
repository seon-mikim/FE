import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  deliveryInput: {
    userName: '',
    tellNumber: '',
    address: '',
    addressZipcode: '',
    addressDetail: '',
  },
  alertMessage: {
    userName: '',
    tellNumber: '',
    address: '',
  },
  phoneInput: {
    firstPhoneNumber: '',
    secondPhoneNumber: '',
    thirdPhoneNumber: '',
  },
  fullPhoneNumber: '',
};

const deliveryFormSlice = createSlice({
  name: 'deliveryFormData',
  initialState,
  reducers: {
    setDeliveryInput: (state, action) => {
      state.deliveryInput = { ...state.deliveryInput, ...action.payload };
    },
    setAlertMessage: (state, action) => {
      state.alertMessage = { ...state.alertMessage, ...action.payload };
    },
    setPhoneInput: (state, action) => {
      state.phoneInput = { ...state.phoneInput, ...action.payload };
    },
    setFullPhoneNumber: (state, action) => {
      state.fullPhoneNumber = action.payload;
    },
  }
});

export const { setDeliveryInput, setAlertMessage, setPhoneInput, setFullPhoneNumber } = deliveryFormSlice.actions;
export default deliveryFormSlice.reducer;
