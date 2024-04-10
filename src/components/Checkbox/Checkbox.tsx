import React from 'react';
import styles from './Checkbox.module.css';

export interface CheckboxProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: () => void;
  label?: React.ReactNode;
  id?: string;
}

function Checkbox({
  checked = false,
  disabled = false,
  onChange = () => {},
  label = 'checkbox',
  id = 'cbx',
}: CheckboxProps) {
  const wrapperClasses = [styles.wrapper];
  if (disabled) wrapperClasses.push(styles.disabled);
  return (
    <div className={wrapperClasses.join(' ')}>
      <input
        className={styles.input}
        id={id}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className={styles.checkbox} htmlFor={id} />
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
