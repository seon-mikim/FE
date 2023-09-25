import React from "react";
import styled from "styled-components";

const Card = () => {
  const p1 = "/p1.jpg";
  const soldout = "/soldout.png";
  return (
    <ItemListBox>
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

const ItemListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 24rem;
`;
const ThumbnailDiv = styled.div`
  width: 22rem;
  height: 22rem;
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
