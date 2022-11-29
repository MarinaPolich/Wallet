import { useDesktop } from 'hooks/useDesktop';

export const Desktop = ({ children }) => (useDesktop() ? children : null);
