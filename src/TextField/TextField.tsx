import React, { forwardRef, useImperativeHandle, useState } from 'react';
import styles from './TextField.module.css';
import ArrowIcon from './icon.svg';

type Variant = 'outlined' | 'filled' | 'standard';
type Label = 'Outlined' | 'Filled' | 'Standard';

export interface TextFieldProps {
  variant?: Variant;
  error?: boolean;
  label?: Label;
  disabled?: boolean;
  select?: boolean;
}

export type TextFieldHandle = {
  getValue: () => string;
};

const TextField = forwardRef<TextFieldHandle, TextFieldProps>(
  (
    {
      variant = 'outlined',
      error = false,
      label = 'Outlined',
      disabled = false,
      select = false,
    }: TextFieldProps,
    ref
  ) => {
    const [value, setValue] = useState('');

    useImperativeHandle(ref, () => ({ getValue: () => value }));

    // const TextFieldLabel = error ? 'error' : label;
    const inputClasses = [styles.input, styles[variant]];
    const labelClasses = [styles.label];
    if (disabled) inputClasses.push(styles.disabled);
    if (variant === 'standard') labelClasses.push(styles.standardLabel);
    if (variant === 'outlined') labelClasses.push(styles.outlinedLabel);
    if (error) labelClasses.push(styles.errorLabel);
    if (error) inputClasses.push(styles.errorInput);

    return (
      <div className={styles.container}>
        <label htmlFor="inp" className={styles.wrapper}>
          <input
            readOnly={select}
            style={{ cursor: select ? 'pointer' : 'default' }}
            className={inputClasses.join(' ')}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            id="inp"
            placeholder="&nbsp;"
            disabled={disabled}
          />
          <span className={labelClasses.join(' ')}>{label}</span>
          <div className={styles.icon}>
            <ArrowIcon />
          </div>
        </label>
      </div>
    );
  }
);

export default TextField;
