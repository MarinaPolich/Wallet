import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SVG from 'react-inlinesvg';
import { device } from 'stylesheet/breakpoints';

export const Container = styled.div`
  background-color: white;
  width: 320px;
  background-color: var(--white);
  padding: 107px 20px;
  @media ${device.tabDesk} {
    width: 533px;
    border-radius: 20px;
    padding: 40px 59px 62px 65px;
  }
  @media ${device.mobile} {
    width: 100vw;
    padding: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const Title = styled.h2`
  color: var(--black);
  font-family: 'Poppins Bold';
  font-weight: 700;
  font-size: 30px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
`;
export const LogoSvg = styled(SVG)`
  margin-right: 16px;
  @media ${device.tabDesk} {
    margin-right: 16px;
    width: 30px;
    height: 30px;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Label = styled.label`
  margin-top: 40px;
    position: relative;
  &:first-child {
    margin-top: 0;
  }
`;
export const Input = styled.input`
  width: 280px;
  border: none;
  outline: 0;
  border-bottom: 1px solid var(--gray-5);
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  color: var(--gray-4);
  padding-left: 45px;
  padding-bottom: 8px;
  @media ${device.tabDesk} {
    width: 410px;
  }
`;
export const TextError = styled.p`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  color: var(--btn-bg-color);
  margin-top: 5px;
`;
export const Svg = styled(SVG)`
  position: absolute;
`;
export const Button = styled.button`
  font-family: 'Circe';
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
cursor: pointer;
  color: var(--white);
  width: 280px;
  height: 50px;
  margin-bottom: 20px;
  margin-top: 42px;
  background-color: var(--btn-bg-color);
  border: none;
  border-radius: 20px;
    &:hover {
    background-color: var(--white);
    color: var(--btn-bg-color);
    transition: 1000ms;
    border: 1px solid var(--btn-bg-color);
  }
  @media ${device.tabDesk} {
    width: 300px;
  }
`;
export const StyledLink = styled(Link)`
  font-family: 'Circe';
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--active-bg-color);
  width: 280px;
  height: 50px;
  background-color: var(--white);
  border: 1px solid #4a56e2;

  border: 1px solid var(--active-bg-color);
  border-radius: 20px;
   &:hover {
    background-color: var(--active-bg-color);
    color: var(--white);
    transition: 1000ms;
  }
  @media ${device.tabDesk} {
    width: 300px;
  }
`;
