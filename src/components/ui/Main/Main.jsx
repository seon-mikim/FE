import styled from 'styled-components';

const Main = ({ children }) => {
  return <StMain>{children}</StMain>;
};

export default Main;

const StMain = styled.main`

  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
