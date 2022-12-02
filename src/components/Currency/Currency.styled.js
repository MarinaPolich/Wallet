import styled from 'styled-components';
import { device } from 'stylesheet/breakpoints';

export const Table = styled.table`
  width: 280px;
  border-spacing: 0;
  border-radius: 30px;
  margin-left: auto;
  margin-right: auto;

  overflow: hidden;

  line-height: 1.5;

  color: var(--white);

  height: 174px;

  @media ${device.tablet} {
    margin: 0;
    width: 336px;
  }

  @media ${device.desktop} {
    margin: 0;
    width: 393px;
    border-bottom: 143px solid var(--active-bg-color);
  }
`;

export const Thead = styled.thead`
  font-weight: 700;
  font-size: 18px;
  background-color: var(--disable-bg-color);
`;

export const Th = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;

  @media ${device.desktop} {
    padding-top: 16px;
    padding-bottom: 16px;
  }
`;

export const Tbody = styled.tbody`
  font-weight: 400;
  font-size: 16px;

  background-color: var(--active-bg-color);
`;

export const Td = styled.td`
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 20px;

  @media ${device.desktop} {
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 40px;
  }
`;
