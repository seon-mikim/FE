import styled from "styled-components";
import CardLi from "./../../components/Card/CardLi";
import "./subpage.css";
const SubPage = () => {
  const first = "/first.gif";
  const prev = "/prev.gif";
  const next = "/next.gif";
  const end = "/end.gif";
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
      </ItemListGrid>
      <div className="pagination">
        <div>
          <img src={first} alt="" />
        </div>
        <div>
          <img src={prev} alt="" />
        </div>
        <ol>
          <li className="page-first"><div className="num-selected">1</div></li>
          <li className="page"><div className="num">2</div></li>
          <li className="page"><div className="num">3</div></li>
          <li className="page"><div className="num">4</div></li>
        </ol>
        <div>
          <img src={next} alt="" />
        </div>
        <div>
          <img src={end} alt="" />
        </div>
      </div>
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
