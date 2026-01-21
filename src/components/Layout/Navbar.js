import React from 'react';
import { Box, AppBar, Toolbar, Typography, IconButton, Tooltip } from '@mui/material';
import { Brightness4, Brightness7, NotificationsNone, AccountCircle } from '@mui/icons-material';
import { useThemeMode } from '../../context/ThemeContext';

const Navbar = () => {
  const { mode, toggleMode } = useThemeMode();

  return (
    <AppBar
      position="fixed"
      sx={{
        left: 260,
        width: 'calc(100% - 260px)',
        bgcolor: 'background.paper',
        color: 'text.primary',
        boxShadow: 1,
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Productivity & Analytics Dashboard
        </Typography>
        <Tooltip title="Toggle theme">
          <IconButton onClick={toggleMode} color="inherit">
            {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Tooltip>
        <Tooltip title="Notifications">
          <IconButton color="inherit">
            <NotificationsNone />
          </IconButton>
        </Tooltip>
        <Tooltip title="Account">
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

