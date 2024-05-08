import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';

import Router from './Router';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DesktopWrapper>
        <Router />
      </DesktopWrapper>
    </ThemeProvider>
  );
}

export default App;

const DesktopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
