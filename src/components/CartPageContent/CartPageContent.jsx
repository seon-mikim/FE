import CartCard from '../CartCard/CartCard';
import Ul from '../ui/Ul/Ul';
import Wrap from '../ui/Wrap/Wrap';
import T from '../../assets/images/black_t.jpg';
import styled from 'styled-components';
import PurchaseCard from '../PurchaseCard/PurchaseCard';
import { useEffect, useState } from 'react';
import EmptyStateCard from '../EmptyStateCard/EmptyStateCard';
import CartIcon from '../../assets/images/cart_icon.svg';

const userCartData = {
  cartId: 1,
  product: [
    {
      productId: 1,
      productName: '티셔츠',
      productImage: T,
      option: [
        {
          stockQuantity: 1,
          productPrice: 10000,
          stockColor: 'black',
          stockSize: 's',
        },
      ],
    },
  ],
  totalPrice: 10000,
};

const CartPageContent = () => {
  const [cartData, setCartData] = useState(userCartData);
  const [totalCount, setTotalCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(userCartData.totalPrice);
  const handleTotalPriceChange = (newTotalPrice) => {
    setTotalPrice(newTotalPrice);
  };
  const handleTotalQuantityChange = (newTotalCount) => {
    setTotalCount(newTotalCount);
  };
  const handleDeleteClick = () => {
    setCartData({ ...cartData, product: [] });
  };
  const updateProductOption = (
    productId,
    optionIndex,
    newQuantity,
    newPrice
  ) => {
    const newCartData = { ...cartData };
    const productIndex = newCartData.product.findIndex(
      (p) => p.productId === productId
    );

    if (productIndex !== -1) {
      newCartData.product[productIndex].option[optionIndex].stockQuantity =
        newQuantity;
      newCartData.product[productIndex].option[optionIndex].productPrice =
        newPrice;

      let newTotalPrice = 0;
      newCartData.product.forEach((p) => {
        p.option.forEach((opt) => {
          newTotalPrice += opt.stockQuantity * opt.productPrice;
        });
      });

      newCartData.totalPrice = newTotalPrice;
    }

    setCartData(newCartData);
  };
  useEffect(() => {}, [totalPrice]);

  if (cartData.product.length === 0)
    return (
      <CartList>
        <EmptyStateCard
          imageSrc={CartIcon}
          text="장바구니가 비었습니다."
          toPath="/"
          linkText="상품 보러가기"
        />
      </CartList>
    );

  return (
    <CartContent>
      <CartList>
        <ButtonContainer>
          <CartAllDeleteButtton onClick={handleDeleteClick}>
            전체 삭제
          </CartAllDeleteButtton>
        </ButtonContainer>
        {cartData.product.map((cartItemData) => (
          <CartCard
            cardId={cartData.cartId}
            key={cartItemData.productId}
            cartItemData={cartItemData}
            setTotalCount={handleTotalQuantityChange}
            onTotalPriceChange={handleTotalPriceChange}
            totalPrice={totalPrice}
            updateProductOption={updateProductOption}
            border="border"
          />
        ))}
      </CartList>
      <PurchaseCard
        cartData={cartData}
        totalPrice={totalPrice}
        totalCount={totalCount}
      />
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

const ButtonContainer =styled(Wrap)`
  display: flex;
  justify-content: flex-end;
`
const CartAllDeleteButtton = styled.button`
  margin-bottom: 20px;
  height: 40px;
  width: 80px;
  font-weight: 600;
  border: 1px solid #000;
  background-color: #fff;
`;
