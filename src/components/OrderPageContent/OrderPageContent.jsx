import DeliveryForm from '../DeliveryForm/DeliveryForm';
import PurchaseCard from '../PurchaseCard/PurchaseCard';
import PaymentForm from '../PaymentForm/PaymentForm';
import styled from 'styled-components';
import Wrap from '../ui/Wrap/Wrap';
import useGetCartProductList from '../../hooks/useGetCartProductList';
import { useEffect } from 'react';


const OrderPageContent = () => {

const  {
    entities:cartData,
    loading,
    error,
    getCartProductList
  } = useGetCartProductList()
 
  useEffect(() => {getCartProductList() },[])
  return (
    <>
      <FormWrap>
        <DeliveryForm />
        <PaymentForm />
      </FormWrap>
      <PurchaseCard cartData={cartData} />
    </>
  );
};

export default OrderPageContent;

const FormWrap = styled(Wrap)`
  width: 76%;
`;
