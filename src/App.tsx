import Categories from "./common/Categories";
import Footer from "./common/Footer";
import Navigate from "./common/Navigate";
import Articles from "./features/Articles/Articles";

function App() {
  return (
    <>
      <Navigate />
      <Categories />
      <Articles />
      <Footer/>
    </>
  );
}

export default App;
