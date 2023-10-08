import Main from '../../components/ui/Main/Main';
import PageSection from '../../components/PageSection/index';
import DeliveryForm from '../../components/DeliveryForm/DeliveryForm';
import PurchaseCard from '../../components/PurchaseCard/PurchaseCard';
import T from '../../assets/images/black_t.jpg';
import styled from 'styled-components';
import Wrap from '../../components/ui/Wrap/Wrap';
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
  return (
    <Main>
      <PageSection titleText="주문하기">
        <OrderContent>
          <DeliveryForm />
          <PurchaseCard userCartData={userCartData} />
        </OrderContent>
      </PageSection>
    </Main>
  );
};

export default OrderPage;

const OrderContent = styled(Wrap)`
  display: flex;
  gap: 70px;
`;
