import { desktop, tablet } from 'constants/responsive';

export const device = {
  mobile: `(max-width: ${tablet - 1}px)`,
  tablet: `(min-width: ${tablet}px) and (max-width: ${desktop - 1}px)`,
  desktop: `(min-width: ${desktop}px)`,
  mobTab: `(max-width: ${desktop - 1}px)`,
  tabDesk: `(min-width: ${tablet}px)`,
};
