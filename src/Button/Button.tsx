import React from 'react';
import styles from './Button.module.css';

type Color = 'primary' | 'secondary' | 'success';
type Variant = 'text' | 'contained' | 'outlined';
type Size = 'small' | 'medium' | 'large';

export interface ButtonProps {
  color?: Color;
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  onClick?: () => void;
}

function Button({
  color = 'primary',
  variant = 'text',
  size = 'medium',
  disabled = false,
  onClick = () => {},
}: ButtonProps) {
  const cssClasses = [styles.myButton, styles[color], styles[variant], styles[size]];
  return (
    <button
      className={cssClasses.join(' ')}
      style={{ color }}
      onClick={onClick}
      disabled={disabled}
      type="submit"
    >
      Hello World
    </button>
  );
}

export default Button;
