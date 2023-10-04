import styled from 'styled-components';
import CartCard from '../../CartCard/CartCard';
import Span from '../../ui/Span/Span';
import Wrap from '../../ui/Wrap/Wrap';
import { useLocation } from 'react-router-dom';

const UserCartCard = ({ cartItemData }) => {
  const pathName = useLocation().pathname;
  const isCartPage = pathName === '/cart';
  return (
    <CartWrap>
      <CartInfoDescreption>
        {isCartPage && <input type="checkbox" />}
        <Span text="이미지" />
        <Span text="상품 정보" />
        <Span text="옵션" />
        <Span text="수량" />
        <Span text="판매가" />
      </CartInfoDescreption>
      <CartProductInfo>
        <CartCard cartItemData={cartItemData} />
      </CartProductInfo>
    </CartWrap>
  );
};

export default UserCartCard;

const CartWrap = styled(Wrap)`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #e2e2e2;
`;
const CartInfoDescreption = styled(Wrap)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #e2e2e2;
  
`;

const CartProductInfo = styled(Wrap)`
  display: flex;
`;
