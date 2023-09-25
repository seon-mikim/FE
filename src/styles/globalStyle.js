import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import SpoqaHanSansBold from "../assets/fonts/SpoqaHanSansBold.woff2";
import SpoqaHanSansRegular from "../assets/fonts/SpoqaHanSansRegular.woff2";
import SpoqaHanSansLight from "../assets/fonts/SpoqaHanSansLight.woff2";
import SpoqaHanSansThin from "../assets/fonts/SpoqaHanSansThin.woff2";
const GlobalStyle = createGlobalStyle`
    ${reset}
       @font-face {
                font-family: 'SpoqaHanSansBold';
                font-weight: 700;
                src: url('${SpoqaHanSansBold}') format('woff2')
            }

            @font-face {
                font-family: 'SpoqaHanSansRegular';
                font-weight: 400;
                src: url('${SpoqaHanSansRegular}') format('woff2')
            }

            @font-face {
                font-family: 'SpoqaHanSansLight';
                font-weight: 300;
                src:url('${SpoqaHanSansLight}') format('woff2')
            }
            @font-face {
                font-family: 'SpoqaHanSansThin';
                font-weight: 100;
                src: url('${SpoqaHanSansThin}') format('woff2') 
            }

`;

export default GlobalStyle;
