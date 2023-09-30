import styled from 'styled-components';


const UserDefalutCartCard = (Content) => {
  return ({ ...props }) => {
    return (
      <CardItemWrap>
        <Content {...props} />
      </CardItemWrap>
    );
  };
};

export default UserDefalutCartCard;

const CardItemWrap = styled.li`
  width: 100%;
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
`;
