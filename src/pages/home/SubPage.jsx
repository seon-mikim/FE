import styled from "styled-components";
import CardLi from "./../../components/Card/CardLi";
import "./subpage.css";
const SubPage = () => {
  return (
    <Section>
      <div className="sub-title">
        <div className="sub-list-title">APPAREL</div>
        <div className="sub-list-select">
          <div className="sub-list-btn">TOPS & T-SHIRTS</div>
          <div className="sub-list-btn">HOODIES & SWEATSHIRTS</div>
          <div className="sub-list-btn">PANTS</div>
          <div className="sub-list-btn">BUNDLE</div>
        </div>
      </div>
      <ItemListGrid>
        <CardLi />
        <CardLi />
        <CardLi />
        <CardLi />
        <CardLi />
        <CardLi />
        <CardLi />
        <CardLi />
      </ItemListGrid>
    </Section>
  );
};

export default SubPage;

const Section = styled.div`
  padding: 80px 5% 20px;
`;

const ItemListGrid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 60px 5% 0;
`;
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
