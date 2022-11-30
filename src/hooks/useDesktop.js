import { desktop } from 'constants/responsive';
import { useMediaQuery } from 'react-responsive';

export const useDesktop = () => {
  return useMediaQuery({ minWidth: desktop });
};
