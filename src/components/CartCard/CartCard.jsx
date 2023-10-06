import Span from '../ui/Span/Span';
import Wrap from '../ui/Wrap/Wrap';
import Image from '../ui/Image/Image';
import Text from '../ui/Text/Text';
import * as S from './style'

const CartCard = ({ cartItemData, border }) => {
  return (
    <S.ListItem border={border }>
      <S.AllCheckBoxWrap>
        <input type="checkbox" />
      </S.AllCheckBoxWrap>
      <S.ProductInfo>
        <Wrap>
          <input type="checkbox" />
        </Wrap>
        <S.ImgWrap>
          <Image imageSrc={cartItemData.product_img} />
        </S.ImgWrap>
        <Wrap>
          <Span text={cartItemData.product_name} />
          <Text text={cartItemData.option} />
        </Wrap>
        <S.CountWrap>
          <button>-</button>
          <input type="number" />
          <button>+</button>
        </S.CountWrap>
        <S.PriceText text={cartItemData.price} />
      </S.ProductInfo>
      <S.OrderTotalPrice>
        <Span text="선택상품가격" />
        <Span text={cartItemData.price} />
        <Span text="배송비" />
        <Span text={0} />
        <Span text="주문가격" />
        <Span text={cartItemData.price} />
      </S.OrderTotalPrice>
    </S.ListItem>
  );
};

export default CartCard;

