import Span from '../ui/Span/Span';
import Wrap from '../ui/Wrap/Wrap';
import Image from '../ui/Image/Image';
import Text from '../ui/Text/Text';
import * as S from './style';
import { useState } from 'react';

const CartCard = ({
  cartItemData,
  border,
  totalPrice,
  onTotalPriceChange,
  setTotalCount,
  updateProductOption,
}) => {
  console.log(totalPrice);
  const [options, setOptions] = useState(cartItemData.option);
  const [isChecked, setIsChecked] = useState(true);
  const [isAllChecked, setIsAllChecked] = useState(true);

  const handleCountButton = (optionIndex, action) => {
    const updatedOptions = [...options];
    let newTotalCount = 0;

    if (action === 'increase') {
      updatedOptions[optionIndex].stockQuantity += 1;
    } else if (
      action === 'decrease' &&
      updatedOptions[optionIndex].stockQuantity > 1
    ) {
      updatedOptions[optionIndex].stockQuantity -= 1;
    }
updateProductOption(
  cartItemData.productId,
  optionIndex,
  updatedOptions[optionIndex].stockQuantity,
  updatedOptions[optionIndex].productPrice
);

    const newTotalPrice = updatedOptions.reduce((total, optionData) => {
      newTotalCount += optionData.stockQuantity; // 갯수 합계를 계산
      return total + optionData.stockQuantity * optionData.productPrice;
    }, 0);

    setOptions(updatedOptions);
    onTotalPriceChange(newTotalPrice);
    setTotalCount(newTotalCount); // 총 갯수 업데이트
  };
  const handleCheckChange = (event) => {
    const { name } = event.target;
    if (name === 'productCheck')
      setIsChecked((prevIsChecked) => !prevIsChecked);
    if (name === 'allProduct') {
      setIsChecked((prevIsChecked) => !prevIsChecked);
      setIsAllChecked((prevIsChecked) => !prevIsChecked);
    }
  };

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
            imageSrc={cartItemData.productImage}
            altText={cartItemData.productName}
          />
        </S.ImgWrap>
        <S.OptionWrap>
          <Span text={cartItemData.productName} />
          <S.CountWrap>
            {options.map((optionData, optionIndex) => (
              <>
                <div>
                  <Text text={optionData.stockColor} />
                  <Text text={optionData.stockSize} />
                </div>
                <div>
                  <button
                    onClick={() => handleCountButton(optionIndex, 'decrease')}
                  >
                    -
                  </button>
                  <input type="number" value={optionData.stockQuantity} />
                  <button
                    onClick={() => handleCountButton(optionIndex, 'increase')}
                  >
                    +
                  </button>
                </div>
                <S.PriceText text={`${optionData.productPrice} 원`} />
              </>
            ))}
          </S.CountWrap>
        </S.OptionWrap>
      </S.ProductInfo>
      <S.OrderTotalPrice>
        <Span text="총 상품가격" />
        <Span text={`${totalPrice} 원`} />
        <Span text="배송비" />
        <Span text={0} />
        <Span text="주문가격" />
        <Span text={`${totalPrice} 원`} />
      </S.OrderTotalPrice>
    </S.ListItem>
  );
};

export default CartCard;
