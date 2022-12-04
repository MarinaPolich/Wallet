import styled from 'styled-components';

export const Box = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const Report = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
  transform: translate(-50%, -50%);
  background-color: #ddd;
  width: 280px;
  @media screen and (min-width: 767.99px) {
    width: 360px;
  }
`;
export const Caption = styled.div`
  color: #333;
  font-size: 14px;
  font-weight: 700;
  width: 240px;
  padding: 8px;
`;
export const Table = styled.div``;

export const Header = styled.div`
  display: none;
  background-color: #fff;
  @media screen and (min-width: 767.99px) {
    display: flex;
  }
`;

export const StyledTh = styled.span`
  display: inline-block;
  padding: 8px;
  font-weight: 500;
  background-color: #fff;
  text-align: ${props => props.position};
  &:nth-child(2) {
    margin-left: 12px;
  }
  &:nth-child(3) {
    margin-left: auto;
  }
`;

export const StyledTr = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #222;

  @media screen and (min-width: 767.99px) {
    flex-direction: row;
    border: none;
    width: 100%;
  }
`;

export const SpanCell = styled.span`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  font-size: 12px;
  border-bottom: 1px solid #dcdcdf;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);

  @media screen and (min-width: 767.99px) {
    display: inline-block;
    text-align: ${props => props.position};
    &:last-child {
      margin-left: auto;
    }
  }
`;
export const SpanCaption = styled.span`
  text-align: left;
  @media screen and (min-width: 767.99px) {
    display: none;
  }
`;
export const SpanValue = styled.span`
  text-align: right;
`;
export const SpanSum = styled.span`
  text-align: right;
  color: #ff6596;
`;
export const Btn = styled.span`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  text-align: center;
  font-weight: 700;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 50%;
`;
