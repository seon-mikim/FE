import styled from "styled-components";
import Card from "./Card";

const CardLi = () => {
  return (
    <ItemList>
      <Card />
    </ItemList>
  );
};

export default CardLi;

const ItemList = styled.li`
  width: 25%;
  min-width: 300px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1600px) {
    width: 50%;
  }
  @media screen and (max-width: 820px) {
    width: 100%;
  }
`;
