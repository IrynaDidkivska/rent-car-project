import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { Catalog2 } from "./pages/Catalog/Catalog2";
import { Favorites2 } from "./pages/Favorites/Favorites2";
import SearchForm from "./components/SearchForm/SearchForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog2 />} />
        <Route path="favorites" element={<Favorites2 />} />
        <Route path="form" element={<SearchForm />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
