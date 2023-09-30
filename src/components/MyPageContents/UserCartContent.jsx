import MypageCard from '../MypageCard';
import {
  UserEmptyCartCard,
  UserExistsCartCard,
} from '../MypageCard/UserCartCard';

const UserCartContent = () => {
  const EmptyCartCard = MypageCard(UserEmptyCartCard);
  const CartCard = MypageCard(UserExistsCartCard);
  const userCartData = []
if(userCartData.length === 0 ) return <EmptyCartCard/>
  return (
  
      <CartCard />

  )
};

export default UserCartContent;

