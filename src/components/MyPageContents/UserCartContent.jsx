import MypageCard from '../MypageCard';
import {
  UserEmptyCartCard,
  UserExistsCartCard,
} from '../MypageCard/UserCartCard';

const UserCartContent = () => {
  const EmptyCartCard = MypageCard(UserEmptyCartCard);
  const CartCard = MypageCard(UserExistsCartCard);
  const cardData = [];
  return <>{cardData.length !== 0 ? <CartCard /> : <EmptyCartCard />}</>;
};

export default UserCartContent;

