import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = () => {
  const p1 = "/p1.jpg";
  const soldout = "/soldout.png";
  return (
    <ItemListBox to="/productdetailpage">
      <ThumbnailDiv>
        <ThumbnailImg src={p1} alt="" />
      </ThumbnailDiv>
      <Title>Denim Shirt Jacket</Title>
      <Price>119,000원</Price>
      <SoldOut>
        <img src={soldout} alt="" />
      </SoldOut>
    </ItemListBox>
  );
};

export default Card;

const ItemListBox = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin-bottom: 70px;
  &:visited,
  &:link {
    text-decoration: none;
    color: #222222;
  }
`;
const ThumbnailDiv = styled.div`
  width: 100%;
  height: 100%;
`;
const ThumbnailImg = styled.img`
  width: 100%;
`;
const Title = styled.div`
  width: 100%;
  border-bottom: 1px solid #ececec;
  text-align: center;
  line-height: 180%;
  font-size: 17px;
  font-weight: bold;
`;
const Price = styled.div`
  width: 100%;
  text-align: center;
  line-height: 180%;
  font-size: 17px;
  font-weight: bold;
`;
const SoldOut = styled.div`
  padding-top: 10px;
`;
