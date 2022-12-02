import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SVG from 'react-inlinesvg';
import { device } from 'stylesheet/breakpoints';
export const Container = styled.div`
  background-color: white;
  width: 320px;
  heigth: 100vh;
  padding: 107px 20px;
  @media ${device.tablet} {
    width: 533px;
    border-radius: 20px;

    padding: 40px 59px 62px 65px;
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
  @media ${device.tablet} {
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
  margin-bottom: 40px;
`;
export const Input = styled.input`
  width: 280px;
  border: none;
  outline: 0;
  border-bottom: 1px solid #e0e0e0;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  color: #bdbdbd;
  padding-left: 45px;
  padding-bottom: 8px;
  @media ${device.tablet} {
    width: 410px;
  }
`;
export const TextError = styled.p`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  color: #24cca7;
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

  color: #ffffff;
  width: 280px;
  height: 50px;
  margin-bottom: 20px;
  background-color: #24cca7;
  border: none;
  border-radius: 20px;
  @media ${device.tablet} {
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

  color: #4a56e2;
  width: 280px;
  height: 50px;
  background-color: #ffffff;
  border: 1px solid #4a56e2;
  border-radius: 20px;
  @media ${device.tablet} {
    width: 300px;
  }
`;
