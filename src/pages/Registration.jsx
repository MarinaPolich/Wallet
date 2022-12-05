import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import { Container, ImgBox, Title, Box } from './Registration.styled';
import {
  frameDesk,
  frameDesk2x,
  frameDesk3x,
  frameTab,
  frameTab2x,
  frameTab3x,
} from '../assets/media/images/index.js';
import { Tablet } from 'components/Container/Tablet';
import { Desktop } from 'components/Container/Desktop';

const Registration = () => {
  return (
    <Box> <ImgBox>
        {' '}
        <Tablet>
          <img
            src={frameTab}
            alt="Finance"
            width="274"
            height="250"
            srcSet={` ${frameTab} 1x, ${frameTab2x} 2x, ${frameTab3x} 3x`}
          />
          <Title>Finance App</Title>
        </Tablet>
        <Desktop>
          <img
            src={frameDesk}
            alt="Finance"
            width="452"
            height="412"
            srcSet={`${frameDesk} 1x, ${frameDesk2x} 2x, ${frameDesk3x} 3x`}
          />
          <Title>Finance App</Title>
        </Desktop>
      </ImgBox>
    <Container>
      <RegistrationForm />
    </Container></Box>
  )
};

export default Registration;
