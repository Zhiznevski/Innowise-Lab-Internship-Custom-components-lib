import React, { forwardRef, useEffect } from 'react';
import styles from './Dropdown.module.css';
import Option from './Option';

type Coordinates = {
  top: number;
  left: number;
};

type OptionType = {
  title: string;
};

export type DropDownProps = {
  options: OptionType[];
  coordinates: Coordinates | undefined;
  updateCoordinates: () => void;
  onClick: (value: string) => void;
  highlightedIndexHandler: (index: number) => void;
  highlightedIndex: number;
};

const Dropdown = forwardRef<HTMLDivElement, DropDownProps>(
  (
    { coordinates, options, updateCoordinates, onClick, highlightedIndexHandler, highlightedIndex },
    ref
  ) => {
    useEffect(() => {
      window.addEventListener('resize', updateCoordinates);
      return () => window.removeEventListener('resize', updateCoordinates);
    }, []);

    return (
      <div ref={ref} style={{ ...coordinates }} className={[styles.dropdownContainer].join(' ')}>
        <ul className={styles.optionsList}>
          {options.map((element, index) => (
            <Option
              key={element.title}
              option={element}
              onClick={onClick}
              index={index}
              highlightedIndex={highlightedIndex}
              highlightedIndexHandler={highlightedIndexHandler}
            />
          ))}
        </ul>
      </div>
    );
  }
);

export default Dropdown;
