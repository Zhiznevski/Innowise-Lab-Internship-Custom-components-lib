import React, { RefObject, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './Select.module.css';
import TextField, { Variant } from '../TextField/TextField';
import Dropdown from './Dropdown';
import ArrowIcon from '../TextField/icon.svg';
import { MOCK_OPTIONS } from './mockData';

const SELECT_PADDING = 10;
const SELECT_HEIGHT = 56;

const KEY_CODES = {
  ENTER: 'Enter',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
};

export interface SelectProps {
  options: OptionType[];
  variant?: Variant;
}

export interface OptionType {
  title: string;
}

export interface OptionProps {
  option: OptionType;
  onClick: (value: string) => void;
}
type Coordinates = {
  top: number;
  left: number;
};

function Select({ variant = 'outlined', options = MOCK_OPTIONS }: SelectProps) {
  const [selectedValue, setSelectedValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [coordinates, setCoordinates] = useState<Coordinates | undefined>();
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const selectRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleTextFieldClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (value: string) => {
    setIsOpen(false);
    setSelectedValue(value);
    inputRef.current?.focus();
  };

  const highlightedIndexHandler = (index: number) => {
    setHighlightedIndex(index);
  };

  const updateCoordinates = (ref: RefObject<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      setCoordinates({
        top: rect.y + window.scrollY + SELECT_HEIGHT + SELECT_PADDING,
        left: rect.x + SELECT_PADDING,
      });
    }
  };

  useEffect(() => {
    if (isOpen && selectedValue === ' ') setHighlightedIndex(0);
  }, [isOpen]);

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

  useEffect(() => {
    const keyboardHandler = (e: KeyboardEvent) => {
      switch (e.code) {
        case KEY_CODES.ENTER:
          handleTextFieldClick();
          updateCoordinates(selectRef);
          if (isOpen) {
            handleOptionClick(options[highlightedIndex].title);
          }
          break;
        case KEY_CODES.ARROW_DOWN:
        case KEY_CODES.ARROW_UP: {
          if (!isOpen) {
            handleTextFieldClick();
            updateCoordinates(selectRef);
            break;
          }
          const nextOptionIndex = highlightedIndex + (e.code === KEY_CODES.ARROW_DOWN ? 1 : -1);
          if (nextOptionIndex >= 0 && nextOptionIndex < options.length) {
            setHighlightedIndex(nextOptionIndex);
          }
          break;
        }
        default:
          break;
      }
    };
    selectRef.current?.addEventListener('keydown', keyboardHandler);
    return () => {
      selectRef.current?.removeEventListener('keydown', keyboardHandler);
    };
  }, [isOpen, highlightedIndex]);

  return (
    <div className={styles.container}>
      <div ref={selectRef} className={styles.wrapper}>
        <TextField
          ref={inputRef}
          variant={variant}
          select
          selectedValue={selectedValue}
          onClick={() => {
            handleTextFieldClick();
            updateCoordinates(selectRef);
          }}
        />
        <div data-open={isOpen} className={styles.icon}>
          <ArrowIcon />
        </div>
        {isOpen &&
          createPortal(
            <Dropdown
              options={options}
              highlightedIndex={highlightedIndex}
              highlightedIndexHandler={highlightedIndexHandler}
              ref={dropdownRef}
              coordinates={coordinates}
              onClick={handleOptionClick}
              updateCoordinates={() => updateCoordinates(selectRef)}
            />,
            document.body
          )}
      </div>
    </div>
  );
}

export default Select;
