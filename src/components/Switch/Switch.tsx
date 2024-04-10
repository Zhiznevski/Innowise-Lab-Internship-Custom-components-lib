import React from 'react';
import styles from './Switch.module.css';

export interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: () => void;
  id?: string;
}

function Switch({
  checked = false,
  disabled = false,
  onChange = () => {},
  id = 'switch',
}: SwitchProps) {
  const switchClasses = [styles.switch];
  if (disabled) switchClasses.push(styles.disabled);
  return (
    <div className={styles.switchWrapper}>
      <label htmlFor={id} className={switchClasses.join(' ')}>
        {' '}
        <input
          id={id}
          checked={checked}
          disabled={disabled}
          className={styles.input}
          type="checkbox"
          onChange={onChange}
        />
        <span className={styles.span} />
      </label>
    </div>
  );
}

export default Switch;
