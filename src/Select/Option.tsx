import React from 'react';
import styles from './Option.module.css';

export interface OptionType {
  title: string;
}

export interface OptionProps {
  option: OptionType;
  onClick: (value: string) => void;
}

function Option({ option, onClick }: OptionProps) {
  const { title } = option;
  return (
    <li
      className={styles.li}
      tabIndex={0}
      role="option"
      aria-selected
      value={title}
      onClick={() => onClick(title)}
      onKeyDown={() => onClick(title)}
    >
      {title}
    </li>
  );
}

export default Option;
