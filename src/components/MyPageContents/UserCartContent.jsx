
import { UserFullCartCard,UserEmptyCartCard, } from '../MypageCard';

const UserCartContent = () => {

	const userCartData = []
	
	if (userCartData.length === 0) return <UserEmptyCartCard />
  
	return <UserFullCartCard />
};

export default UserCartContent;

