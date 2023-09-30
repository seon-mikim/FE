import EmptyCartCard from "./EmptyCartCard";
import UserCartCard from "./UserCartCard";
import UserDefalutCartCard from "./UserDefalutCartCard";

export const UserEmptyCartCard = UserDefalutCartCard(EmptyCartCard)
export const UserExistsCartCard = UserDefalutCartCard(UserCartCard);
