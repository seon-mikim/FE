import Image from "../../ui/Image/Image"
import Wrap from "../../ui/Wrap/Wrap"
import EmptyProductIcon from '../../../assets/images/sales_product_icon.svg'
import styled from "styled-components"
import Text from "../../ui/Text/Text"
import { Link } from "react-router-dom"
const EmptySalesCard = () => {
	return (

			<CardItemWrap>
				<ImgWrap>
					<Image imageSrc={EmptyProductIcon}/>
				</ImgWrap>
			<Text text='올린 상품이 없습니다.' />
			<Link to='/my/sales'>상품 올리러 가기</Link>
			</CardItemWrap>

	)
}

export default EmptySalesCard

const CardItemWrap = styled(Wrap)`
	display: flex;
	padding: 120px 0;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	border: 1px solid #e2e2e2;
	gap: 20px;
`
const ImgWrap = styled(Wrap)`
	width: 60px;
	height: 60px;
	
`