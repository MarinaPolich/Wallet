import { desktop, tablet } from 'constants/responsive';
import styled from 'styled-components';

import { device } from 'stylesheet/breakpoints';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  @media ${device.tablet} {
    max-width: ${tablet};
    padding: 0 32px 24px 32px;
  }

  @media ${device.desktop} {
    max-width: ${desktop};
    padding: 0 16px 44px 16px;
  }
`;
