import { Outlet } from "react-router-dom";
// import { Loader } from "./Loader/Loader";
import { Container } from "../../styles/Container";
import { NavBar } from "../NavBar/NavBar";

export const Layout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {/* <Suspense fallback={<Loader />}> */}
        <Container>
          <Outlet />
        </Container>
        {/* </Suspense> */}
      </main>
    </>
  );
};
