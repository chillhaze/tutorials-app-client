import React from 'react';
import ITutorial from '../../interfaces/tutorial.interface';
import {
  ButtonWrapper,
  DeleteBtn,
  Description,
  DetailsPaper,
  DetailsWrapper,
  Title,
} from './DetailsView.styled';
import TutorialsService from '../../service/tutorials.service';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
const tutorialsService = new TutorialsService();

type Props = {
  item: ITutorial | null;
  getTutorials: () => void;
};

const DetailsView = ({ item, getTutorials }: Props) => {
  const navigate = useNavigate();

  const handleDeleteBtnClick = async () => {
    item && (await tutorialsService.deleteTutorial(item.id));
    await getTutorials();
    navigate('/');
  };

  return (
    <DetailsWrapper>
      {!item ? (
        <DetailsPaper>
          <Title variant="h2">No selected tutorial</Title>
        </DetailsPaper>
      ) : (
        <DetailsPaper>
          <Title variant="h2">{item.title}</Title>
          <Description>{item.description}</Description>

          <Typography
            sx={{ color: '#1976d2', mt: 10, fontSize: 12, fontWeight: 600 }}
          >
            {item.published
              ? 'this tutorial is published'
              : 'this tutorial is not published'}
          </Typography>

          <ButtonWrapper>
            <DeleteBtn
              variant="contained"
              size="small"
              onClick={handleDeleteBtnClick}
            >
              Delete this item
            </DeleteBtn>
          </ButtonWrapper>
        </DetailsPaper>
      )}
    </DetailsWrapper>
  );
};

export default DetailsView;
