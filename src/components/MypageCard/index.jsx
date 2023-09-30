import UserDefalutCard from "./UserDefalutCard";
import UserCartCard from '../MypageCard/UserCartCard/UserCartCard'
import EmptyCartCard from '../MypageCard/UserCartCard/EmptyCartCard'
import ProfileCard from "./UserProfileCard/ProfileCard";
import SalesCard from "./UseSalesCard/SalesCard";
import EmptySalesCard from "./UseSalesCard/EmptySalesCard";

export const UserFullCartCard = UserDefalutCard(UserCartCard)
export const UserEmptyCartCard = UserDefalutCard(EmptyCartCard)
export const UserProfileCard = UserDefalutCard(ProfileCard)
export const UserFullSalesCard = UserDefalutCard(SalesCard)
export const UserEmptySalesCard = UserDefalutCard(EmptySalesCard)