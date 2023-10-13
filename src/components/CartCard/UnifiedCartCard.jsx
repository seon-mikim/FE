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
            imageSrc={cartDataItem.productImage}
            altText={cartDataItem.productName}
          />
        </S.ImgWrap>
        <div>
          <Span text={cartDataItem.productName} />
          {cartDataItem.option.map((optionData, optionIndex) => (
            <S.OrderOptionInfo key={optionIndex}>
              <div>
                <Text text={optionData.stockColor} />
                <Text text={optionData.stockSize} />
              </div>
                <Span text={`${optionData.stockQuantity}개`} />
              <div>
                <S.OrderPriceText
                  text={`${optionData.productPrice * optionData.stockQuantity}원`}
                />
              </div>
            </S.OrderOptionInfo>
          ))}
        </div>
      </S.ProductInfo>
    </S.ListItem>
  );
};

export default UnifiedCartCard;
