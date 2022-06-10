import React from 'react';
import { Box } from '@mui/system';
import ITutorial from '../../interfaces/tutorial.interface';
import { Button, Grid } from '@mui/material';
import {
  ButtonWrapper,
  Copyright,
  Description,
  Item,
  Title,
} from './TutorialsView.styled';
import NoTutorials from '../../components/NoTutorials/NoTutorials';

type Props = {
  tutorials: ITutorial[] | null;
  handleItemSelect: (item: ITutorial, page: string) => void;
};

const TutorialsView = ({ tutorials, handleItemSelect }: Props) => {
  if (!tutorials?.length) return <NoTutorials />;

  return (
    <Box sx={{ flexGrow: 1, mt: 5 }}>
      <Grid container spacing={2} rowSpacing={{ xs: 1.5, sm: 2 }}>
        {tutorials.map((item: ITutorial) => (
          <Grid item xs={12} sm={6} md={3} key={item.id}>
            <Item>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>

              <ButtonWrapper>
                <Button onClick={() => handleItemSelect(item, 'details')}>
                  Details
                </Button>

                <Button onClick={() => handleItemSelect(item, 'update')}>
                  Update
                </Button>
              </ButtonWrapper>
            </Item>
          </Grid>
        ))}
      </Grid>

      <Copyright>Copyrights © 2022.</Copyright>
    </Box>
  );
};

export default TutorialsView;
