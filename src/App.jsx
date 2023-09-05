import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { Catalog } from "./pages/Catalog/Catalog";
import { Favorites } from "./pages/Favorites/Favorites";
import Modal from "./components/Modal/Modal";
import { Form } from "./components/Form/Form";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
        <Route
          path="form"
          element={
            <Modal>
              <Form />
            </Modal>
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
