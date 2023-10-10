import { useRef, useState } from 'react';

const UseDeliveryForm = () => {
  const inputRefs = useRef({});

  const [alertMessage, setAlertMessage] = useState({
    recipient: '',
    recipient_tel: '',
    recipient_address: '',
  });
  const [fullPhoneNumber, setFullPhoneNumber] = useState('');
  const [deliveryInput, setDeliveryInput] = useState({
    recipient: '',
    recipient_tel: '',
    recipient_address: '',
    recipient_zipcode: '',
    recipient_detail_address: '',
  });
  const [phoneInput, setPhoneInput] = useState({
    firstPhoneNumber: '',
    secondPhoneNumber: '',
    thirdPhoneNumber: '',
  });

  const handleDelieryInputChange = (event) => {
    const { name, value } = event.target;
    setDeliveryInput({ ...deliveryInput, [name]: value });
  };

  const validateUserName = () => {
    const userName = inputRefs.current['recipient'].value;
    const invalidUserName = userName === '' && userName.trim() === '';
    if (invalidUserName) {
      setAlertMessage({
        ...alertMessage,
        recipient: '이름을 올바르게 작성해주세요',
      });
    } else {
      setAlertMessage({ ...alertMessage, recipient: '' });
    }
  };

  const validateAddress = () => {
    const zipCode = inputRefs.current['recipient_zipcode'].value;
    const address = inputRefs.current['recipient_address'].value.trim();
    const detailAddress =
      inputRefs.current['recipient_detail_address'].value.trim();

    const invalidZipCode = !/^[0-9]{5}$/.test(zipCode); // 정확히 3개의 숫자인지 확인
    const invalidAddress = !address;
    const invalidDetailAddress = !detailAddress;

    if (invalidZipCode || invalidAddress || invalidDetailAddress) {
      setAlertMessage({
        ...alertMessage,
        recipient_address: '올바른 주소를 입력해주세요',
      });
    } else {
      setAlertMessage({
        ...alertMessage,
        recipient_address: '',
      });
    }
  };

  const validatePhoneNumber = () => {
    const koreanPhoneNumberRegex = /^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$/;
    if (!koreanPhoneNumberRegex.test(fullPhoneNumber)) {
      setAlertMessage({
        ...alertMessage,
        recipient_tel: '핸드폰 번호가 유효하지 않습니다',
      });
    } else {
      setAlertMessage({ ...alertMessage, recipient_tel: '' });
    }
  };

  const handlePhoneInputChange = (event) => {
    const { name, value } = event.target;

    if (/[^0-9]/.test(value)) {
      return;
    }
    setPhoneInput((prevPhoneInput) => {
      const updatedPhoneInput = { ...prevPhoneInput, [name]: value };
      const updatedFullPhoneNumber = `${updatedPhoneInput.firstPhoneNumber}-${updatedPhoneInput.secondPhoneNumber}-${updatedPhoneInput.thirdPhoneNumber}`;

      setFullPhoneNumber(updatedFullPhoneNumber);
      setDeliveryInput((prevDeliveryInput) => ({
        ...prevDeliveryInput,
        recipient_tel: updatedFullPhoneNumber,
      }));

      return updatedPhoneInput;
    });
  };
  const addRef = (name, ref) => {
    inputRefs.current[name] = ref;
  };
  const getAddress = (recipient_address, recipient_zipcode) => {
    setDeliveryInput({
      ...deliveryInput,
      recipient_address,
      recipient_zipcode,
    });
  };

  return {
    addRef,
    getAddress,
    validateAddress,
    validatePhoneNumber,
    validateUserName,
    handleDelieryInputChange,
    handlePhoneInputChange,
    deliveryInput,
    phoneInput,
    alertMessage,
  };
};

export default UseDeliveryForm;
