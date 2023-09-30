import UserCartContent from '../../../components/MyPageContents/UserCartContent';
import UserProfileContent from '../../../components/MyPageContents/UserProfileContent';
import UserSaleItemsContent from '../../../components/MyPageContents/UserSaleItemsContent';
import MyPageSection from '../../../components/MypageSections';
const UserInfoPage = () => {
  const UserProfileSection = MyPageSection(UserProfileContent);
  const UserCartListSection = MyPageSection(UserCartContent);
  const UserSaleListSection = MyPageSection(UserSaleItemsContent);
  return (
    <>
      <UserProfileSection titleText="내 정보" />
      <UserCartListSection titleText="장바구니" />
      <UserSaleListSection titleText="내가 파는 상품" />
    </>
  );
};

export default UserInfoPage;
