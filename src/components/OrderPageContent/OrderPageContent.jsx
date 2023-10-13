import DeliveryForm from '../DeliveryForm/DeliveryForm';
import PurchaseCard from '../PurchaseCard/PurchaseCard';
import PaymentForm from '../PaymentForm/PaymentForm';
import styled from 'styled-components';
import Wrap from '../ui/Wrap/Wrap';
import { useLocation } from 'react-router-dom';

const OrderPageContent = () => {
 const location = useLocation();
 const { cartData } = location.state;
  return (
    <>
      <FormWrap>
        <DeliveryForm />
        <PaymentForm />
      </FormWrap>
      <PurchaseCard userCartData={cartData} totalPrice={cartData.totalPrice} />
    </>
  );
};

export default OrderPageContent;

const FormWrap = styled(Wrap)`
  width: 76%;
`;