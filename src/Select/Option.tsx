import React from 'react';
import styles from './Option.module.css';

export interface OptionType {
  title: string;
}

export interface OptionProps {
  option: OptionType;
  onClick: () => void;
}

function Option({ option, onClick }: OptionProps) {
  return (
    <li
      className={styles.li}
      tabIndex={0}
      role="option"
      aria-selected
      onClick={onClick}
      onKeyDown={onClick}
    >
      {option.title}
    </li>
  );
}

export default Option;
