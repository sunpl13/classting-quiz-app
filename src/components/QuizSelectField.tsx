import React from 'react';
import { MenuItem, Select } from '@mui/material';
import { optionValues } from '../utils/test/datas';
type Props = {
  label: string;
  className?: string;
  onChange: (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
  type: 'category' | 'type' | 'difficulty';
  name: string;
  id?: string;
  value: string | number;
};

const QuizSelectField = ({
  label,
  className,
  onChange,
  type,
  name,
  id,
  value
}: Props) => {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <Select
        data-testid="test-input"
        value={value}
        onChange={onChange}
        className={`data-input ${className}`}
        labelId={id}
        id={id}
        name={name}>
        {optionValues[type].map((item) => {
          return (
            <MenuItem value={item.value} key={item.value}>
              {item.text}
            </MenuItem>
          );
        })}
      </Select>
    </div>
  );
};

export default QuizSelectField;
