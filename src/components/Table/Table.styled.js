import styled from 'styled-components';

export const StyledTable = styled.table`
  border-collapse: separate;
  border-spacing: 0;
`;

export const THead = styled.thead``;

export const THeadRow = styled.tr``;

export const StyledTh = styled.th`
  background-color: green;
  padding: 16px 20px;
  max-width: 148px;
  text-align: ${props => props.position};

  &:first-child {
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
  }
  &:last-child {
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }
`;

export const StyledTr = styled.tr``;

export const StyledTd = styled.td`
  text-align: ${props => props.position};
  padding: 14px 20px;
  max-width: 148px;

  border-bottom: 1px solid #dcdcdf;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
`;

export const TSum = styled.td`
  text-align: ${props => props.position};
  color: ${props => (props.income ? '#24CCA7' : '#FF6596')};
  border-bottom: 1px solid #dcdcdf;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);

  max-width: 148px;
  padding: 14px 20px;
`;
