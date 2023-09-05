import { useDispatch } from "react-redux";
import { SpriteSVG } from "../../../public/SpriteSVG";
import { StyledCloseIcon, StyledForm } from "./Form.styled";
import { closeModal } from "../../redux/Slice";

export const Form = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(closeModal());
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledCloseIcon
        onClick={() => {
          console.log("Close icon");
          dispatch(closeModal());
        }}
      >
        <SpriteSVG name={"close"} />
      </StyledCloseIcon>
      <img src="" alt="car" />
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
      <button>Rental car</button>
    </StyledForm>
  );
};
