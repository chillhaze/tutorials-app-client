import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { Btn, BtnWrapper, Wrapper } from './Header.styled';
import { useNavigate, useLocation } from 'react-router-dom';
import TutorialsService from '../../service/tutorials.service';
const tutorialsService = new TutorialsService();

type Props = {
  setSelectedItem: (item: null) => void;
  getTutorials: () => void;
};

const Header = ({ setSelectedItem, getTutorials }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
    setSelectedItem(null);
  };

  const handleDeleteAllBtnClick = async () => {
    await tutorialsService.deleteAllTutorials();
    await getTutorials();
    navigate('/');
    setSelectedItem(null);
  };

  const handleCreateBtnClick = () => {
    navigate('/manage/create');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Wrapper>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: 'inherit',
                textDecoration: 'none',
                textTransform: 'uppercase',
              }}
            >
              <EmojiEmotionsIcon
                sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
              />
              Tutorial App
            </Typography>

            <BtnWrapper>
              <Btn
                variant="outlined"
                onClick={handleCreateBtnClick}
                sx={{ color: '#fff' }}
              >
                Create new
              </Btn>

              <Btn
                disabled={location.pathname === '/'}
                variant="outlined"
                onClick={handleDeleteAllBtnClick}
                sx={{ color: '#fff' }}
              >
                Delete All
              </Btn>

              <Btn
                disabled={location.pathname === '/'}
                variant="outlined"
                onClick={handleHomeClick}
                sx={{ color: '#fff' }}
              >
                Home
              </Btn>
            </BtnWrapper>
          </Wrapper>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
