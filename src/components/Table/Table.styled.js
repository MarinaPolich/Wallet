import styled from 'styled-components';
import { device } from 'stylesheet/breakpoints';

export const Section = styled.section`
  @media ${device.tablet} {
    max-height: calc(100vh - 340px);
    overflow-y: auto;
  }
  @media ${device.desktop} {
    padding-top: 46px;
    padding-left: 69px;
    max-height: calc(100vh - 130px);
    overflow-y: auto;
  }
`;

export const StyledTable = styled.table`
  width: 688px; // 704
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

export const List = styled.ul`
  width: 280px;
  background-color: var(--white);
  border-radius: 10px;
  border-left: 5px solid
    ${props => (props.income ? 'var(--btn-bg-color)' : 'var(--error-color)')};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 8px;

  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
  padding-left: 20px;
  padding-bottom: 8px;
  padding-right: 20px;

  font-family: 'Circe';
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;

  &:not(:last-child) {
    border-bottom: 1px solid #dcdcdf;
  }
`;

export const ListText = styled.span`
  font-family: 'Circe';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
`;

export const ListSum = styled.span`
  color: ${props =>
    props.income ? 'var(--btn-bg-color)' : 'var(--error-color)'};
`;

export const ActionContainer = styled.div`
  opacity: 0;
  position: absolute;
  right: 0;
  transition: all 250ms linear;
`;

export const StyledDelButton = styled.button`
  display: inline-flex;
  align-items: center;
  border: none;
  background-color: transparent;

  cursor: pointer;
  transition: background-color 250ms linear;

  @media ${device.mobile} {
    &:not(:last-child) {
      margin-right: 50px;
    }
  }

  &:hover,
  :focus {
    background-color: var(--gray-5);
  }

  @media ${device.tabDesk} {
    margin-right: 0;
    padding: 14px 20px;
    background-color: var(--bg-color);
    transform: translateY(-70%);
  }
`;

export const StyledSpan = styled.span`
  background-color: transparent;
`;

export const TR = styled.tr`
  position: relative;
  transition: all 250ms linear;

  @media ${device.tabDesk} {
    &:hover,
    &:focus,
    &:active {
      background-color: rgba(0, 0, 0, 0.15);
      ${ActionContainer} {
        opacity: 1;
      }
    }
  }
`;

export const ListItemBtn = styled.li`
  display: flex;
  justify-content: center;
  padding-top: 12px;
  padding-left: 20px;
  padding-bottom: 8px;
  padding-right: 20px;

  font-family: 'Circe';
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;

  &:not(:last-child) {
    border-bottom: 1px solid #dcdcdf;
  }
`;
