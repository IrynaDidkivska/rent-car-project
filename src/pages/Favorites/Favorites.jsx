import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/selectors";
import { Card } from "../../components/Card/Card";

export const Favorites = () => {
  const favorites = useSelector(selectFavorites);
  return <div>{favorites && <Card isFavorite="true" />}</div>;
};
