import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
export const BtnWrapper = styled(Box)`
  & button {
    margin-right: 15px;
  }
  & button:nth-last-of-type(1) {
    margin-right: 0px;
  }
`;
export const Btn = styled(Button)`
  color: #fff;
  border-color: #fff;

  &:hover {
    background-color: #fff;
    color: #1976d2;
  }
`;
