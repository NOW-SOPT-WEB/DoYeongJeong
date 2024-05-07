import { ThemeProvider } from '@emotion/react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import GlobalStyle from './styles/GlobalStyle.tsx';
import { theme } from './styles/theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </>,
);
