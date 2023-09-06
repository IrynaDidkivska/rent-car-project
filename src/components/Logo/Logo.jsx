import {
  StyledLogo,
  StyledLogoAccent,
  StyledLogoIcon,
  StyledLogoIconSec,
  StyledLogoWrapper,
} from "./Logo.styled";

export const Logo = () => {
  return (
    <StyledLogoWrapper>
      <div>
        <StyledLogoIcon></StyledLogoIcon>
        <StyledLogoIconSec></StyledLogoIconSec>
      </div>

      <StyledLogo>
        Car
        <StyledLogoAccent>Rentals</StyledLogoAccent>
      </StyledLogo>
    </StyledLogoWrapper>
  );
};
