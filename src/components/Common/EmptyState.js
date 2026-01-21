import React from 'react';
import { Box, Typography } from '@mui/material';

const EmptyState = ({ icon, title, description }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 8,
        px: 2,
        textAlign: 'center',
      }}
    >
      <Box sx={{ fontSize: 64, mb: 2, opacity: 0.5 }}>{icon}</Box>
      <Typography variant="h6" color="textSecondary" gutterBottom>
        {title}
      </Typography>
      {description && (
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      )}
    </Box>
  );
};

export default EmptyState;

