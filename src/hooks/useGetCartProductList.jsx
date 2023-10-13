import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useLocation } from 'react-router-dom';
import { getCartList } from '../store/slices/cartSlice';

const useGetCartProductList = () => {
  const dispatch = useDispatch();
  const pathName = useLocation().pathname;
  const { entities, loading, error } = useSelector((state) => state.getCarts);
  console.log(entities);
 
  const getCartProductList = useCallback(async () => {
    dispatch(getCartList());
  }, [dispatch]);

  useEffect(() => {
    if (pathName === '/cart'){
      getCartProductList()
  }
}, [getCartProductList, pathName]);
  return {
    entities,
    loading,
    error,
  };
};

export default useGetCartProductList;
