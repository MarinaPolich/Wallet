import { desktop, tablet } from 'constants/responsive';
import { useMediaQuery } from 'react-responsive';

export const useTablet = () => {
  return useMediaQuery({ minWidth: tablet, maxWidth: desktop - 1 });
};

export const useDesktopOrTablet = () => {
  return useMediaQuery({ minWidth: tablet });
};