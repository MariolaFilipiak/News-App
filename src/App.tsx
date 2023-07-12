import {Routes,Route} from "react-router-dom"
import Footer from "./common/Footer";
import Navigate from "./common/Navigate";
import Articles from "./features/Articles/Articles";
import CountryDetails from "./features/Articles/Country/CountryDetails";
import Categories from "./common/Categories/Categories";
import CategoryPage from "./common/Categories/CategoryPage";

function App() {
  return (
    <>

      <Navigate />
      <Categories />
      <Routes>
        <Route  path="/category/:category" element={<CategoryPage/>}/>
      </Routes>
      <Routes>
        <Route  path="/country/:country" element={<CountryDetails/>}/>
        <Route  path="/" element={<Articles/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
