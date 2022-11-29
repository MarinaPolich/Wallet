import { useTablet } from 'hooks/useTablet';

export const Tablet = ({ children }) => (useTablet() ? children : null);
