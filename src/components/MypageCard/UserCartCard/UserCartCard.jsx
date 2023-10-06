import styled from 'styled-components';
import UserInfoCard from '../UserInfoCard';
import Span from '../../ui/Span/Span';
import Wrap from '../../ui/Wrap/Wrap';
import Image from '../../ui/Image/Image';
import Text from '../../ui/Text/Text';
import { useLocation } from 'react-router-dom';

const UserCartCard = ({ cartDataItem, border }) => {
  const pathName = useLocation().pathname;
  const isCartPage = pathName === '/cart';
  return (
    <ListItem border={border}>
      {isCartPage && (
        <AllCheckBoxWrap>
          <input type="checkbox" />
        </AllCheckBoxWrap>
      )}
      <ProductInfo>
        {isCartPage && (
          <Wrap>
            <input type="checkbox" />
          </Wrap>
        )}
        <ImgWrap>
          <Image imageSrc={cartDataItem.product_img} />
        </ImgWrap>
        <Wrap>
          <Span text={cartDataItem.product_name} />
          <Text text={cartDataItem.option} />
        </Wrap>
        {isCartPage ? (
          <CountWrap>
            <button>-</button>
            <input type="number" />
            <button>+</button>
          </CountWrap>
        ) : (
          <CountWrap>
            <Span text={cartDataItem.count} />
          </CountWrap>
        )}
        <PriceText text={cartDataItem.price} />
      </ProductInfo>
      {isCartPage && (
        <OrderTotalPrice>
          <Span text="선택상품가격" />
          <Span text={cartDataItem.price} />
          <Span text="배송비" />
          <Span text={0} />
          <Span text="주문가격" />
          <Span text={cartDataItem.price} />
        </OrderTotalPrice>
      )}
    </ListItem>
  );
};

export default UserCartCard;

const ListItem = styled(UserInfoCard)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  border: ${(props) => props.border === 'border' && '1px solid #e2e2e2'};
  border-radius: 4px;
  margin-bottom: 20px;
`;
const ProductInfo = styled(Wrap)`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 20px 0;
  justify-content: space-around;
`;

const ImgWrap = styled(Wrap)`
  width: 80px;
  height: 80px;
  object-fit: cover;
`;
const CountWrap = styled(Wrap)`
  margin-left: 8%;
`;
const PriceText = styled(Span)`
  margin-left: 15%;
`;
const OrderTotalPrice = styled(Wrap)`
  display: flex;
  align-items: center;
  width: 100%;
  border-top: 1px solid #c7c6c6;
  justify-content: space-around;
  span {
    margin: 30px 0;
  }
`;
const AllCheckBoxWrap = styled(Wrap)`
  width: 100%;
  border-bottom: 1px solid #e2e2e2;
  input {
    margin: 0 24px 10px;
  }
`;
