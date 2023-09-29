import styled from "styled-components";
import "./detail.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ProductDetailPage = () => {
  const soldout = "/soldout.png";
  const cntUp = "/up.gif";
  const cntDown = "/down.gif";
  const deleteImg = "/x.gif";

  const { data: productData } = useLocation().state;

  const [isInitial, setIsInitial] = useState(true);
  const [productCount, setProductCount] = useState(1);
  const [option, setOption] = useState("");
  const [deleteOption, setDeleteOption] = useState("");
// 버튼 background 이미지로 변경
  const handleUpButton = (e) => {
    console.log(e.target.value);
    switch (e.target.value) {
      case "s":
        productData.buySize.s++;
        break;
      case "m":
        productData.buySize.m++;
        break;
      case "l":
        productData.buySize.l++;
        break;
    }
  };
  const handleDownButton = () => {
    switch (e.target.value) {
      case "s":
        productData.buySize.s--;
        break;
      case "m":
        productData.buySize.m--;
        break;
      case "l":
        productData.buySize.l--;
        break;
    }
  };
  const changeQuantity = () => {};

  const deleteItem = (e) => {
    setDeleteOption(e.target.value);
    switch (e.target.value) {
      case "s":
        productData.buySize.s = 0;
        break;
      case "m":
        productData.buySize.m = 0;
        break;
      case "l":
        productData.buySize.l = 0;
        break;
    }
    console.log(productData.buySize);
  };

  const handleSelect = (e) => {
    if (isInitial) setIsInitial(false);
    setOption(e.target.value);
    switch (e.target.value) {
      case "s":
        productData.buySize.s++;
        break;
      case "m":
        productData.buySize.m++;
        break;
      case "l":
        productData.buySize.l++;
        break;
    }
    console.log(productData.buySize);
  };

  useEffect(() => {
    setOption("");
  }, [productData]);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const renderImg = (data) => {
    return (
      <div key={Math.random()}>
        <img src={data} alt="" />
      </div>
    );
  };

  return (
    <>
      <div>{productData.buySize.s}</div>
      <Section>
        <div className="img-area">
          <ProductImg default={productData.img}>
            <div>
              <Slider {...settings}>{productData.img.map(renderImg)}</Slider>
            </div>
          </ProductImg>
        </div>
        <div className="info-area">
          <div className="title">
            {productData.name}
            <div className="sold-out">
              <img src={soldout} alt="" />
            </div>
          </div>
          <div className="price">{productData.price.toLocaleString()}원</div>

          {productData?.buySize && (
            <div className="tr">
              <div className="th">사이즈</div>
              <div className="td">
                <select className="option" onChange={handleSelect}>
                  <option key="" value="" disabled={isInitial ? false : true}>
                    - [필수] 옵션을 선택해 주세요 -
                  </option>
                  <option key="s" value="s">
                    S
                  </option>
                  <option key="m" value="m">
                    M
                  </option>
                  <option key="l" value="l">
                    L
                  </option>
                </select>
              </div>
            </div>
          )}

          <div className="option-selected-area">
            {productData.buySize.s > 0 && (
              <div className="option-selected">
                <p>
                  {productData.name}
                  <br />-<span>S</span>
                </p>
                <div className="input-cnt">
                  <input
                    type="number"
                    value={productData.buySize.s}
                    onChange={changeQuantity}
                  />
                  <div className="button-img">
                    <button className="cntButton" value="s">
                      <img src={cntUp} alt="" onClick={handleUpButton} />
                    </button>
                    <CountButton
                      value="s"
                      onClick={handleDownButton}
                      disabled={productCount === 1 ? true : false}
                    >
                      <img src={cntDown} alt="" onClick={handleDownButton} />
                    </CountButton>
                  </div>
                </div>
                <button
                  className="delete-option"
                  onClick={deleteItem}
                  value="s"
                />
                <div>{productData.price.toLocaleString()}원</div>
              </div>
            )}

            {productData.buySize.m > 0 && (
              <div className="option-selected">
                <p>
                  {productData.name}
                  <br />-<span>M</span>
                </p>
                <div className="input-cnt">
                  <input
                    type="number"
                    value={productData.buySize.m}
                    onChange={changeQuantity}
                  />
                  <div className="button-img">
                    <button className="cntButton">
                      <img src={cntUp} alt="" onClick={handleUpButton} />
                    </button>
                    <CountButton
                      value={productCount}
                      disabled={productCount === 1 ? true : false}
                    >
                      <img src={cntDown} alt="" onClick={handleDownButton} />
                    </CountButton>
                  </div>
                </div>
                <button
                  className="delete-option"
                  onClick={deleteItem}
                  value="m"
                />
                <div>{productData.price.toLocaleString()}원</div>
              </div>
            )}

            {productData.buySize.l > 0 && (
              <div className="option-selected">
                <p>
                  {productData.name}
                  <br />-<span>L</span>
                </p>
                <div className="input-cnt">
                  <input
                    type="number"
                    value={productData.buySize.l}
                    onChange={changeQuantity}
                  />
                  <div className="button-img">
                    <button className="cntButton">
                      <img src={cntUp} alt="" onClick={handleUpButton} />
                    </button>
                    <CountButton
                      value={productCount}
                      disabled={productCount === 1 ? true : false}
                    >
                      <img src={cntDown} alt="" onClick={handleDownButton} />
                    </CountButton>
                  </div>
                </div>
                <button
                  className="delete-option"
                  onClick={deleteItem}
                  value="l"
                />
                <div>{productData.price.toLocaleString()}원</div>
              </div>
            )}
          </div>

          <div className="buy-button">구매하기</div>
          <div className="btn-area-low">
            <div className="btn cart">장바구니</div>
            <div className="btn like">관심상품</div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ProductDetailPage;

const Section = styled.div`
  padding: 60px 5% 0;
  display: flex;
  max-width: 1250px;
  margin: auto;
  margin-bottom: 10rem;
`;

const ProductImg = styled.div`
  width: 60%;
  max-height: 464px;
  position: relative;
  border: 1px solid #ececec;
  img {
    width: 100%;
  }
  @media all and (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    height: auto;
  }

  .slick-slide img {
    width: 100%;
    height: 100%;
  }

  .slick-dots {
    display: flex !important;
    justify-content: flex-start;
    position: absolute;
    bottom: -30px;
    // @media screen and (max-width: 1370px) {
    //   bottom: -40px;
    // }
    // @media screen and (max-width: 1330px) {
    //   bottom: -60px;
    // }
    // @media screen and (max-width: 1290px) {
    //   bottom: -80px;
    // }
    // @media screen and (max-width: 1250px) {
    //   bottom: -100px;
    // }
    // @media screen and (max-width: 768px) {
    //   bottom: -40px;
    // }
  }

  .slick-dots li {
    width: 95px;
    height: auto;
    margin: 0 0px;
    padding: 0 15px 0 0;
  }

  .slick-dots li button {
    width: auto;
    height: auto;
  }

  .slick-dots li button:before {
    width: 100px;
    height: 100px;
    background-size: 100px !important;
    background: url(${(props) => props.default});
    font-size: 0px;
    opacity: 0.35;
  }
  ${(props) =>
    props.default &&
    props.default
      .map(
        (img, index) => `
    .slick-dots li:nth-child(${index + 1}) button:before {
      background: url(${img});
    }
  `
      )
      .join("")}

  .slick-dots li.slick-active button:before {
    opacity: 0.95;
  }
`;

const CountButton = styled.button`
  border: none;
  background: none;
  width: 20px;
  height: 10px;
  display: flex;
  justify-content: center;
`;
