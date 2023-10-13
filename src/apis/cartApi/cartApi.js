import { axiosInstance } from '../axiosInstance/axiosInstance';

export const fetchCartList = async () => {
  try {
		const response = await axiosInstance.get('cart/list');
		console.log(response.data)
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const patchCartQuantity = async (cartProductId, adjustCartQuantity) => {
	try {
		const response = await axiosInstance.patch(`cart/${cartProductId}?action=${adjustCartQuantity}`) 
		return response
	} catch (error) {
		console.error(error.message)
	}
}

export const deleteAllCartList = async (cartProductIdList) => {
  try {
    const response = await axiosInstance.delete(
      `cart/cartProduct`,
      cartProductIdList
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};