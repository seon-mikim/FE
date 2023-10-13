import CartCard from '../CartCard/CartCard';
import Ul from '../ui/Ul/Ul';
import Wrap from '../ui/Wrap/Wrap';
import styled from 'styled-components';
import PurchaseCard from '../PurchaseCard/PurchaseCard';
import { useEffect, useState } from 'react';
import EmptyStateCard from '../EmptyStateCard/EmptyStateCard';
import CartIcon from '../../assets/images/cart_icon.svg';
import useGetCartProductList from '../../hooks/useGetCartProductList';
import { deleteAllCartList } from '../../apis/cartApi/cartApi';



const CartPageContent = () => {
  const [totalCount, setTotalCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartProductId, setCartProductId] = useState({cartProductId: ''})
  const { entities:cartData, error, loading } = useGetCartProductList()

  const handleTotalPriceChange = (newTotalPrice) => {
    setTotalPrice(newTotalPrice);
  };
  const handleTotalQuantityChange = (newTotalCount) => {
    setTotalCount(newTotalCount);
  };
  const getCardProductId = (id) => {
    console.log(id)
    setCartProductId([{ ...cartProductId, cartProductId:id }])
  }
  const handleDeleteClick = async () => {
    console.log(cartProductId)
    try {
      const response = await deleteAllCartList(cartProductId)
      return response
    } catch (error) {
      console.error(error)
   }
  };
  
  useEffect(() => {}, [totalPrice, totalCount]);
  if(loading) return <>로딩중입니다.</>
  if (cartData===undefined||cartData.length === 0)
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
          <CartAllDeleteButtton
            onClick={() => handleDeleteClick()}
          >
            전체 삭제
          </CartAllDeleteButtton>
        </ButtonContainer>
        {cartData.map((cartItemData) => (
          <CartCard
            getCardProductId={getCardProductId}
            productId={cartItemData.productId}
            cartProductId={cartItemData.cartProductId}
            key={cartItemData.productId}
            cartItemData={cartItemData}
            setTotalCount={handleTotalQuantityChange}
            onTotalPriceChange={handleTotalPriceChange}
            border="border"
          />
        ))}
      </CartList>
      <PurchaseCard
        cartData={cartData}
        totalCount={totalCount}
        totalPrice={totalPrice}
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
