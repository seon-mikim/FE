import React from "react";
import "./MainPage.css";
import Card from "../../components/Card/Card";
import styled from "styled-components";
import ProductDetailPage from "./../detail/ProductDetailPage";

const MainPage = () => {
  return (
    <>
      <Section>
        <ListTitle>
          <ListTitleText>NEW ARRIVALS</ListTitleText>
          <Bar />
        </ListTitle>
        <ItemListGrid>
          <ItemList>
            <Card />
          </ItemList>
          <ItemList>
            <Card />
          </ItemList>
          <ItemList>
            <Card />
          </ItemList>
          <ItemList>
            <Card />
          </ItemList>
        </ItemListGrid>
      </Section>
      <ProductDetailPage />
    </>
  );
};

export default MainPage;

const Section = styled.div`
  padding: 60px 5% 0;
`;
const ListTitle = styled.div`
  text-align: center;
  padding: 80px 0 30px;
`;
const ListTitleText = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
`;
const Bar = styled.p`
  margin: 20px auto 15px;
  height: 2px;
  width: 35px;
  display: block;
  background: #111;
`;

const ItemListGrid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 60px 5% 0;
`;
const ItemList = styled.li`
  width: 25%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1600px){
    width: 50%;
  }
  @media screen and (max-width: 820px){
    width: 100%;
  }
`;
