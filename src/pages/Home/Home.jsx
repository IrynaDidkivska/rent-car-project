import { SpriteSVG } from "../../../public/SpriteSVG";
import {
  StyledLogo,
  StyledLogoAccent,
} from "../../components/Logo/Logo.styled";
import { StyledHomeIcon, StyledList, StyledWrapTitle } from "./Home.styled";

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
      <ul>
        <li>
          <h3>Discover Ukraine with Ease</h3>
          <p>
            Are you ready to explore Ukraine in style and comfort? Look no
            further than Ukraine Car Rentals, your trusted partner for all your
            car rental needs. Whether you&apos;re here for business or leisure,
            we have the perfect vehicle waiting for you.
          </p>
        </li>
        <li>
          <h3>Our Services</h3>
          <p>
            At Ukraine Car Rentals, we are committed to providing you with a
            seamless and unforgettable car rental experience. Here&apos;s what
            sets us apart:
          </p>
        </li>
        <li>
          <StyledList>
            <li>
              <StyledHomeIcon>
                <SpriteSVG name="car" />
              </StyledHomeIcon>
              <h3>Wide Range of Cars</h3>
              <p>
                Explore our diverse fleet of vehicles, from compact cars to
                spacious SUVs and luxurious sedans.
              </p>
              <p>
                Filter your options to find the perfect car to suit your needs
                and preferences.
              </p>
            </li>
            <li>
              <StyledHomeIcon>
                <SpriteSVG name="phone" />
              </StyledHomeIcon>
              <h3>Easy Booking</h3>
              <p>Add your favorite cars to your list for quick access.</p>
              <p>
                Contact our friendly team directly for personalized assistance
                in renting your dream car.
              </p>
            </li>
            <li>
              <StyledHomeIcon>
                <SpriteSVG name="key" />
              </StyledHomeIcon>
              <h3>Detailed Information</h3>
              <p>
                Browse our extensive collection of cars with detailed
                descriptions and high-quality images.
              </p>
              <p>
                Get a comprehensive view of each vehicle to make an informed
                choice.
              </p>
            </li>
            <li>
              <StyledHomeIcon>
                <SpriteSVG name="book" />
              </StyledHomeIcon>
              <h3>Competitive Pricing</h3>
              <p>
                We pride ourselves on offering the best prices in the market.
              </p>
              <p>
                Take advantage of our special offers and loyalty program to
                enjoy even greater savings.
              </p>
            </li>
            <li>
              <StyledHomeIcon>
                <SpriteSVG name="user" />
              </StyledHomeIcon>
              <h3>Exceptional Service</h3>
              <p>
                Our dedicated team is here to ensure your rental experience is
                smooth and hassle-free
              </p>
              <p>
                From booking to drop-off, we&apos;re committed to exceeding your
                expectations.
              </p>
            </li>
          </StyledList>
        </li>
        <li>
          <h3>Why Choose Us?</h3>
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
        </li>
        <li>
          <h3>Contact Us</h3>
          <p>
            Ready to book your car or have any questions? Give us a{" "}
            <a href="tel:+380730000000">call</a> or send us an{" "}
            <a href="mailto:rentals@mail.com">email</a>. Our team is available
            around the clock to assist you. Explore Ukraine with Ukraine Car
            Rentals – your ticket to an unforgettable adventure!
          </p>
        </li>
      </ul>
    </div>
  );
};
