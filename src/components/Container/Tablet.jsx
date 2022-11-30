import { useTablet, useDesktopOrTablet } from 'hooks/useTablet';

export const Tablet = ({ children }) => (useTablet() ? children : null);
export const IsDesktopOrTablet = ({ children }) => (useDesktopOrTablet() ? children : null);