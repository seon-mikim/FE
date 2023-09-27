import React from "react";
import "./footer.css";

const Footer = () => {
  const top = "/top.png";
  const bottom = "/bottom.png";

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const goToBottom = () => {
    window.scrollTo({ top: 10000, behavior: "smooth" });
  };
  return (
    <>
      <table width="100%">
        <tbody>
          <tr>
            <td width="5%" height="300" bgcolor="#1d1d1d"></td>
            <td width="90%" bgcolor="#1d1d1d">
              <table width="1500">
                <tbody>
                  <tr height="40"></tr>
                  <tr>
                    <td height="40">
                      <span>이용약관</span>
                      <span>개인정보취급방침</span>
                      <span>이용안내</span>
                      <span>이벤트</span>
                    </td>
                  </tr>
                  <tr height="60">
                    <td>
                      <span>SKT CS T1</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        회사명 : 에스케이텔레콤씨에스티원 주식회사 l CEO :
                        Joseph Patrick Marsh l 주소 : 서울특별시 강남구 선릉로
                        627 (논현동) l 사업자번호 : 614-81-05875
                      </p>

                      <p>
                        통신판매업 신고번호 : 제 2021-서울강남-02732호 l E-mail
                        : shop@t1.gg
                      </p>
                      <p>
                        안전거래를 위해 페이먼트구매안전(에스크로)에 가입하여
                        서비스를 제공하고 있습니다.
                      </p>
                      <p>
                        ☎ 02-6009-2500 (오후 12시 ~ 오후 4시 운영 / 공휴일 휴무)
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td height="40">
                      <p>저작권 © T1 Shop All Rights Reseved</p>
                    </td>
                  </tr>
                  <tr>
                    <td height="50"></td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td width="5%" bgcolor="#1d1d1d"></td>
          </tr>
        </tbody>
      </table>
      <div className="scroll-button">
        <img src={top} alt="" onClick={goToTop} />
        <img src={bottom} alt="" onClick={goToBottom} />
      </div>
    </>
  );
};

export default Footer;
