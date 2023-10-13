import styled from 'styled-components';
import Wrap from '../ui/Wrap/Wrap';
import Span from '../ui/Span/Span';
import Li from '../ui/Li/Li';

export const ListItem = styled(Li)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  border: ${(props) => props.border === 'border' && '1px solid #e2e2e2'};
  border-radius: 4px;
  margin-bottom: 20px;
`;
export const ProductInfo = styled(Wrap)`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 20px 0;
  justify-content: space-around;
`;

export const ImgWrap = styled(Wrap)`
  width: 80px;
  height: 80px;
  object-fit: cover;
`;
export const OptionWrap = styled(Wrap)`
  display: flex;
  flex-direction: column;
`;
export const CountWrap = styled(Wrap)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 460px;
  div:first-child {
    font-size: 14px;
    color: #282828;
  }
  div:not(:first-child) {
    text-align: center;
    border: 1px solid #e2e2e2;
    font-size: 14px;
    button {
      height: 34px;
      width: 34px;
      border: 1px solid transparent;
      background-color: #fff;
      font-size: 18px;
    }
    button:hover {
      background-color: #000;
      color: #fff;
    }
    input {
      border-top: 1px solid transparent;
      border-bottom: 1px solid transparent;
      border-left: 1px solid #e2e2e2;
      border-right: 1px solid #e2e2e2;
      width: 28px;
      height: 29px;
      text-align: center;
    }
    input[type='number']::-webkit-outer-spin-button,
    input[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
export const PriceText = styled(Span)`
  margin-left: 15%;
  font-weight: 600;
`;
export const OrderPriceText = styled(Span)`
  font-weight: 600;
`;
export const OrderTotalPrice = styled(Wrap)`
  display: flex;
  align-items: center;
  width: 100%;
  border-top: 1px solid #c7c6c6;
  justify-content: space-around;
  span {
    margin: 30px 0;
  }
`;
export const AllCheckBoxWrap = styled(Wrap)`
  width: 100%;
  border-bottom: 1px solid #e2e2e2;
  input {
    margin: 0 24px 10px;
  }
`;

export const OrderOptionInfo = styled(Wrap)`
  display: flex;
  width: 280px;
  justify-content: space-between;
`;
