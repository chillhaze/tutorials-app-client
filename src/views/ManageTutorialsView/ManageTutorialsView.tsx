import React, { useState } from 'react';
import { FormControlLabel, Switch } from '@mui/material';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import ITutorial from '../../interfaces/tutorial.interface';
import { ManagePaper, ManageWrapper } from './ManageTutorialsView.styled';

type Props = {
  item: ITutorial | null;
};

const ManageTutorialsView = ({ item }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [label, setLabel] = useState('Create new');

  const handlePageChange = () => {
    if (location.pathname !== '/manage/create') {
      setLabel('Back to Update');
      return navigate('/manage/create');
    } else if (label === 'Back to Update') {
      setLabel('Create new');
      return navigate(-1);
    }
  };

  return (
    <>
      <ManageWrapper>
        <ManagePaper>
          <FormControlLabel
            control={<Switch />}
            label={label}
            onChange={handlePageChange}
          />
          {/* Nested Routs below*/}
          <Outlet />
        </ManagePaper>
      </ManageWrapper>
    </>
  );
};

export default ManageTutorialsView;
