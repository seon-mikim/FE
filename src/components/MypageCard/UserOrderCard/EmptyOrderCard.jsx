import { Link } from "react-router-dom";
import Text from "../../ui/Text/Text";
import Image from "../../ui/Image/Image";
import styled from "styled-components";
import Wrap from "../../ui/Wrap/Wrap";
import OrderIcon from '../../../assets/images/order_icon.svg'

const EmptyOrderCard = () => {
	return (
    <CardItemWrap>
      <ImgWrap>
        <Image imageSrc={OrderIcon} />
      </ImgWrap>
      <Text text="올린 상품이 없습니다." />
      <Link to="/my/orders">상품 올리러 가기</Link>
    </CardItemWrap>
  );
}

export default EmptyOrderCard

const CardItemWrap = styled(Wrap)`
  display: flex;
  padding: 120px 0;
  align-items: center;
  flex-direction: column;
  justify-content: center;
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
const ImgWrap = styled(Wrap)`
  width: 60px;
  height: 60px;
`;
