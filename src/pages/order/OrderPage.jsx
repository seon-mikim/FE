import styled from 'styled-components';
import T from '../../assets/images/black_t.jpg';
import { useState } from 'react';
import Main from '../../components/ui/Main/Main';
import MyPageSection from '../../components/MypageSections';
import Wrap from '../../components/ui/Wrap/Wrap';
import PaymentCard from '../../components/PaymentCard/PaymentCard';

const OrderPage = () => {
  const userCartData = [
    {
      productId: 1,
      product_name: '티셔츠',
      product_img: T,
      count: 1,
      price: 10000,
      option: 's',
    },
  ];
  const [addressInput, setAddressInput] = useState({
    delivery_zipcode: '',
    delivery_address: '',
    delivery_detail: '',
  });

  const handleAddressSubmit = (event) => {
    event.preventDefault();
    setAddressInput({
      delivery_zipcode: '',
      delivery_address: '',
      delivery_detail: '',
    });
    console.log(addressInput);
  };
  const handleAddressChange = (event) => {
    const { name, value } = event.target;
    setAddressInput({ ...addressInput, [name]: value });
  };
  return (
    <Main>
      <MyPageSection titleText="주문하기">
        <CartContent>
          <FormWrap>
            <div>주문하기</div>
            <Form action="">
              <labal>
                수령인
                <input type="text" />
              </labal>
              <labal>
                수령자 핸드폰번호
                <input type="text" />
              </labal>
              <labal>
                주소
                <div>
                  <input type="text" />
                  <button type="button">주소찾기</button>
                </div>
                <div>
                  <input type="text" />
                </div>
                <input type="text" />
              </labal>
              <div>
                <button>등록하기</button>
              </div>
            </Form>
          </FormWrap>
          <PaymentCard userCartData={userCartData} />
        </CartContent>
      </MyPageSection>
    </Main>
  );
};

export default OrderPage;

const CartContent = styled(Wrap)`
  display: flex;
  gap: 80px;
`;

const FormWrap = styled(Wrap)`
  display: flex;
  align-items: center;
  border: 1px solid #e2e2e2;
  margin: 0 auto;
  width: 80%;
  height: 80%;
  flex-direction: column;

`;
const Form = styled.form`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 80%;
  flex-direction: column;
  label {
    display: flex;
    flex-direction: column;
    div {
      input {
        margin-right: 20px;
      }
    }
    input {
      height: 25px;
      margin-top: 10px;
    }
  }
  button {
    margin-top: 20px;
  }
`;
