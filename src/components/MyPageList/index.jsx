import UserCartContent from "../MyPageContents/UserCartContent";
import UserProfileContent from "../MyPageContents/UserProfileContent";
import UserSaleItemsContent from "../MyPageContents/UserSaleItemsContent";
import MyPageList from "./MypageList";

export const UserProfileList = MyPageList(UserProfileContent)
export const UserCartList = MyPageList(UserCartContent)
export const UserSalesList = MyPageList(UserSaleItemsContent)