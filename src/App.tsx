import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import routes from './routes';
import defaultTheme from './style/defaultTheme';
import GlobalStyle from './style/GlobalStyle';

const router = createBrowserRouter(routes);

export default function App() {
  const theme = defaultTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Reset />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
