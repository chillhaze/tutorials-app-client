import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  vertical-align: middle;
`;
export const InputLabel = styled.label`
  display: block;

  font-weight: 700;
`;
export const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  vertical-align: middle;
`;
export const InputItem = styled.input`
  font-style: italic;

  @media (max-width: 450px) {
  }
  &:hover {
    transform: scale(1.01);
  }
  &:focus {
    transform: scale(1.01);
    outline-offset: 2px;
    outline-style: solid;
  }
`;
export const Error = styled.p`
  position: absolute;

  left: 0;
  z-index: 10;
`;
