import styled from 'styled-components';


const UserDefalutCard = (Content) => {
  return ({ ...props }) => {
    return (
      <CardItemWrap>
        <Content {...props} />
      </CardItemWrap>
    );
  };
};

export default UserDefalutCard;

const CardItemWrap = styled.li`
  width: 100%;

`;
