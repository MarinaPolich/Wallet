import { tablet } from 'constants/responsive';
import { useMediaQuery } from 'react-responsive';

export const useMobile = () => {
  return useMediaQuery({ maxWidth: tablet - 1 });
};
