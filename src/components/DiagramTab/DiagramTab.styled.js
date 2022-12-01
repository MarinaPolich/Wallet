import styled from 'styled-components';
import { VscChevronDown } from 'react-icons/vsc';

export const Gif = styled.img`
  width: 100%;
  display: block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  @media screen and (min-width: 768.99px) {
    width: 60%;
  }
  @media screen and (min-width: 1279.99px) {
    width: 40%;
  }
`;

export const Statistic = styled.div`
  width: 280px;

  @media screen and (min-width: 768.99px) {
    display: flex; gap: 32px;
    width: 336px;
  }
  @media screen and (min-width: 1279.99px) {
    width: 395px;
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
  transform: translate(-50%, -50%);
  font-size: 18px;
  font-weight: 700;
`;
export const StyledForm = styled.form`
  @media screen and (min-width: 768.99px) {
    display: flex;
    gap: 16px;
  }
  @media screen and (min-width: 1279.99px) {
    gap: 32px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  & + & {
    margin-top: 20px;
  }
  @media screen and (min-width: 768.99px) {
   
    & + & {
      margin-top: 0;
    }
  }
`;
export const StyledSelect = styled.select`
  appearance: none;
  height: 50px;
  width: 100%;
  border-radius: 30px;
  padding-left: 20px;
  padding-right: 20px;
  & + & {
    margin-top: 20px;
  }
  @media screen and (min-width: 768.99px) {
    width: 160px;
    & + & {
      margin-top: 0;
    }
  }
  @media screen and (min-width: 1279.99px) {
    width: 182px;
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
  @media screen and (min-width: 768.99px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media screen and (min-width: 1279.99px) {
    padding-left: 28px;
    padding-right: 28px;
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
