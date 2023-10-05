
import UserCartContent from '../../components/MyPageContents/UserCartContent';
import MyPageSection from '../../components/MypageSections';
import Main from '../../components/ui/Main/Main';

const CartPage = () => {

  return (
    <Main>
      <MyPageSection titleText='장바구니'>
        <UserCartContent/>
      </MyPageSection>
    </Main>
  );
};

export default CartPage;
