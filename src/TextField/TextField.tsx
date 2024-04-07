import React, { forwardRef, useState } from 'react';
import styles from './TextField.module.css';

export type Variant = 'outlined' | 'filled' | 'standard';
type Label = 'Outlined' | 'Filled' | 'Standard';

export interface TextFieldProps {
  variant?: Variant;
  error?: boolean;
  label?: Label;
  disabled?: boolean;
  select?: boolean;
  selectedValue?: string;
  onClick?: () => void;
}

type Ref = HTMLInputElement;
const TextField = forwardRef<Ref, TextFieldProps>(
  (
    {
      variant = 'outlined',
      error = false,
      label = 'Outlined',
      disabled = false,
      select = false,
      selectedValue,
      onClick,
    }: TextFieldProps,
    ref
  ) => {
    const [value, setValue] = useState('');

    const inputClasses = [styles.input, styles[variant]];
    const labelClasses = [styles.label];
    if (disabled) inputClasses.push(styles.disabled);
    if (variant === 'standard') labelClasses.push(styles.standardLabel);
    if (variant === 'outlined') labelClasses.push(styles.outlinedLabel);
    if (error) labelClasses.push(styles.errorLabel);
    if (error) inputClasses.push(styles.errorInput);

    const handleClick = () => {
      setValue(' ');
      if (onClick) onClick();
    };

    return (
      <div
        className={styles.container}
        onClick={select ? handleClick : undefined}
        role="button"
        tabIndex={0}
        aria-hidden // need to fix it
      >
        <label htmlFor="inp" className={styles.wrapper}>
          <input
            ref={ref}
            readOnly={select}
            style={{ cursor: select ? 'pointer' : 'text' }}
            className={inputClasses.join(' ')}
            value={selectedValue || value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            id="inp"
            placeholder={' '}
            disabled={disabled}
          />
          <span className={labelClasses.join(' ')}>{label}</span>
        </label>
      </div>
    );
  }
);

export default TextField;
