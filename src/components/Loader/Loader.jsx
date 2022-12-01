import { createPortal } from 'react-dom';
import { ContainerLoaderBox, LoaderBox } from './Loader.styled';
import { RotatingLines } from 'react-loader-spinner';

const loaderRoot = document.querySelector('#loader-root');

export const Loader = () => {
  return createPortal(
    <ContainerLoaderBox>
      <LoaderBox>
        <RotatingLines
          strokeColor="var(--btn-bg-color)"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </LoaderBox>
    </ContainerLoaderBox>,
    loaderRoot
  );
};
