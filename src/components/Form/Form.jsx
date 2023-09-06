import { useDispatch, useSelector } from "react-redux";
import { SpriteSVG } from "../../../public/SpriteSVG";
import { StyledCloseIcon, StyledForm, StyledLinkCall } from "./Form.styled";
import { selectId, selectItem } from "../../redux/selectors";
import { useEffect } from "react";
import { fetchCars } from "../../redux/operations";
import { modalClose } from "../../redux/Slice";

// import { closeModal } from "../../redux/Slice";

export const Form = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItem);
  const id = useSelector(selectId);

  const filteredItem = items.filter((el) => el.id === id)[0];
  console.log("Filtered", filteredItem);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(modalClose());
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledCloseIcon
        onClick={() => {
          console.log("Close icon");
          dispatch(modalClose());
        }}
      >
        <SpriteSVG name={"close"} />
      </StyledCloseIcon>

      <img src={filteredItem.img} alt="car" />
      <h1>title</h1>
      <ul>
        <li>text</li>
      </ul>
      <p>text</p>
      <h4>Accessories and functionalities:</h4>
      <p>text</p>
      <ul>
        Rental Conditions:
        <li>text</li>
      </ul>
      <StyledLinkCall href="tel:+380730000000">Rental car</StyledLinkCall>
    </StyledForm>
  );
};
