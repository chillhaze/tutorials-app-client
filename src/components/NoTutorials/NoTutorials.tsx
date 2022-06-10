import React from 'react';
import { Button } from '@mui/material';
import { NoSelected, Wrapper } from './NoTutorials.styled';

type Props = {};

const NoTutorials = (props: Props) => {
  return (
    <Wrapper sx={{ flexGrow: 1 }}>
      <NoSelected variant="h3">...no tutorials</NoSelected>
      <Button variant="contained" href="/manage/create">
        Create
      </Button>
    </Wrapper>
  );
};

export default NoTutorials;
