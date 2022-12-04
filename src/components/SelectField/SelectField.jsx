import React from 'react';
import { SelectFieldBox } from './SelectField.styled';

export const SelectField = ({ options, field, form }) => (
  <SelectFieldBox
    name={field.name}
    value={options ? options.find(option => option.value === field.value) : ''}
    onChange={option => form.setFieldValue(field.name, option.value)}
    options={options}
    placeholder="Select a category"
    unstyled
    styles={{
      control: (baseStyles, state) => ({
        ...baseStyles,
        outline: 'none',
        border: 'none',
        borderRadius: '0',
        borderBottom: '1px solid var(--gray-5)',
        fontWeight: '400',
        fontSize: '18px',
        lineHeight: '1.5',
      }),
      placeholder: baseStyles => ({
        ...baseStyles,
        color: 'var(--gray-4)',
      }),
      option: (baseStyles, { isFocused }) => ({
        ...baseStyles,
        backgroundColor: isFocused && '#fff',
        fontWeight: isFocused && '700',
        color: isFocused && 'var(--error-color)',
        padding: '10px 0 10px',
        cursor: 'pointer',
      }),
      menu: baseStyles => ({
        ...baseStyles,
        fontSize: '18px',
        lineHeight: 1.5,
        backgroundColor: 'var(--bg-select)',
        backdropFilter: 'blur(25px)',
        boxShadow: '0px 6px 15px var(--badroc-color)',
        borderRadius: '20px',
      }),
    }}
    required
  />
);
