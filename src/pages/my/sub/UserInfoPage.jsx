
import { UserCartList, UserProfileList, UserSalesList } from '../../../components/MypageList';

import MyPageSection from '../../../components/MypageSections';
const UserInfoPage = () => {
  const UserProfileSection = MyPageSection(UserProfileList);
  const UserCartListSection = MyPageSection(UserCartList);
  const UserSaleListSection = MyPageSection(UserSalesList);
  return (
    <>
      
    <UserProfileSection titleText="내 정보" />
    <UserCartListSection titleText="장바구니" />
    <UserSaleListSection titleText="내가 올린 상품" />
  
    </>
  );
};

export default UserInfoPage;
