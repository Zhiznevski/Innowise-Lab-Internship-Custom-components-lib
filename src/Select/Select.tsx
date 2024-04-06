import React, { useEffect, useRef, useState } from 'react';
import styles from './Select.module.css';
import TextField from '../TextField/TextField';
import Option from './Option';

export interface SelectProps {
  options: OptionType[];
}

export interface OptionType {
  title: string;
}

export interface OptionProps {
  option: OptionType;
  onClick: () => void;
}

function Select({ options }: SelectProps) {
  const [isOpen, setIsOpen] = useState(true);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const { target } = e;
      if (target instanceof Node && !selectRef.current?.contains(target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div ref={selectRef} className={styles.wrapper}>
      <TextField select />
      {isOpen && (
        <ul>
          {options.map((element) => (
            <Option key={element.title} option={element} onClick={() => {}} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Select;
