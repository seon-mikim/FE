import Wrap from '../ui/Wrap/Wrap';
import Image from '../ui/Image/Image';
import Span from '../ui/Span/Span';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const CartCard = ({ cartItemData }) => {
  const pathName = useLocation().pathname;
  const isCartPage = pathName === '/cart';
  return (
    <CartContentWrap>
      <CartInfoWrap>
        {isCartPage&&<input type='checkbox' />}
        <ImgWrap>
          <Image imageSrc={cartItemData.product_img} />
        </ImgWrap>
        <CartItemInfo>
          <Span text={cartItemData.product_name} />
          <Span text={cartItemData.option} />
          {isCartPage ? (
            <div>
              <button>-</button>
              <input type="number" value={1} />
              <button>+</button>
            </div>
          ) : (
            <Span text={cartItemData.count} />
            )}
            <Span text={cartItemData.price} />
        </CartItemInfo>
      </CartInfoWrap>
    </CartContentWrap>
  );
};

export default CartCard;

const CartContentWrap = styled(Wrap)`
  width: 100%;
  border-bottom: 1px solid #e2e2e2;
`;
const CartInfoWrap = styled(Wrap)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 20px;
`;

const ImgWrap = styled(Wrap)`
  width: 80px;
  height: 80px;
  object-fit: cover;
  overflow: hidden;
`;

const CartItemInfo = styled(Wrap)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 74.8%;
  div {
  display: flex;
  input {
    width: 18px;
    border: 1px solid transparent;
    padding: 0;
    text-align: center;
  }
  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input:focus{
    outline: none;
  }
  }
`;
