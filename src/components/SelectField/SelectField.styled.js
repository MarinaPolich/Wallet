import Select from 'react-select';
import styled from 'styled-components';
import { device } from 'stylesheet/breakpoints';

export const SelectFieldBox = styled(Select)`
  display: block;
  outline: none;
  margin-top: 40px;
  margin-left: 50px;
  margin-right: 50px;
  @media ${device.mobile} {
    width: 280px;
    margin-left: 0;
    margin-right: 0;
  }
`;