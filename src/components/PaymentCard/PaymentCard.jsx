import styled from 'styled-components';
import Wrap from '../ui/Wrap/Wrap';
import Span from '../ui/Span/Span';
import { useLocation, useNavigate } from 'react-router-dom';
import PaymentInfo from './PaymentInfo';
import UserCartCard from '../MypageCard/UserCartCard/UserCartCard';
import MyPageList from '../MyPageList/MyPageList';

const PaymentCard = ({ userCartData }) => {
  const pathName = useLocation().pathname;
  const isCartPage = pathName === '/cart';
  const navigate = useNavigate();
  const handlePurchaseClick = () => {
    navigate('/order');
  };
  return (
    <PaymentCardWrap>
      <Span text={isCartPage ? '결제정보' : '주문상품 1개'} />
      {isCartPage ? (
        <PaymentInfo labelText="상품수" value="1개" />
      ) : (
        <MyPageList>
          {userCartData.map((cartDataItem) => (
            <UserCartCard
              key={cartDataItem.productId}
              cartDataItem={cartDataItem}
            />
          ))}
        </MyPageList>
      )}
      <PaymentInfo labelText="상품금액" value="10000원" />
      <PaymentInfo labelText="총 결제금액" value="10000원" border="borderTop" />
      <PurchaseButtonWrap>
        <button onClick={handlePurchaseClick}>{isCartPage?'구매하기':'결제하기'}</button>
      </PurchaseButtonWrap>
    </PaymentCardWrap>
  );
};

export default PaymentCard;

const PaymentCardWrap = styled(Wrap)`
  border: 1px solid #000;
  border-radius: 4px;
  padding: 20px;
	width: 50%;
  height: 100%;
  font-size: 18px;
`;

const PurchaseButtonWrap = styled(Wrap)`
  margin-top: 20px;
  button {
    border: 1px solid transparent;
    width: 100%;
    height: 50px;
    color: #fff;
    font-weight: 600;
    background-color: #27262d;
    font-size: 18px;
  }
`;
