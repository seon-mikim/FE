import { UserFullCartCard, UserEmptyCartCard } from '../MypageCard';
import T from '../../assets/images/black_t.jpg';

const UserCartContent = () => {
	const userCartData = [{productId:1, product_name:'티셔츠', product_img:T, count: 1, price: 10000, option: 's'}];

  if (userCartData.length === 0) return <UserEmptyCartCard />;

	return <>{userCartData.map((cartItemData, index) =>
		< UserFullCartCard key={index} cartItemData={cartItemData } />
		)
		}</>;
};

export default UserCartContent;
