import styled from "styled-components";
import "./detail.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ProductDetailPage = () => {
  const soldout = "/soldout.png";

  const { data: productData } = useLocation().state;

  const [isInitial, setIsInitial] = useState(true);
  const [size, setSize] = useState({ s: 0, m: 0, l: 0 });
  const [nonSize, setNonSize] = useState(1);

  const handleUpButton = (e) => {
    switch (e.target.value) {
      case "s":
        setSize((prev) => {
          return { ...prev, s: prev.s + 1 };
        });
        break;
      case "m":
        setSize((prev) => {
          return { ...prev, m: prev.m + 1 };
        });
        break;
      case "l":
        setSize((prev) => {
          return { ...prev, l: prev.l + 1 };
        });
        break;
      case "non":
        setNonSize((prev) => prev + 1);
        break;
    }
  };
  const handleDownButton = (e) => {
    switch (e.target.value) {
      case "s":
        setSize((prev) => {
          return { ...prev, s: prev.s - 1 };
        });
        break;
      case "m":
        setSize((prev) => {
          return { ...prev, m: prev.m - 1 };
        });
        break;
      case "l":
        setSize((prev) => {
          return { ...prev, l: prev.l - 1 };
        });
        break;
      case "non":
        setNonSize((prev) => prev - 1);
        break;
    }
  };
  const changeQuantity = (e) => {
    switch (e.target.id) {
      case "s":
        setSize((prev) => {
          return { ...prev, s: Number(e.target.value) };
        });
        break;
      case "m":
        setSize((prev) => {
          return { ...prev, m: Number(e.target.value) };
        });
        break;
      case "l":
        setSize((prev) => {
          return { ...prev, l: Number(e.target.value) };
        });
        break;
      case "non":
        setNonSize(Number(e.target.value));
        break;
    }
  };

  const deleteItem = (e) => {
    switch (e.target.value) {
      case "s":
        setSize((prev) => {
          return { ...prev, s: 0 };
        });

        break;
      case "m":
        setSize((prev) => {
          return { ...prev, m: 0 };
        });

        break;
      case "l":
        setSize((prev) => {
          return { ...prev, l: 0 };
        });
        break;
    }
  };

  const handleSelect = (e) => {
    if (isInitial) setIsInitial(false);

    switch (e.target.value) {
      case "s":
        setSize((prev) => {
          return { ...prev, s: prev.s + 1 };
        });

        break;
      case "m":
        setSize((prev) => {
          return { ...prev, m: prev.m + 1 };
        });

        break;
      case "l":
        setSize((prev) => {
          return { ...prev, l: prev.l + 1 };
        });
        break;
    }
  };

  const setBuySize = () => {
    if (productData.buySize) {
      productData.buySize = size;
      productData.buyQuantity = size.s + size.m + size.l;
    } else {
      productData.buyQuantity = nonSize;
    }
  };

  useEffect(() => {
    setBuySize();
    console.log("size", size);
    console.log("buySize", productData.buySize);
    console.log("productData", productData);
    console.log("nonSize", nonSize);
    if (productData.totalStock === 0) {
      setNonSize(0);
    }
  }, [setBuySize, size, productData]);

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
            {productData.totalStock === 0 && (
              <div className="sold-out">
                <img src={soldout} alt="" />
              </div>
            )}
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
                  <option
                    key="s"
                    value="s"
                    disabled={productData.stock.s === 0 ? true : false}
                  >
                    S {productData.stock.s === 0 && <span> [품절]</span>}
                  </option>
                  <option
                    key="m"
                    value="m"
                    disabled={productData.stock.m === 0 ? true : false}
                  >
                    M {productData.stock.m === 0 && <span> [품절]</span>}
                  </option>
                  <option
                    key="l"
                    value="l"
                    disabled={productData.stock.l === 0 ? true : false}
                  >
                    L {productData.stock.l === 0 && <span> [품절]</span>}
                  </option>
                </select>
              </div>
            </div>
          )}

          <div className="option-selected-area">
            {!productData.buySize && (
              <div className="option-selected">
                <p>{productData.name}</p>
                <div className="input-cnt">
                  <input
                    id="non"
                    type="number"
                    value={nonSize}
                    onChange={changeQuantity}
                  />
                  <div className="button-img">
                    <button
                      className="cntButton-up"
                      value="non"
                      onClick={handleUpButton}
                    />
                    <button
                      className="cntButton-down"
                      value="non"
                      onClick={handleDownButton}
                      disabled={nonSize === 1 ? true : false}
                    />
                  </div>
                </div>

                <div className="option-price">
                  {(productData.price * nonSize).toLocaleString()}원
                </div>
              </div>
            )}

            {size.s > 0 && (
              <div className="option-selected">
                <p>
                  {productData.name}
                  <br />-<span>S</span>
                </p>
                <div className="input-cnt">
                  <input
                    id="s"
                    type="number"
                    value={size.s}
                    onChange={changeQuantity}
                  />
                  <div className="button-img">
                    <button
                      className="cntButton-up"
                      value="s"
                      onClick={handleUpButton}
                    />
                    <button
                      className="cntButton-down"
                      value="s"
                      onClick={handleDownButton}
                      disabled={size.s === 1 ? true : false}
                    />
                  </div>
                </div>
                <button
                  className="delete-option"
                  onClick={deleteItem}
                  value="s"
                />
                <div className="option-price">
                  {(productData.price * size.s).toLocaleString()}원
                </div>
              </div>
            )}

            {size.m > 0 && (
              <div className="option-selected">
                <p>
                  {productData.name}
                  <br />-<span>M</span>
                </p>
                <div className="input-cnt">
                  <input
                    id="m"
                    type="number"
                    value={size.m}
                    onChange={changeQuantity}
                  />
                  <div className="button-img">
                    <button
                      className="cntButton-up"
                      value="m"
                      onClick={handleUpButton}
                    />
                    <button
                      className="cntButton-down"
                      value="m"
                      onClick={handleDownButton}
                      disabled={size.m === 1 ? true : false}
                    />
                  </div>
                </div>
                <button
                  className="delete-option"
                  onClick={deleteItem}
                  value="m"
                />
                <div className="option-price">
                  {(productData.price * size.m).toLocaleString()}원
                </div>
              </div>
            )}

            {size.l > 0 && (
              <div className="option-selected">
                <p>
                  {productData.name}
                  <br />-<span>L</span>
                </p>
                <div className="input-cnt">
                  <input
                    id="l"
                    type="number"
                    value={size.l}
                    onChange={changeQuantity}
                  />
                  <div className="button-img">
                    <button
                      className="cntButton-up"
                      value="l"
                      onClick={handleUpButton}
                    />
                    <button
                      className="cntButton-down"
                      value="l"
                      onClick={handleDownButton}
                      disabled={size.l === 1 ? true : false}
                    />
                  </div>
                </div>
                <button
                  className="delete-option"
                  onClick={deleteItem}
                  value="l"
                />
                <div className="option-price">
                  {(productData.price * size.l).toLocaleString()}원
                </div>
              </div>
            )}
          </div>

          <div className="total-price">
            TOTAL :{" "}
            {productData.buySize && (
              <span>
                {(
                  productData.price *
                  (size.s + size.m + size.l)
                ).toLocaleString()}
                원
              </span>
            )}
            {!productData.buySize && (
              <span>{(productData.price * nonSize).toLocaleString()}원</span>
            )}
          </div>
          {productData.totalStock != 0 && (
            <>
              <div className="buy-button">구매하기</div>
              <div className="btn-area-low">
                <div className="btn cart">장바구니</div>
                <div className="btn like">관심상품</div>
              </div>
            </>
          )}
          {productData.totalStock === 0 && (
            <div className="btn-area-low">
              <div className="btn cart">품절</div>
              <div className="btn like">관심상품</div>
            </div>
          )}
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
