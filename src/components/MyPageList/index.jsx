import UserCartContent from "../MyPageContents/UserCartContent";
import UserOrderContent from "../MyPageContents/UserOrderContent";
import UserProfileContent from "../MyPageContents/UserProfileContent";
import UserSaleItemsContent from "../MyPageContents/UserSaleItemsContent";
import MyPageList from "./MypageList";

export const UserProfileList = MyPageList(UserProfileContent)
export const UserCartList = MyPageList(UserCartContent)
export const UserSalesList = MyPageList(UserSaleItemsContent)
export const UserOrderList = MyPageList(UserOrderContent)