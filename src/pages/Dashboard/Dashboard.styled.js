import styled from 'styled-components';

export const Container = styled.div``;

export const Box = styled.div`
  padding: 12px 20px;

  @media (min-width: 768px) {
    padding: 32px;
  }

  @media (min-width: 1280px) {
    display: flex;

    padding: 40px 16px 40px 0;
  }
`;

export const AppBarBox = styled.div`
  margin-bottom: 32px;

  @media (min-width: 768px) {
    display: flex;
    margin-bottom: 20px;
  }

  @media (min-width: 1280px) {
    height: 100vh;
    flex-direction: column;
    padding-left: 16px;
    padding-right: 69px;
    border-right: 1px solid #e7e5f2;
    box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05),
      1px 0px 0px rgba(255, 255, 255, 0.6);
    margin-bottom: 0;
  }
`;

export const NavBox = styled.div`
  @media (min-width: 768px) {
    margin-right: 32px;
  }

  @media (min-width: 1280px) {
    margin-right: 0;
    margin-bottom: 32px;
  }
`;
