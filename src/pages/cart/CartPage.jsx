import styled from 'styled-components';
import { UserCartList } from '../../components/MypageList';
import MyPageSection from '../../components/MypageSections';
import Main from '../../components/ui/Main/Main';
import Wrap from '../../components/ui/Wrap/Wrap';

const CartPage = () => {
  const CartSection = MyPageSection(UserCartList);
  return (
    <Main>
      <CartBody>
        <CartSection titleText="장바구니" />
        <div>
          <div>결제정보</div>
          <div>
            <div>상품 수량</div>
            <span>1개</span>
          </div>
          <div>
            <div>상품 금액</div>
            <span>10000</span>
          </div>
          <div>
            <div>총 결제금액</div>
            <span>10000</span>
          </div>
          <div>
          <button>구매하기</button>
          </div>
        </div>
      </CartBody>
    </Main>
  );
};

export default CartPage;



const CartBody = styled(Wrap)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  section {
    width: 70%;
    flex: 0.8;
  }
`