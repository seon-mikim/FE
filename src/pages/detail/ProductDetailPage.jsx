import React, { useState } from "react";
import styled from "styled-components";
import "./detail.css";

const ProductDetailPage = () => {
  const p1 = "/p1.jpg";
  const soldout = "/soldout.png";
  const [view, setView] = useState(false);
  return (
    <Section>
      <div className="img-area">
        <div className="img-div">
          <img src={p1} alt="" />
        </div>
      </div>
      <div className="info-area">
        <div className="title">
          Denim Shirt Jacket
          <div className="sold-out">
            <img src={soldout} alt="" />
          </div>
        </div>
        <div className="price">119,000원</div>

        <div className="tr">
          <div className="th">사이즈</div>
          <div className="td">
            <ul
              onClick={() => {
                setView(!view);
              }}
              className="option"
            >
              - [필수] 옵션을 선택해 주세요 -
              {view && (
                <>
                  {/* <li>- [필수] 옵션을 선택해 주세요 -</li> */}
                  <li>S</li>
                  <li>M</li>
                  <li>L</li>
                  <li>XL</li>
                </>
              )}
            </ul>
          </div>
        </div>

        <div className="buy-button">구매하기</div>
        <div className="btn-area-low">
          <div className="btn cart">장바구니</div>
          <div className="btn like">관심상품</div>
        </div>
      </div>
    </Section>
  );
};

export default ProductDetailPage;

const Section = styled.div`
  padding: 60px 5% 0;
  display: flex;
  max-width: 1250px;
  margin: auto;
`;
