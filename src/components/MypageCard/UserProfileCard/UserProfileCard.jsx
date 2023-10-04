import { Link } from 'react-router-dom';
import DefaultUserImg from '../../../assets/images/default_profile_img.gif';
import Image from '../../ui/Image/Image';
import Text from '../../ui/Text/Text';
import Wrap from '../../ui/Wrap/Wrap';
import * as S from './style';
import Span from '../../ui/Span/Span';

const UserProfileCard = ({ profileData }) => {
  const checkedProfileImag = profileData.profile_image
    ? profileData.profile_image
    : DefaultUserImg;
  return (
    <S.CardWrapper>
      <S.ImgWrap>
        <Image imageSrc={checkedProfileImag} altText="유저이미지" />
      </S.ImgWrap>
      <S.UserInfo>
        <Wrap>
          <S.UserName text={`${profileData.user_name} 님`} />
          <Text text={profileData.user_email} />
        </Wrap>
        <Wrap>
          <S.Button>
            <Link to="/my/settings">정보 수정</Link>
          </S.Button>
        </Wrap>
      </S.UserInfo>
      <S.BenfitWrap>
        <S.BenfitItemWrap>
          <Span text="쿠폰" />
          <Text text="1" />
        </S.BenfitItemWrap>
        <S.BenfitItemWrap>
          <Span text="마일리지" />
          <Text text="1,000" />
        </S.BenfitItemWrap>
        <S.BenfitItemWrap>
          <Span text="페이머니" />
          <Text text="10,000" />
        </S.BenfitItemWrap>
      </S.BenfitWrap>
    </S.CardWrapper>
  );
};

export default UserProfileCard;
