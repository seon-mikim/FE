import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { signUp } from '../../apis/authApi/authApi';

function SignUpPage() {
  const navigate = useNavigate();

  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    address: '',
    addressDetail: '',
    addressZipcode: '',
    telNumber: '',
    gender: 'male',
    profileImage: {},
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'email') {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailPattern.test(value)) {
        setEmailError('올바른 이메일 형식이 아닙니다.');
      } else {
        setEmailError('');
      }
    }

    if (name === 'password') {
      const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (!passwordPattern.test(value)) {
        setPasswordError(
          '비밀번호는 최소 8자 이상이며, 숫자와 문자를 포함해야 합니다.'
        );
      } else {
        setPasswordError('');
      }
    }

    if (name === 'telNumber') {
      const phoneNumberPattern = /^010-\d{4}-\d{4}$/;
      if (!phoneNumberPattern.test(value)) {
        setPhoneNumberError(
          '올바른 휴대폰 번호 형식이 아닙니다. (예: 010-0000-0000)'
        );
      } else {
        setPhoneNumberError('');
      }
    }
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('email', formData.email);
      formDataToSend.append('password', formData.password);
      formDataToSend.append('name', formData.name);
      formDataToSend.append('address', formData.address);
      formDataToSend.append('addressDetail', formData.addressDetail);
      formDataToSend.append('addressZipcode', formData.addressZipcode);
      formDataToSend.append('telNumber', formData.telNumber);
      formDataToSend.append('gender', formData.gender);
      formDataToSend.append('profileImage', profileImage);

      const response = await axios.post(
        'http://15.165.177.248:8080/member/signup',
        formDataToSend
      );
      // signUp(formDataToSend)
      response.data.success && navigate('/login', { replace: true });
    } catch (error) {
      alert(error.response.data);
    }
  };

  const handlePasswordConfirm = (e) => {
    const { value } = e.target;
    setPasswordConfirm(value);
  };

  const idValidation = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://15.165.177.248:8080/member/signup',
        {
          formData,
        }
      );

      console.log('Login successful:', response.data);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <CenteredContainer>
      <RegistrationContainer>
        <Title>회원가입</Title>
        <Form>
          <ProfileImageLabel htmlFor="profileImage">
            프로필 이미지
          </ProfileImageLabel>
          <Input
            type="file"
            id="profileImage"
            name="profileImage"
            onChange={handleProfileImageChange}
          />
          <Label htmlFor="email">이메일</Label>
          <FlexBox>
            <EmailInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <CheckEmailButton>중복확인</CheckEmailButton>
          </FlexBox>
          {emailError && <ErrorText>{emailError}</ErrorText>}
          <Label htmlFor="password">비밀번호</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {passwordError && <ErrorText>{passwordError}</ErrorText>}
          <Label htmlFor="passwordConfirm">비밀번호 중복확인</Label>
          <Input
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={handlePasswordConfirm}
          />
          {formData.password !== passwordConfirm && (
            <ErrorText>비밀번호가 일치하지 않습니다.</ErrorText>
          )}
          <Label htmlFor="name">이름</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <Label htmlFor="address">주소</Label>
          <Input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
          <Label htmlFor="address">상세 주소</Label>
          <Input
            type="text"
            id="addressDetail"
            name="addressDetail"
            value={formData.addressDetail}
            onChange={handleInputChange}
          />
          <Label htmlFor="postalCode">우편번호</Label>
          <Input
            type="text"
            id="addressZipcode"
            name="addressZipcode"
            value={formData.addressZipcode}
            onChange={handleInputChange}
          />
          <Label htmlFor="phoneNumber">휴대폰 번호</Label>
          <Input
            type="text"
            id="telNumber"
            name="telNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
          {phoneNumberError && <ErrorText>{phoneNumberError}</ErrorText>}
          <CheckBoxGroup>
            <Label>성별</Label>
            <GenderDiv>
              <CheckBoxLabel>
                Male
                <CheckBoxInput
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleInputChange}
                />
              </CheckBoxLabel>
              <CheckBoxLabel>
                Female
                <CheckBoxInput
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleInputChange}
                />
              </CheckBoxLabel>
            </GenderDiv>
          </CheckBoxGroup>

          <Button onClick={(e) => handleRegister(e)}>Register</Button>
        </Form>
      </RegistrationContainer>
    </CenteredContainer>
  );
}

export default SignUpPage;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 130vh;
`;

const RegistrationContainer = styled.div`
  width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const CheckBoxGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckBoxLabel = styled.label`
  margin-right: 10px;
`;

const CheckBoxInput = styled.input`
  margin-right: 5px;
`;

const Button = styled.button`
  background-color: black;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorText = styled.p`
  color: red;
  margin-bottom: 10px;
  font-size: 12px;
`;

const EmailInput = styled(Input)`
  width: 75%;
  margin-right: 10px;
`;

const CheckEmailButton = styled(Button)`
  font-size: 12px;
  height: 38px;
`;

const ProfileImageLabel = styled(Label)`
  margin-top: 10px;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GenderDiv = styled.div`
  margin-bottom: 10px;
`;
