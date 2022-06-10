import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';

export const Item = styled(Paper)`
  height: 100%;
  padding: 15px 10px 5px;
  text-align: center;
`;
export const Title = styled.h5`
  margin: 10px 0 15px;
  font-size: 18px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const Description = styled.p`
  height: 35px;
  margin-bottom: 10px;
  font-size: 14px;
  overflow: hidden;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const Copyright = styled(Typography)`
  margin-top: 70px;
  padding-bottom: 40px;
  text-align: center;
  font-weight: 600;
  color: #1976d2;
`;
