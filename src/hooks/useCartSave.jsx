import React from 'react';
import { useDispatch } from 'react-redux';
import { saveCart } from '../store/slices/cartSlice';

const useCartSave = () => {
  const dispatch = useDispatch();
  const handleSaveCart = () => {
    dispatch(saveCart());
  };

  const handleLoadSavedCart = () => {
    dispatch(handleLoadSavedCart());
  };
  return {handleSaveCart, handleLoadSavedCart};
};

export default useCartSave;
