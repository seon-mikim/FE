import styled from 'styled-components';

const MyPageList = (Item) => {
  return ({ ...props }) => {
    return (
      <MypageList>
        <Item {...props} />
      </MypageList>
    );
  };
};

export default MyPageList;



const MypageList = styled.ul`
  width: 100%;
`;
