import { Mobile } from 'components/Container/Mobile';
import { IsDesktopOrTablet } from 'components/Container/Tablet';
import {
  home,
  home_mobile,
  statistic,
  statistic_mobile,
  currency_mobile,
} from 'assets/media/icons';
import { Box, StyledLink, Text, Icon, CurrencyIcon } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Box>
      <StyledLink to="/home">
        <Mobile>
          <Icon src={home_mobile} width={44} height={44} title="home" />
        </Mobile>
        <IsDesktopOrTablet>
          <Icon src={home} width={24} height={24} title="home" />
        </IsDesktopOrTablet>
        <Text>Home</Text>
      </StyledLink>
      <StyledLink to="/diagram">
        <Mobile>
          <Icon src={statistic_mobile} width={44} height={44} title="home" />
        </Mobile>
        <IsDesktopOrTablet>
          <Icon src={statistic} width={24} height={24} title="statistic" />
        </IsDesktopOrTablet>
        <Text>Statistics</Text>
      </StyledLink>
      <Mobile>
        <StyledLink to="/currency">
          <CurrencyIcon
            src={currency_mobile}
            width={44}
            height={44}
            title="currency"
          />
        </StyledLink>
      </Mobile>
    </Box>
  );
};
