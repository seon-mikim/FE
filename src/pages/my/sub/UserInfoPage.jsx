import UserCartContent from '../../../components/MyPageContents/UserCartContent';
import UserProfileContent from '../../../components/MyPageContents/UserProfileContent';
import MyPageSection from '../../../components/MypageSections';
const UserInfoPage = () => {
  const UserProfileSection = MyPageSection(UserProfileContent);
  const UserCartListSection = MyPageSection(UserCartContent);
  return (
    <>
      
      <UserProfileSection titleText="내 정보" />
      <UserCartListSection titleText="장바구니" />
    </>
  );
};

export default UserInfoPage;
