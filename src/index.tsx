import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './common/GlobalStyle';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {BrowserRouter} from "react-router-dom";
import theme from './common/theme';
import { ThemeProvider } from 'styled-components';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools />
    <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <BrowserRouter basename='News-App'>
    <App />
    </BrowserRouter>
    </ThemeProvider>

 </QueryClientProvider>

);
