import { MagnifyingGlass } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#F7F7FB"
        color="#0B44CD"
      />
    </div>
  );
};
