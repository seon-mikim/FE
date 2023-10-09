import { useState } from 'react';
import styled from 'styled-components';
import PostCode from '../../components/PostCode/PostCode';
import DefaultProfile from '../../assets/images/default_profile_img.gif';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [postCode, setPostCode] = useState('');
  const [file, setFile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleChange = (event) => {
    const { files } = event.target;
    if (files[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onloadend = () => {
        let base64data = reader.result;
        setFile(base64data);
      };
    }
  };

  const getAddressData = (addressData) => {
    setAddress(addressData);
  };

  const getPostCodeData = (postCodeData) => {
    setPostCode(postCodeData);
  };

  return (
    <FormContainer>
      <form>
        <Label>
          Login
          <ImageInputContainer>
            <ProfileImage src={file !== '' ? file : DefaultProfile} alt="" />
            <StyledInput type="file" onChange={handleChange} />
          </ImageInputContainer>
        </Label>

        <Label>이름</Label>
        <StyledInput type="text" placeholder="이름" />

        <Label>이메일</Label>
        <StyledInput
          value={email}
          onChange={handleEmailChange}
          type="email"
          placeholder="이메일"
        />

        <Label>비밀번호</Label>
        <StyledInput type="password" placeholder="비밀번호" />

        <Label>비밀번호 재확인</Label>
        <StyledInput type="password" placeholder="비밀번호 재확인" />

        <Label>핸드폰 번호</Label>
        <StyledInput type="number" placeholder="핸드폰 번호" />

        <div>
          <label>
            주소
            <StyledInput
              type="text"
              name="postcode"
              value={PostCode}
              placeholder="우편번호"
            />
            // 상세주소
            <postCode
              getAddressData={getAddressData}
              getPostcodeData={getPostCodeData}
            />
          </label>
        </div>

        <div>
          <label>
            <StyledInput type="text" placeholder="상세주소" />
          </label>
        </div>

        <label id="gender">
          성별
          <div>
            <input
              name="gender"
              id="male"
              className="radio-input gender-male-input"
              type="radio"
            />
            <span>남자 </span>
            <input
              name="gender"
              id="female"
              classname="radio-input gender-female-input"
              type="radio"
            />
            <span>여자 </span>
          </div>
        </label>

        <Button>회원 가입</Button>
      </form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 2em;
`;

const Label = styled.label`
  font-size: 1em;
`;

const StyledInput = styled.input`
  display: block;
  width: 300px;
  height: 30px;
  padding-left: 10px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 300px;
  height: 40px;
  font-size: 1em;
`;

const ImageInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: auto;
  height: auto;
  max-width: 200px;
  max-height: 200px;
`;

export default SignUpPage;
