import styled from 'styled-components';

export const Table = styled.table`
  width: 280px;
  border-spacing: 20px solid var(--disable-bg-color);
  border-radius: 30px;
  margin-left: auto;
  margin-right: auto;

  overflow: hidden;

  line-height: 1.5;

  color: var(--white);

  height: 174px;

  @media (min-width: 768px) {
    width: 336px;
  }

  @media (min-width: 1280px) {
    width: 393px;
    border-spacing: 40px solid var(--disable-bg-color);
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

  @media (min-width: 1280px) {
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

  @media (min-width: 1280px) {
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 40px;
  }
`;
