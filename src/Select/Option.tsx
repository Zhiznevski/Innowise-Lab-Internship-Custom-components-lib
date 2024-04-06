import React from 'react';

export interface OptionType {
  title: string;
}

export interface OptionProps {
  option: OptionType;
  onClick: () => void;
}

function Option({ option, onClick }: OptionProps) {
  return (
    <button type="button" onClick={onClick}>
      {option.title}
    </button>
  );
}

export default Option;
