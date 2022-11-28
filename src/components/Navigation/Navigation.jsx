import { StyledLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <div>
      <StyledLink to="/home">Home</StyledLink>
      <StyledLink to="/diagram">Statistics</StyledLink>
    </div>
  );
};
