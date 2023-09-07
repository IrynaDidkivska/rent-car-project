import { Outlet } from "react-router-dom";

import { Container } from "../../styles/Container";
import { NavBar } from "../NavBar/NavBar";
import { Suspense } from "react";
import { Loader } from "../Loader/Loader";
import { StyledHeader } from "./Layout.styled";

export const Layout = () => {
  return (
    <>
      <StyledHeader>
        <NavBar />
      </StyledHeader>
      <main>
        <Suspense fallback={<Loader />}>
          <Container>
            <Outlet />
          </Container>
        </Suspense>
      </main>
    </>
  );
};
