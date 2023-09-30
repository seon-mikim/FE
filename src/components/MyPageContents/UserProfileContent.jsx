import MypageCard from '../MypageCard';
import UserProfileCard from '../MypageCard/UserProfileCard/UserProfileCard';

const UserProfileContent = () => {
  const ProfileCard = MypageCard(UserProfileCard);
  /**
   * 유저프로필 정보 데이터 예시
   * */
  const userProfileData = {
    user_name: '김테스트',
    user_email: 'test@test.com',
    tel_number: '010-1234-5678',
  };

  return <ProfileCard profileData={userProfileData} />;
};

export default UserProfileContent;

