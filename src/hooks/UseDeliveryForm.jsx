import { useState } from 'react';

const UseDeliveryForm = () => {
  const [fullPhoneNumber, setFullPhoneNumber] = useState('');
  const [deliveryInput, setDeliveryInput] = useState({
    recipient: '',
    recipient_tel: '',
    recipient_address: '',
    recipient_zipcode: '',
    recipient_detail_address: '',
  });
  const [phoneInput, setPhoneInput] = useState({
    fristPhoneNumber: '',
    secondPhoneNumber: '',
    thridPhoneNumber: '',
  });

  const handleDevlieInputChange = (event) => {
    const { name, value } = event.target;
    setDeliveryInput({ ...deliveryInput, [name]: value });
  };

  const handlePhoneInputChange = (event) => {
    const { name, value } = event.target;
    setPhoneInput((prevPhoneInput) => {
      const updatedPhoneInput = { ...prevPhoneInput, [name]: value };
      const updatedFullPhoneNumber = `${updatedPhoneInput.fristPhoneNumber}-${updatedPhoneInput.secondPhoneNumber}-${updatedPhoneInput.thridPhoneNumber}`;
      setFullPhoneNumber(updatedFullPhoneNumber);
      setDeliveryInput((prevDeliveryInput) => ({
        ...prevDeliveryInput,
        recipient_tel: fullPhoneNumber,
      }));
      return updatedPhoneInput;
    });
  };

  const getAddress = (recipient_address, recipient_zipcode) => {
    setDeliveryInput({
      ...deliveryInput,
      recipient_address,
      recipient_zipcode,
    });
  };
  return {
    handleDevlieInputChange,
    handlePhoneInputChange,
    getAddress,
    deliveryInput,
    phoneInput,
  };
};

export default UseDeliveryForm;
