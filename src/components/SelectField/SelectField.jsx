
import React from 'react';
import { SelectFieldBox } from './SelectField.styled';

export const SelectField = ({
    options,
    field,
    form,
}) => (
    <SelectFieldBox
        name={field.name}
        value={options ? options.find(option => option.value === field.value) : ''}
        onChange={(option) => form.setFieldValue(field.name, option.value)}
        options={options}
        placeholder='Select a category'
        styles={{
            control: (baseStyles, state) => ({
                ...baseStyles,
                outline: 'none',
                border: '1px solid var(--gray-5)',
                borderTop: 'none',
                borderLeft: 'none',
                borderRight: 'none',
            }),
        }}
    />
)