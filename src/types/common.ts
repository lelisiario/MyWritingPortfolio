// src/types/common.ts (UPDATED)

/**
 * @interface ButtonProps
 * @description Defines props for a generic Button component.
 */
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'text';
  link?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  download?: string;
  className?: string;
  style?: React.CSSProperties;
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>; // <--- ADD THIS
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>; // <--- ADD THIS
}