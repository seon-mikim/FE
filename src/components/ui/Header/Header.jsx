import { useEffect, useRef, useState } from "react";
import "./Header.css";

const Header = () => {
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
          <div>kr</div>
          <div>en</div>
          <div>search</div>
        </div>

        <div className="header-inner">
          <div className="logo">로고</div>
          <ul>
            <li className="category">NEW</li>
            <li className="category">APPAREL</li>
            <li className="category">UNIFORM</li>
            <li className="category">ACCESSORIES</li>
            <li className="category">COLLECTIBLES</li>
            <li className="category">COOLABORATION</li>
            <li className="category">SALE</li>
          </ul>
          <div className="log">
            <div>LOGIN</div>
            <div>JOIN</div>
            <div>CART</div>
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
