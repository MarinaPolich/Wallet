import styled from 'styled-components';
import { device } from 'stylesheet/breakpoints';

export const Section = styled.section`
  @media ${device.desktop} {
    padding-top: 46px;
    padding-left: 69px;
  }
`;

export const StyledTable = styled.table`
  width: 704px;
  padding-left: 20px;
  padding-right: 20px;
  border-spacing: 0;

  @media ${device.desktop} {
    width: 715px;
  }
`;

export const THead = styled.thead`
  font-family: 'Circe';
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;

  background-color: var(--white);
`;

export const StyledTh = styled.th`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 20px;

  text-align: left;

  &:first-child {
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
  }
`;

export const ThRight = styled.th`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: 20px;

  text-align: right;

  &:last-child {
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }
`;

export const Tbody = styled.tbody`
  font-family: 'Circe';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
`;

export const StyledTd = styled.td`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 20px;
  border-bottom: 1px solid #dcdcdf;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);

  /* text-align: right; */
`;

export const TypeTd = styled.td`
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #dcdcdf;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);

  text-align: center;
`;

export const TSum = styled.td`
  padding-top: 16px;
  padding-right: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #dcdcdf;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);

  text-align: right;

  color: ${props =>
    props.income ? 'var(--btn-bg-color)' : 'var(--error-color)'};
`;

export const BalanceTd = styled.td`
  padding-top: 16px;
  padding-right: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #dcdcdf;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);

  text-align: right;
`;
