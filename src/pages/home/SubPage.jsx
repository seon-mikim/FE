import styled from "styled-components";
import "./subpage.css";
import CardLi from "../../components/Card/CardLi";
const SubPage = () => {
  const first = "/first.gif";
  const prev = "/prev.gif";
  const next = "/next.gif";
  const end = "/end.gif";

  const productList = [
    {
      id: "P00000KP",
      name: "Denim Shirt Jacket-Black",
      price: 119000,
      img: ["/p1.jpg", "/p1-2.png"],
      buySize: {
        s: 0,
        m: 0,
        l: 0,
      },
      buyQuantity: 0,
      stock: {
        s: 5,
        m: 6,
        l: 4,
      },
      totalStock: 15,
    },
    {
      id: "P00000KO",
      name: "GOALSTUDIO Delight Tote Bag",
      price: 95200,
      img: ["/p2.jpg"],
      buyQuantity: 0,
      totalStock: 10,
    },
    {
      id: "P00000KQ",
      name: "Denim Shirt Jacket-Blue",
      price: 119000,
      img: ["/p3.jpg", "/p3-2.png"],
      buySize: {
        s: 0,
        m: 0,
        l: 0,
      },
      buyQuantity: 0,
      stock: {
        s: 5,
        m: 6,
        l: 4,
      },
      totalStock: 15,
    },

    {
      id: "P00000KA",
      name: "GOALSTUDIO Delight Bag",
      price: 119000,
      img: ["/p4.jpg", "/p4-2.png"],
      buyQuantity: 0,
      totalStock: 3,
    },
  ];
  const renderCard = (product) => {
    return (
      <CardLi
        key={product.id}
        id={product.id}
        name={product.name}
        price={product.price}
        img={product.img}
        productData={product}
      />
    );
  };

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
      <ItemListGrid>{productList.map(renderCard)}</ItemListGrid>
      <div className="pagination">
        <div>
          <img src={first} alt="" />
        </div>
        <div>
          <img src={prev} alt="" />
        </div>
        <ol>
          <li className="page-first">
            <div className="num-selected">1</div>
          </li>
          <li className="page">
            <div className="num">2</div>
          </li>
          <li className="page">
            <div className="num">3</div>
          </li>
          <li className="page">
            <div className="num">4</div>
          </li>
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
