import React, { forwardRef, useImperativeHandle, useState } from 'react';
import styles from './TextField.module.css';

type Variant = 'outlined' | 'filled' | 'standart';
type Label = 'Outlined' | 'Filled' | 'Standart';

export interface TextFieldProps {
  variant?: Variant;
  error?: boolean;
  label?: Label;
  disabled?: boolean;
}

export type TextFieldHandle = {
  getValue: () => string;
};

const TextField = forwardRef<TextFieldHandle, TextFieldProps>(
  (
    { variant = 'outlined', error = false, label = 'Outlined', disabled = false }: TextFieldProps,
    ref
  ) => {
    const [value, setValue] = useState('');

    useImperativeHandle(ref, () => ({ getValue: () => value }));

    const TextFieldLabel = error ? 'error' : label;
    const inputClasses = [styles.input, styles[variant]];
    if (error) inputClasses.push(styles.error);
    if (disabled) inputClasses.push(styles.disabled);

    return (
      <label htmlFor="inp" className={styles.wrapper}>
        <input
          className={inputClasses.join(' ')}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          id="inp"
          placeholder="&nbsp;"
          disabled={disabled}
        />
        <span className={styles.label}>{TextFieldLabel}</span>
        <span className={styles.focusBg} />
      </label>
    );
  }
);

export default TextField;
