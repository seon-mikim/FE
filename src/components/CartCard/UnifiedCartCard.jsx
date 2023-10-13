import Span from '../ui/Span/Span';
import Image from '../ui/Image/Image';
import Text from '../ui/Text/Text';
import * as S from './style';
const UnifiedCartCard = ({ cartDataItem }) => {
  return (
    <S.ListItem>
      <S.ProductInfo>
        <S.ImgWrap>
          <Image
            imageSrc={cartDataItem.goodsImageDtoList[0].productImageSave}
            altText={cartDataItem.productName}
          />
        </S.ImgWrap>
        <div>
          <Span text={cartDataItem.productName} />

          <S.OrderOptionInfo>
            <div>
              <Text text={cartDataItem.cartProductColor} />
              <Text text={cartDataItem.cartProductSize} />
            </div>
            <Span text={`${cartDataItem.cartProductCount}개`} />
            <div>
              <S.OrderPriceText
                text={`${
                  cartDataItem.productPrice * cartDataItem.cartProductCount
                }원`}
              />
            </div>
          </S.OrderOptionInfo>
        </div>
      </S.ProductInfo>
    </S.ListItem>
  );
};

export default UnifiedCartCard;
