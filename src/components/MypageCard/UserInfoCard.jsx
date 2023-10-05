import styled from 'styled-components';


const UserInfoCard = ({children }) => {

    return (
      <CardItemWrap>
        {children }
      </CardItemWrap>
    );

};

export default UserInfoCard;

const CardItemWrap = styled.li`
  width: 100%;

`;
