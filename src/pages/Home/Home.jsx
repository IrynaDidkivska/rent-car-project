import { SpriteSVG } from "../../../public/SpriteSVG";
import {
  StyledLogo,
  StyledLogoAccent,
} from "../../components/Logo/Logo.styled";
import {
  StyledHomeIcon,
  StyledItem,
  StyledItemService,
  StyledList,
  StyledSubTitle,
  StyledTextLink,
  StyledWrapList,
  StyledWrapTitle,
} from "./Home.styled";

export const Home = () => {
  return (
    <div>
      <StyledWrapTitle>
        <h1>Welcome to Ukraine</h1>
        <StyledLogo>
          Car
          <StyledLogoAccent>Rentals</StyledLogoAccent>
        </StyledLogo>
      </StyledWrapTitle>
      <StyledWrapList>
        <StyledItem>
          <StyledSubTitle>Discover Ukraine with Ease</StyledSubTitle>
          <p>
            Are you ready to explore Ukraine in style and comfort? Look no
            further than Ukraine Car Rentals, your trusted partner for all your
            car rental needs. Whether you&apos;re here for business or leisure,
            we have the perfect vehicle waiting for you.
          </p>
        </StyledItem>

        <StyledItem>
          <StyledSubTitle>Our Services</StyledSubTitle>
          <StyledList>
            <StyledItemService>
              <StyledHomeIcon>
                <SpriteSVG name="car" />
              </StyledHomeIcon>
              <StyledSubTitle>Wide Range of Cars</StyledSubTitle>
              <p>
                Explore our diverse fleet of vehicles, from compact cars to
                spacious SUVs and luxurious sedans.
              </p>
              <p>
                Filter your options to find the perfect car to suit your needs
                and preferences.
              </p>
            </StyledItemService>
            <StyledItemService>
              <StyledHomeIcon>
                <SpriteSVG name="phone" />
              </StyledHomeIcon>
              <StyledSubTitle>Easy Booking</StyledSubTitle>
              <p>Add your favorite cars to your list for quick access.</p>
              <p>
                Contact our friendly team directly for personalized assistance
                in renting your dream car.
              </p>
            </StyledItemService>
            <StyledItemService>
              <StyledHomeIcon>
                <SpriteSVG name="key" />
              </StyledHomeIcon>
              <StyledSubTitle>Detailed Information</StyledSubTitle>
              <p>
                Browse our extensive collection of cars with detailed
                descriptions and high-quality images.
              </p>
              <p>
                Get a comprehensive view of each vehicle to make an informed
                choice.
              </p>
            </StyledItemService>
            <StyledItemService>
              <StyledHomeIcon>
                <SpriteSVG name="shield" />
              </StyledHomeIcon>
              <StyledSubTitle>Insurance Options</StyledSubTitle>
              <p>
                We offer a range of insurance packages to protect you during
                your rental.
              </p>
              <p>
                Choose from options like collision damage waiver (CDW),
                liability insurance, and personal accident insurance to ensure
                you&apos;re covered in any situation.
              </p>
            </StyledItemService>
            <StyledItemService>
              <StyledHomeIcon>
                <SpriteSVG name="book" />
              </StyledHomeIcon>
              <StyledSubTitle>Competitive Pricing</StyledSubTitle>
              <p>
                We pride ourselves on offering the best prices in the market.
              </p>
              <p>
                Take advantage of our special offers and loyalty program to
                enjoy even greater savings.
              </p>
            </StyledItemService>
            <StyledItemService>
              <StyledHomeIcon>
                <SpriteSVG name="user" />
              </StyledHomeIcon>
              <StyledSubTitle>Exceptional Service</StyledSubTitle>
              <p>
                Our dedicated team is here to ensure your rental experience is
                smooth and hassle-free
              </p>
              <p>
                From booking to drop-off, we&apos;re committed to exceeding your
                expectations.
              </p>
            </StyledItemService>
          </StyledList>
        </StyledItem>
        <StyledItem>
          <StyledSubTitle>Why Choose Us?</StyledSubTitle>
          <p>
            Ukraine Car Rentals is more than just a car rental company;
            we&apos;re your travel companion, making sure your journey is
            memorable for all the right reasons. With our unbeatable service and
            attractive prices, we&apos;re the first choice for travelers
            visiting Ukraine. Join our loyalty program and start enjoying
            exclusive perks and discounts today. Your satisfaction is our
            priority, and we&apos;re here to make your car rental experience in
            Ukraine as effortless as possible.
          </p>
        </StyledItem>
        <StyledItem>
          <StyledSubTitle>Contact Us</StyledSubTitle>
          <p>
            Ready to book your car or have any questions? Give us a{" "}
            <StyledTextLink href="tel:+380730000000">call</StyledTextLink> or
            send us an{" "}
            <StyledTextLink href="mailto:rentals@mail.com">
              email
            </StyledTextLink>
            . Our team is available around the clock to assist you. Explore
            Ukraine with Ukraine Car Rentals – your ticket to an unforgettable
            adventure!
          </p>
        </StyledItem>
      </StyledWrapList>
    </div>
  );
};
