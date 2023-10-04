import { useEffect, useRef, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const search = "/search.png";

  const [scrollPosition, setScrollPosition] = useState(0);
  const headerRef = useRef(null);
  const updateScroll = () => {
    setScrollPosition(window.scrollY);
  };
  const headerChange = () => {
    if (scrollPosition < 100) {
      headerRef.current.style = "opacity:0";
    } else {
      headerRef.current.style = "opacity:1";
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);

    headerChange();
  }, [scrollPosition]);
  return (
    <>
      <div className="header">
        <div className="right-area">
          <div>
            <img src={search} alt="" />
          </div>
        </div>

        <div className="header-inner">
          <StyledLink to="/">
            <div className="logo">로고</div>
          </StyledLink>
          <ul>
            <li className="category">NEW</li>
            <StyledLinkCategory to="/subpage">
              {" "}
              <li className="category">APPAREL</li>
            </StyledLinkCategory>

            <li className="category">UNIFORM</li>
            <li className="category">ACCESSORIES</li>
            <li className="category">COLLECTIBLES</li>
            <li className="category">COOLABORATION</li>
            <li className="category">SALE</li>
          </ul>
          <div className="log">
            <div className="user-button">
              <StyledLink to="/login">LOGIN</StyledLink>
              {/* 로그인 되어 있다면 로그아웃 */}
            </div>
            <div className="user-button">
              <StyledLink to="/signup">JOIN</StyledLink>
              {/* 로그인 되어 있다면 마이페이지 */}
            </div>
            <div className="user-button">
              <StyledLink to="/cart">
                CART <span>0</span>
              </StyledLink>
            </div>
          </div>
        </div>
      </div>
      <div className="header-scrolled" ref={headerRef}>
        <div className="logo-scrolled">로고</div>
        <div className="header-scrolled-inner">
          <ul>
            <li className="category-scrolled">NEW</li>
            <li className="category-scrolled">APPAREL</li>
            <li className="category-scrolled">UNIFORM</li>
            <li className="category-scrolled">ACCESSORIES</li>
            <li className="category-scrolled">COLLECTIBLES</li>
            <li className="category-scrolled">COOLABORATION</li>
            <li className="category-scrolled">SALE</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;

const StyledLink = styled(Link)`
  &:visited,
  &:link {
    text-decoration: none;
    color: #999;
  }
  &:hover {
    color: white;
  }
`;
const StyledLinkCategory = styled(Link)`
  &:visited,
  &:link {
    text-decoration: none;
    color: white;
  }
`;
