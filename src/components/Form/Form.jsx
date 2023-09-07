import { useDispatch, useSelector } from "react-redux";
import { SpriteSVG } from "../../../public/SpriteSVG";
import {
  StyledCloseIcon,
  StyledDescrForm,
  StyledForm,
  StyledLinkCall,
  StyledNameAccentForm,
  StyledNameForm,
} from "./Form.styled";
import { selectId, selectItem } from "../../redux/selectors";
import { useEffect } from "react";
import { fetchCars } from "../../redux/operations";
import { modalClose } from "../../redux/Slice";
import { StyledDescr } from "../Card/Card.styled";

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
      <StyledNameForm>
        {filteredItem.make.toLowerCase()}
        <StyledNameAccentForm> {filteredItem.model}</StyledNameAccentForm>,{" "}
        {filteredItem.year}
      </StyledNameForm>
      <StyledDescr>
        <p>{filteredItem.address.split(",")[1].trim()}</p>
        <p>{filteredItem.address.split(",")[2].trim()}</p>
        <p>Id: {filteredItem.id}</p>
        <p>Year: {filteredItem.year}</p>
        <p>Type: {filteredItem.type}</p>
        <p>Fuel Consumption: {filteredItem.fuelConsumption}</p>
        <p>Engine Size: {filteredItem.engineSize.split("-")[0].trim()}</p>
      </StyledDescr>
      <StyledDescrForm> {filteredItem.description}</StyledDescrForm>
      <h4>Accessories and functionalities:</h4>
      <div>
        <p>{filteredItem.accessories}</p>
        <p>{filteredItem.functionalities}</p>
      </div>
      <div>
        <h4> Rental Conditions:</h4>

        <p>
          Minimum age : <span>25</span>
        </p>
        <p>Valid driver&apos;s license</p>
        <p>Security deposite required </p>
        <p>Mileage: {filteredItem.mileage.toLocaleString("en-US")}</p>
      </div>
      <StyledLinkCall href="tel:+380730000000">Rental car</StyledLinkCall>
    </StyledForm>
  );
};
