import React from 'react';
import { Wrapper } from './MainContainer.styled';

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const MainContainer = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default MainContainer;
