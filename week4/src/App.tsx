import styled from '@emotion/styled';

import Router from './Router';

function App() {
  return (
    <DesktopWrapper>
      <Router />
    </DesktopWrapper>
  );
}

export default App;

const DesktopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  scroll-behavior: smooth;
`;
