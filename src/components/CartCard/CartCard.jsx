import Span from '../ui/Span/Span';
import Wrap from '../ui/Wrap/Wrap';
import Image from '../ui/Image/Image';
import Text from '../ui/Text/Text';
import * as S from './style';
import { useEffect, useState } from 'react';
import { patchCartQuantity } from '../../apis/cartApi/cartApi';
import { useDispatch } from 'react-redux';
import {
  decrementQuantity,
  incrementQuantity,
} from '../../store/slices/cartSlice';

const CartCard = ({
  getCardProductId,
  cartItemData,
  border,
  cartProductId,
  setTotalCount,
  onTotalPriceChange,
}) => {
  const [isChecked, setIsChecked] = useState(true);
  const [isAllChecked, setIsAllChecked] = useState(true);
  const dispatch = useDispatch();

  const handleAdjustCartQuantityButton = async (
    cartProductId,
    adjustCartQuantity
  ) => {
    try {
      const response = await patchCartQuantity(
        cartProductId,
        adjustCartQuantity
      );
      const increase = adjustCartQuantity === 'increase';
      if (increase) {
        dispatch(incrementQuantity({ cartProductId }));
      } else {
        dispatch(decrementQuantity({ cartProductId }));
      }
      return response;
    } catch (error) {
      console.error(error.message);
    }
  };
  const handleCheckChange = (event) => {
    const { name } = event.target;
  
   
    if (name === 'productCheck') {
      setIsChecked((prevIsChecked) => !prevIsChecked);
    
    } else if (name === 'allProduct') {
      setIsChecked(!isChecked);
      setIsAllChecked(!isAllChecked);
    }
  };
  useEffect(() => {
    setTotalCount(cartItemData.cartProductCount);
    onTotalPriceChange(cartItemData.productPrice);
     if (isAllChecked) return getCardProductId(cartItemData.cartProductId);
  }, [cartItemData.cartProductCount, cartItemData.productPrice]);

  return (
    <S.ListItem border={border}>
      <S.AllCheckBoxWrap>
        <input
          onChange={handleCheckChange}
          type="checkbox"
          checked={isAllChecked}
          name="allProduct"
        />
      </S.AllCheckBoxWrap>
      <S.ProductInfo>
        <Wrap>
          <input
            onChange={handleCheckChange}
            type="checkbox"
            checked={isChecked}
            name="productCheck"
          />
        </Wrap>
        <S.ImgWrap>
          <Image
            imageSrc={cartItemData.goodsImageDtoList[0].productImageSave}
            altText={cartItemData.productName}
          />
        </S.ImgWrap>
        <S.OptionWrap>
          <Span text={cartItemData.productName} />
          <S.CountWrap>
            <div>
              <Text text={cartItemData.cartProductColor} />
              <Text text={cartItemData.cartProductSize} />
            </div>
            <div>
              <button
                onClick={() =>
                  handleAdjustCartQuantityButton(
                    cartProductId,
                    'decrease',
                    cartItemData.productPrice,
                    cartItemData.cartProductCount
                  )
                }
              >
                -
              </button>
              <input type="number" value={cartItemData.cartProductCount} />
              <button
                onClick={() =>
                  handleAdjustCartQuantityButton(cartProductId, 'increase')
                }
              >
                +
              </button>
            </div>
            <S.PriceText text={`${cartItemData.productPrice} 원`} />
          </S.CountWrap>
        </S.OptionWrap>
      </S.ProductInfo>
      <S.OrderTotalPrice>
        <Span text="총 상품가격" />
        <Span text={`${cartItemData.productPrice} 원`} />
        <Span text="배송비" />
        <Span text={0} />
        <Span text="주문가격" />
        <Span text={`${cartItemData.productPrice} 원`} />
      </S.OrderTotalPrice>
    </S.ListItem>
  );
};

export default CartCard;
