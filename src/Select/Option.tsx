import React from 'react';
import styles from './Option.module.css';

export interface OptionType {
  title: string;
}

export interface OptionProps {
  option: OptionType;
  onClick: (value: string) => void;
  index: number;
  highlightedIndex: number;
  highlightedIndexHandler: (index: number) => void;
}

function Option({
  option,
  onClick,
  index,
  highlightedIndexHandler,
  highlightedIndex,
}: OptionProps) {
  const { title } = option;
  const optionClasses = [styles.li];
  if (highlightedIndex === index) optionClasses.push(styles.highlighted);
  return (
    <li
      className={optionClasses.join(' ')}
      tabIndex={0}
      role="option"
      aria-selected
      value={title}
      onClick={() => onClick(title)}
      // onMouseEnter={() => highlightedIndexHandler(index)}
      onKeyDown={() => {
        highlightedIndexHandler(index);
        onClick(title);
      }}
    >
      {title}
    </li>
  );
}

export default Option;
