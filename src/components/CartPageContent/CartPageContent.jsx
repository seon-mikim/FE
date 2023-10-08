import CartCard from '../CartCard/CartCard';
import Ul from '../ui/Ul/Ul';
import Wrap from '../ui/Wrap/Wrap';
import T from '../../assets/images/black_t.jpg';
import styled from 'styled-components';
import PurchaseCard from '../PurchaseCard/PurchaseCard';
import { useState } from 'react';

const CartPageContent = () => {
  const [totalCount, setTotalCount] = useState()
  const [totalPrice, setTotalPrice] = useState()
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

  if (userCartData.length === 0) return;

  return (
    <CartContent>
      <CartList>
        {userCartData.map((cartItemData) => (
          <CartCard
            key={cartItemData.productId}
            cartItemData={cartItemData}
            setTotalCount={setTotalCount}
            setTotalPrice={setTotalPrice }
            border="border"
          />
        ))}
			</CartList>
      <PurchaseCard totalPrice={totalPrice} totalCount={totalCount } />
    </CartContent>
  );
};

export default CartPageContent;


const CartContent = styled(Wrap)`
  display: flex;
  gap: 200px;
`;


const CartList = styled(Ul)`
  width: 100%;
`;
