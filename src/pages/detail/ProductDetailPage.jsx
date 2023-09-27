import styled from "styled-components";
import "./detail.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductDetailPage = () => {
  const p1 = "/p1.jpg";
  const p2 = "/p2.jpg";
  const soldout = "/soldout.png";
  const cntUp = "/up.gif";
  const cntDown = "/down.gif";
  const deleteItem = "/x.gif";

  const productImg = [p1, p2];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Section>
        {/* <div className="img-area">
          <div className="img-div">
            <img src={p1} alt="" />
          </div>
        </div> */}
        <div className="img-area">
          <ProductImg default={productImg}>
            <div>
              <Slider {...settings}>
                <div>
                  <img src={productImg[0]} alt="" />
                </div>
                <div>
                  <img src={productImg[1]} alt="" />
                </div>
              </Slider>
            </div>
          </ProductImg>
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
              <select className="option">
                <option value="">- [필수] 옵션을 선택해 주세요 -</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
              </select>
            </div>
          </div>

          <div className="option-selected">
            <p>
              Denim Shirt Jacket
              <br />-<span>M</span>
            </p>
            <div className="input-cnt">
              <input type="number" />
              <div className="button-img">
                <img src={cntUp} alt="" />
                <img src={cntDown} alt="" />
              </div>
            </div>
            <div>
              <img src={deleteItem} alt="" />
            </div>
            <div>99,000원</div>
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
    position: relative;
    bottom: -20px;
    @media screen and (max-width: 1370px) {
      bottom: -40px;
    }
    @media screen and (max-width: 1330px) {
      bottom: -60px;
    }
    @media screen and (max-width: 1290px) {
      bottom: -80px;
    }
    @media screen and (max-width: 1250px) {
      bottom: -100px;
    }
    @media screen and (max-width: 768px) {
      bottom: -40px;
    }
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
