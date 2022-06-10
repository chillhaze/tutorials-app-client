import React, { useEffect, useState } from 'react';
import { Box, Error, InputItem, InputLabel, Wrapper } from './Input.styled';

type TError = { [key: string]: string };

type Props = {
  id: string;
  label: string;
  parent: string;
  handleChange: (e: React.ChangeEvent<any>) => void;
  value: string;
  errors: TError;
};

const Input = ({ id, label, parent, handleChange, value, errors }: Props) => {
  const [error, setError] = useState('');

  useEffect(() => {
    if (errors) setError(errors[parent]);
  }, [errors, parent]);

  // Uncomment to set type to the field
  // const handleType = (parent: string) => {
  //   if (parent === 'sku' || parent === 'name') {
  //     return 'text';
  //   } else {
  //     return 'number';
  //   }
  // };

  return (
    <Wrapper>
      <InputLabel htmlFor={parent}>{label}</InputLabel>

      <Box>
        {error && <Error>{error}</Error>}
        <InputItem
          id={id}
          name={parent}
          // type={handleType(parent)}
          type="text"
          onChange={handleChange}
          value={value}
        />
      </Box>
    </Wrapper>
  );
};

export default Input;
