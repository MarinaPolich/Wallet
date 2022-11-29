import { useMobile } from 'hooks/useMobile';

export const Mobile = ({ children }) => (useMobile() ? children : null);
