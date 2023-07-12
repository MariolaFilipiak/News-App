import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './common/GlobalStyle';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools />
    <GlobalStyle/>
    <App />
 </QueryClientProvider>

);
