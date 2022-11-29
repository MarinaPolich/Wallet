import { Mobile } from 'components/Container/Mobile';
import { StyledLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <div>
      <StyledLink to="/home">Home</StyledLink>
      <StyledLink to="/diagram">Statistics</StyledLink>
      <Mobile>
        <StyledLink to="/currency">Currency</StyledLink>
      </Mobile>
    </div>
  );
};
