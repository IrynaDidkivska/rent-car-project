import { MagnifyingGlass } from 'react-loader-spinner';
import { StyledWrapperLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <StyledWrapperLoader>
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
    </StyledWrapperLoader>
  );
};
