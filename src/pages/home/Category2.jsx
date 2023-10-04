import styled from "styled-components";
import "./subpage.css";
import CardLi from "../../components/Card/CardLi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Category2 = () => {
  const [page, setPage] = useState(1);
  const limit = 4;
  const offset = (page - 1) * limit;

  const productList = [
    {
      id: "P00000KA",
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
      category: "TOPS & T-SHIRTS",
    },
    {
      id: "P00000KB",
      name: "GOALSTUDIO Delight Tote Bag",
      price: 95200,
      img: ["/p2.jpg"],
      buyQuantity: 0,
      totalStock: 10,
      category: "HOODIES & SWEATSHIRTS",
    },
    {
      id: "P00000KC",
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
      category: "PANTS",
    },

    {
      id: "P00000KD",
      name: "GOALSTUDIO Delight Bag",
      price: 119000,
      img: ["/p4.jpg", "/p4-2.png"],
      buyQuantity: 0,
      totalStock: 3,
      category: "BUNDLE",
    },

    {
      id: "P00000KE",
      name: "Denim Shirt Jacket-Black",
      price: 119000,
      img: ["/p1-2.png", "/p1.jpg"],
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
      category: "TOPS & T-SHIRTS",
    },
    {
      id: "P00000KF",
      name: "GOALSTUDIO Delight Tote Bag",
      price: 95200,
      img: ["/p2.jpg"],
      buyQuantity: 0,
      totalStock: 10,
      category: "TOPS & T-SHIRTS",
    },
    {
      id: "P00000KG",
      name: "Denim Shirt Jacket-Blue",
      price: 119000,
      img: ["/p3-2.png", "/p3.jpg"],
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
      category: "PANTS",
    },

    {
      id: "P00000KH",
      name: "GOALSTUDIO Delight Bag",
      price: 119000,
      img: ["/p4-2.png", "/p4.jpg"],
      buyQuantity: 0,
      totalStock: 3,
      category: "BUNDLE",
    },
  ];

  const sortByCategory = () => {
    const fitered = productList.filter((product) => {
      return product.category === "HOODIES & SWEATSHIRTS";
    });
    return fitered;
  };


  //카테고리 클릭하면 다른 Link로 이동 -> 뒤로가기 눌러도 카테고리 유지

  //maxPage가 소수점일 경우 올림
  const maxPage = Math.ceil(sortByCategory().length / limit);

  const sliceData = (data) => {
    if (data) {
      let result = data.slice(offset, offset + limit);
      return result;
    }
  };

  const changePage = (e) => {
    setPage(Number(e.target.value));
  };
  const changePagination = (e) => {
    switch (e.target.value) {
      case "first":
        setPage(1);
        break;
      case "prev":
        setPage((prev) => prev - 1);
        break;
      case "next":
        setPage((prev) => prev + 1);
        break;
      case "end":
        setPage(maxPage);
        break;
    }
  };

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
  const renderPagination = () => {
    const result = [];
    for (let i = 0; i < maxPage; i++) {
      if (i === 0) {
        result.push(
          <li className="page-first" key="1">
            <button
              className={page === 1 ? "selected" : "num"}
              value="1"
              onClick={changePage}
            >
              1
            </button>
          </li>
        );
      } else {
        result.push(
          <li className="page" key={i + 1}>
            <button
              className={page === i + 1 ? "selected" : "num"}
              value={i + 1}
              onClick={changePage}
            >
              {i + 1}
            </button>
          </li>
        );
      }
    }
    return result;
  };

  useEffect(() => {
    sortByCategory();
  }, []);

  return (
    <Section>
      <div className="sub-title">
        <div className="sub-list-title">APPAREL</div>
        <div className="sub-list-select">
          <Link
            to={`/category/tops-t-shirts`}
            className={"sub-list-btn"}

          >
            TOPS & T-SHIRTS
          </Link>
          <Link
            to={`/category/hoodies-sweatshirts`}
            className={"sub-list-btn-selected"}

          >
            HOODIES & SWEATSHIRTS
          </Link>
          <Link
            to={`/category/pants`}
            className={"sub-list-btn"}

          >
            PANTS
          </Link>
          <Link
            to={`/category/bundle`}
            className={"sub-list-btn"}

          >
            BUNDLE
          </Link>
        </div>
      </div>
      <ItemListGrid>{sliceData(sortByCategory()).map(renderCard)}</ItemListGrid>
      <div className="pagination">
        <button
          className="first-page"
          value="first"
          onClick={changePagination}
          disabled={page === 1 ? true : false}
        ></button>
        <button
          className="prev-page"
          value="prev"
          onClick={changePagination}
          disabled={page === 1 ? true : false}
        ></button>
        <ol>{renderPagination()}</ol>
        <button
          className="next-page"
          value="next"
          onClick={changePagination}
          disabled={page === maxPage ? true : false}
        ></button>
        <button
          className="end-page"
          value="end"
          onClick={changePagination}
          disabled={page === maxPage ? true : false}
        ></button>
      </div>
    </Section>
  );
};

export default Category2;

const Section = styled.div`
  padding: 80px 5% 20px;
`;

const ItemListGrid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 60px 5% 0;
`;
