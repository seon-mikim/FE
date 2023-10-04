import styled from 'styled-components';
import Text from '../../ui/Text/Text';
import { Link } from 'react-router-dom';
import Wrap from '../../ui/Wrap/Wrap';

const EmptyCartCard = () => {
  return (
    <EmptyCartWrap>
      <Text text="장바구니가 비었습니다." />
      <Link to="/">상품 담으러 가기</Link>
    </EmptyCartWrap>
  );
};

export default EmptyCartCard;

const EmptyCartWrap = styled(Wrap)`
  display: flex;
  margin: 80px auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  p {
    color: #707070;
  }

  a {
    color: #bcbbbb;
    text-decoration: none;
  }
  a:hover {
    color: #000;
    text-decoration: underline;
  }
`;
