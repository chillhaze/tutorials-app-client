import styled from '@emotion/styled';
import { Button, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';

export const DetailsWrapper = styled(Box)`
  height: 92vh;
  display: flex;
  justify-content: center;
  text-align: center;
  vertical-align: middle;
`;
export const DetailsPaper = styled(Paper)`
  margin: auto 0;
  padding: 70px 20px 0;
  min-width: 600px;
`;
export const Title = styled(Typography)`
  margin-bottom: 50px;
  font-weight: 600;
  color: #1976d2;
`;
export const Description = styled(Typography)``;
export const ButtonWrapper = styled(Box)`
  margin: 30px 0;

  & button:hover {
    color: #ff4d80;
    background-color: #fff;
  }
`;
export const DeleteBtn = styled(Button)`
  background-color: #ff4d80;
  border: 1px solid #ff4d80;
`;
