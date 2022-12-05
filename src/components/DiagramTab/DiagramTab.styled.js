import styled from 'styled-components';
import { VscChevronDown } from 'react-icons/vsc';

export const Box = styled.div`
  @media screen and (min-width: 1279.99px) {
    padding-left: 69px;
  }
`;

export const Statistic = styled.div`
  display: flex;
  align-items: flex-start;
  @media screen and (max-width: 768.99px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Diagram = styled.div`
  position: relative;
  margin-left: 16px;

  @media screen and (min-width: 768.99px) {
    width: 236px;
    margin-right: 116px;
  }
  @media screen and (min-width: 1279.99px) {
    width: 288px;
    margin-left: 0;
    margin-right: 32px;
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 8px;
  @media screen and (min-width: 768.99px) {
    margin-bottom: 20px;
  }
`;
export const Balance = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  font-size: 18px;
  font-weight: 700;

  @media screen and (min-width: 768.99px) {
    top: 50%;
    transform: translate(-50%, 0);
  }
  @media screen and (min-width: 1279.99px) {
    top: 50%;
    transform: translate(-50%, 0);
  }
`;
export const Table = styled.div`
  margin-top: 25px;
`;

export const StyledForm = styled.form`
  width: 280px;
  height: 120px;
  position: relative;
  @media screen and (min-width: 768.99px) {
    display: flex;
    gap: 16px;
    width: 336px;
    height: 50px;
  }
  @media screen and (min-width: 1279.99px) {
    gap: 32px;
    width: 396px;
  }
`;

export const WrapperYear = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
  border-radius: 30px;
  width: 280px;
  height: 50px;
  @media screen and (min-width: 768.99px) {
    width: 160px;
  }
  @media screen and (min-width: 1279.99px) {
    width: 182px;
  }
`;

export const WrapperMmonth = styled.label`
  position: absolute;
  top: 70px;
  left: 0;
  background-color: #fff;
  border-radius: 30px;
  width: 280px;
  height: 50px;
  @media screen and (min-width: 768.99px) {
    width: 160px;
    top: 0;
    left: 176px;
  }
  @media screen and (min-width: 1279.99px) {
    width: 182px;
    top: 0;
    left: 214px;
  }
`;

export const StyledSelect = styled.select`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  appearance: none;
  background-color: transparent;
  height: 50px;
  width: 100%;
  border-radius: 30px;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 768.99px) {
    width: 160px;
    margin-top: 0;
  }
  @media screen and (min-width: 1279.99px) {
    width: 182px;
    top: 0;
  }
`;
export const StyledVscChevronDown = styled(VscChevronDown)`
  width: 24px;
  height: 18px;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-20px, -50%);
  ${StyledSelect}:focus + & {
    transform: translate(-20px, -50%) rotate(180deg);
  }
  z-index: 0;
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 58px;
  background-color: #fff;
  border-radius: 30px;
  margin-top: 20px;
`;
export const HeaderText = styled.div`
  font-weight: 700;
  font-size: 18px;
  padding-left: 15px;
  padding-right: 15px;
  line-height: 58px;
  cursor: pointer;
  &:hover,
  &:focus {
    color: rgb(36, 204, 167);
  }
  @media screen and (min-width: 768.99px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media screen and (min-width: 1279.99px) {
    padding-left: 28px;
    padding-right: 28px;
  }
`;
export const Data = styled.ul`
  scrollbar-width: thin;
  min-height: 100px;
  @media screen and (min-width: 768.99px) {
    max-height: calc(100vh - 590px);
    overflow-y: auto;
  }
  @media screen and (min-width: 1279.99px) {
    max-height: calc(100vh - 360px);
    overflow-y: auto;
  }
`;

export const Category = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  line-height: 52px;
  padding-left: 15px;
  padding-right: 15px;
  border-bottom: 1px solid #dcdcdf;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
  text-align: left;
  cursor: pointer;
  div {
    margin-left: 5px;
  }
  div + div {
    margin-left: auto;
  }

  &::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 2px;
    background-color: ${props => props.col};
  }
`;
export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  padding-left: 15px;
  padding-right: 15px;
`;
