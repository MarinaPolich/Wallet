import {
  Box,
  BoxOut,
  ButtonExit,
  ExitIcon,
  HeaderBox,
  LinkLogo,
  LogoIcon,
  LogoTitle,
  NameUser,
} from './Header.styled';
import SVG from 'react-inlinesvg';
import { exit, logo, logoText } from 'assets/media/icons';
import { Mobile } from 'components/Container/Mobile';
import { Tablet } from 'components/Container/Tablet';
import { Desktop } from 'components/Container/Desktop';
import { useSelector } from 'react-redux';
import { getUser } from 'redux/auth/auth-selector';
import { useState } from 'react';
import { ModalLogout } from '../ModalLogout/ModalLogout';

export const Header = () => {
  const [out, setLogOut] = useState(false);
  const name = useSelector(getUser);

  const toggleModal = () => {
    setLogOut(out => !out);
  };

  return (
    <Box>
      <HeaderBox>
        <LinkLogo>
          <LogoIcon
            src={logo}
            className="logo-icon"
            width={30}
            height={30}
            title="Logo"
          />
          <Mobile>
            <SVG src={logoText} width={74} height={17} title="Logo-title" />
          </Mobile>
          <Tablet>
            <LogoTitle>Wallet</LogoTitle>
          </Tablet>
          <Desktop>
            <LogoTitle>Wallet</LogoTitle>
          </Desktop>
        </LinkLogo>
        <BoxOut>
          <NameUser>{name.username}</NameUser>
          <ButtonExit type="button" onClick={toggleModal}>
            <ExitIcon src={exit} width={18} height={18} title="Exit" />
            <Tablet>
              <span>Exit</span>
            </Tablet>
            <Desktop>
              <span>Exit</span>
            </Desktop>
          </ButtonExit>
        </BoxOut>
        {out && <ModalLogout closeModal={toggleModal} />}
      </HeaderBox>
    </Box>
  );
};
