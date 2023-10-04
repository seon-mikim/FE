import styled from 'styled-components';

const MypageCard = (Item) => {
  return ({ ...props }) => {
    return (
      <MypageList>
        <Item {...props} />
      </MypageList>
    );
  };
};

export default MypageCard;



const MypageList = styled.ul`
  width: 100%;
`;
