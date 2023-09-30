// import UserCartContent from '../../../components/MyPageContents/UserCartContent';
import { UserCartList, UserProfileList } from '../../../components/MypageList';
// import UserSaleItemsContent from '../../../components/MyPageContents/UserSaleItemsContent';
import MyPageSection from '../../../components/MypageSections';
const UserInfoPage = () => {
  const UserProfileSection = MyPageSection(UserProfileList);
  const UserCartListSection = MyPageSection(UserCartList);
  // const UserSaleListSection = MyPageSection(UserSaleItemsContent);
  return (
    <>
      
    <UserProfileSection titleText="내 정보" />
    <UserCartListSection titleText="장바구니" />
  
    </>
  );
};

export default UserInfoPage;
