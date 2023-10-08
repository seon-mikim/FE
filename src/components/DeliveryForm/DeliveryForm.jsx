import styled from 'styled-components';
import Input from '../ui/Input/Input';
import { useState } from 'react';
import PostCodeButton from '../PostCodeButton/PostCodeButton';
import UseDeliveryForm from '../../hooks/UseDeliveryForm';

const DeliveryForm = () => {
  const [isShown, setIsShown] = useState(true);
  const {
    handleDevlieInputChange,
    handlePhoneInputChange,
    getAddress,
    deliveryInput,
    phoneInput,
  } = UseDeliveryForm();
  
  const handleAccordionButton = () => {
    setIsShown((prev) => !prev);
  };
  return (
    <DeliveryFormWrap>
      <AccordionHeader>
        <div>배송지</div>
        <button onClick={handleAccordionButton}>입력하기</button>
      </AccordionHeader>
      <>
        {isShown && (
          <DeliveryFormContent>
            <label>
              수령인
              <Input
                placeholder="수령인"
                name="recipient"
                value={deliveryInput.recipient}
                onChange={handleDevlieInputChange}
              />
            </label>
            <label>
              연락처
              <TelInputWrap name="">
                <TelInput
                  placeholder="010"
                  name="fristPhoneNumber"
                  value={phoneInput.fristPhoneNumber}
                  onChange={handlePhoneInputChange}
                />
                <div>-</div>
                <TelInput
                  placeholder="1234"
                  name="secondPhoneNumber"
                  value={phoneInput.secondPhoneNumber}
                  onChange={handlePhoneInputChange}
                />
                <div>-</div>
                <TelInput
                  placeholder="5678"
                  name="thridPhoneNumber"
                  value={phoneInput.thridPhoneNumber}
                  onChange={handlePhoneInputChange}
                />
              </TelInputWrap>
            </label>
            <label>
              배송지
              <div>
                <div>
                  <PostCodeInput
                    placeholder="우편번호"
                    name="recipient_zipcode"
                    value={deliveryInput.recipient_zipcode}
                    onChange={handleDevlieInputChange}
                  />
                  <PostCodeButton getAdress={getAddress} />
                </div>
                <div>
                  <AddressInput
                    placeholder="주소"
                    name="recipient_address"
                    value={deliveryInput.recipient_address}
                    onChange={handleDevlieInputChange}
                  />
                </div>
                <div>
                  <DetailAddressInput
                    name="recipient_detail_address"
                    value={deliveryInput.recipient_detail_address}
                    placeholder="상세주소"
                    onChange={handleDevlieInputChange}
                  />
                </div>
              </div>
            </label>
          </DeliveryFormContent>
        )}
      </>
    </DeliveryFormWrap>
  );
};

export default DeliveryForm;

const DeliveryFormWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 76%;
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e2e2e2;
  padding: 20px;
`;
const DeliveryFormContent = styled.div`
  padding: 20px;
  border: 1px solid #e2e2e2;
  label {
    display: flex;
    margin: 10px;
    gap: 30px;
    input {
      height: 30px;
    }
  }
`;

const TelInput = styled(Input)`
  width: 40px;
  text-align: center;
`;
const TelInputWrap = styled.div`
  display: flex;
  align-items: center;
`;
const PostCodeInput = styled(Input)`
  width: 80px;
  margin-bottom: 10px;
`;
const AddressInput = styled(Input)`
  width: 350px;
  margin-bottom: 10px;
`;
const DetailAddressInput = styled(Input)`
  width: 350px;
`;
