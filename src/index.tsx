import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./common/GlobalStyle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./common/theme";
import { useState } from "react";
import Header from "./common/Header/Header";
import Navigate from "./common/Navigate";
import CategoryPage from "./features/Categories/CategoryPage";
import Articles from "./features/Articles/Articles";
import Footer from "./common/Footer";
import NoResult from "./common/StatusPage/NoResult/NoResult";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const NewsApp = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [viewMode, setViewMode] = useState("grid");

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };
  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === "grid" ? "list" : "grid"));
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <ThemeProvider theme={{ ...theme, darkMode }}>
        <GlobalStyle />
        <BrowserRouter basename="News-App">
          <Navigate />
          <Header
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            viewMode={viewMode}
            toggleViewMode={toggleViewMode}
          />

          <Routes>
            <Route
              path="/category/:category"
              element={<CategoryPage viewMode={viewMode} />}
            />
            <Route path="/" element={<Articles viewMode={viewMode} />} />
            <Route path="*" element={<NoResult />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

root.render(<NewsApp />);
