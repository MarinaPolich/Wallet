import { LoginForm } from 'components/LoginForm/LoginForm';
import { Container, ImgBox, Title, Box } from './Login.styled';
import {
  frameManDesk,
  frameManDesk2x,
  frameManDesk3x,
  frameManTab,
  frameManTab2x,
  frameManTab3x,
} from '../assets/media/images/index.js';
import { Tablet } from 'components/Container/Tablet';
import { Desktop } from 'components/Container/Desktop';

const Login = () => {
  return (
    <Box>
      {/* {' '} */}
      <ImgBox>
        {/* {' '} */}
        <Tablet>
          <img
            src={frameManTab}
            alt="Finance"
            width="260"
            height="250"
            srcSet={` ${frameManTab} 1x, ${frameManTab2x} 2x, ${frameManTab3x} 3x`}
          />
          <Title>Finance App</Title>
        </Tablet>
        <Desktop>
          <img
            src={frameManDesk}
            alt="Finance"
            width="435"
            height="419"
            srcSet={`${frameManDesk} 1x, ${frameManDesk2x} 2x, ${frameManDesk3x} 3x`}
          />
          <Title>Finance App</Title>
        </Desktop>{' '}
      </ImgBox>
      <Container>
        <LoginForm />
      </Container>
    </Box>
  );
};

export default Login;
