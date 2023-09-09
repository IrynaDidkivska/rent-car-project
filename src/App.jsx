import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import { Layout } from './components/Layout/Layout';
import { lazy, useEffect } from 'react';
import { fetchCars } from './redux/operations';
import { useDispatch } from 'react-redux';

const Home = lazy(() => import('./pages/Home/Home'));
const Favorites = lazy(() => import('./pages/Favorites/Favorites'));
const Catalog = lazy(() => import('./pages/Catalog/Catalog'));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
