import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Image from '../../ui/Image/Image';
import { useState } from 'react';
import Wrap from '../../ui/Wrap/Wrap';

const UserCartCard = ({ userCartData }) => {
  const pathName = useLocation().pathname;
  const [count, setCount] = useState(1);

  const isCartPage = pathName === '/cart';

  const handleCountClick = (event) => {
    const { name } = event.target;

    if (name === 'increase') {
      setCount((prevCount) => prevCount + 1);
    }
    if (count > 1 && name === 'decrease')
      return setCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      <Table>
        <colgroup>
          <col style={{ width: '27px' }} />
          <col style={{ width: '92px' }} />
          <col style={{ width: 'auto' }} />
          <col style={{ width: '98px' }} />
          <col style={{ width: '250px' }} />
          <col style={{ width: '75px' }} />
        </colgroup>
        <thead>
          <TableHearderRow>
            {isCartPage && (
              <TableHeader scope="col">
                <input type="checkbox" />
              </TableHeader>
            )}
            <TableHeader scope="col">이미지</TableHeader>
            <TableHeader scope="col">상품정보</TableHeader>
            <TableHeader scope="col">옵션</TableHeader>
            <TableHeader scope="col">수량</TableHeader>
            <TableHeader scope="col">판매가</TableHeader>
          </TableHearderRow>
        </thead>

        <tbody>
          {userCartData.map((cartItemData) => (
            <tr key={cartItemData.productId}>
              {isCartPage && (
                <TableColum>
                  <input type="checkbox" />
                </TableColum>
              )}
              <TableColum>
                <Image imageSrc={cartItemData.product_img} />
              </TableColum>
              <TableColum>{cartItemData.product_name}</TableColum>
              <TableColum>{cartItemData.option}</TableColum>
              <TableColum>
                {isCartPage ? (
                  <ButtonWrap onClick={handleCountClick}>
                    <button name="decrease">-</button>
                    <input type="number" min={1} value={count} />
                    <button name="increase">+</button>
                  </ButtonWrap>
                ) : (
                  cartItemData.count
                )}
              </TableColum>
              <TableColum>{cartItemData.price * count}</TableColum>
            </tr>
          ))}
        </tbody>
        {isCartPage && (
          <TableFooter>
            <tr>
              <td colSpan="10">
                <span>기본배송</span>
                <div>
                  <span>총 상품금액</span>
                  <span>{10000 * count}</span>
                </div>
                <div>
                  <span>총 배송비</span>
                  <span>0</span>
                </div>
                <div>
                  <span>결제예상금액</span>
                  <span>{10000 * count}</span>
                </div>
              </td>
            </tr>
          </TableFooter>
        )}
      </Table>
      <CartButtonWrap>
        <DeleteButton>장바구니 비우기</DeleteButton>
        <PurchaseButton>구매하기</PurchaseButton>
      </CartButtonWrap>
    </>
  );
};

export default UserCartCard;

const Table = styled.table`
  width: 100%;
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
`;

const TableHearderRow = styled.tr`
  border-bottom: 1px solid #e2e2e2;
`;
const TableHeader = styled.th`
  padding: 20px 0;
  text-align: center;
`;
const TableColum = styled.td`
  padding: 20px;
  text-align: center;
  vertical-align: middle;
`;

const ButtonWrap = styled.div`
  input {
    width: 18px;
    border: 1px solid transparent;
    padding: 0;
    text-align: center;
  }
  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input:focus {
    outline: none;
  }
`;

const TableFooter = styled.tfoot`
  width: 100%;
  display: table-footer-group;
  vertical-align: middle;
  border-top: 1px solid #e2e2e2;
  line-height: 70px;
  font-size: 20px;
  text-align: right;
  tr {
    td {
      display: table-cell;
      padding: 0 12px;
      div {
        float: right;
        span {
          margin-left: 20px;
        }
      }
      span {
        float: left;
      }
    }
  }
`;
const CartButtonWrap = styled(Wrap)`
  text-align: right;
  margin-top: 20px;
  button {
    margin-left: 20px;
    padding: 10px 20px;
    font-size: 18px;
  }
`;

const DeleteButton = styled.button`
  border: 1px solid #000;
  background-color: #fff;
 
`
const PurchaseButton = styled.button`
  border: 1px solid transparent;
  background-color: #000;
  color: #fff;
`