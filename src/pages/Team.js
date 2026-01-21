import React, { useState, useEffect } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  LinearProgress,
  Box,
  Chip,
} from '@mui/material';
import { FiberManualRecord } from '@mui/icons-material';
import { teamMembers } from '../data/dummyData';
import { SkeletonKPICards } from '../components/Common/SkeletonLoader';

const Team = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'online':
        return 'success';
      case 'away':
        return 'warning';
      case 'offline':
        return 'default';
      default:
        return 'default';
    }
  };

  const getEfficiencyColor = (efficiency) => {
    if (efficiency >= 90) return 'success';
    if (efficiency >= 80) return 'info';
    return 'warning';
  };

  if (loading) {
    return <SkeletonKPICards />;
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Team Overview
      </Typography>
      <Typography variant="body2" color="textSecondary" paragraph>
        Monitor your team's performance and productivity
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {teamMembers.map((member) => (
          <Grid item xs={12} sm={6} md={4} key={member.id}>
            <Card sx={{ height: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)' } }}>
              <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar
                    sx={{
                      bgcolor: 'primary.main',
                      width: 56,
                      height: 56,
                      fontSize: '1.2rem',
                      mr: 2,
                    }}
                  >
                    {member.avatar}
                  </Avatar>
                  <Box flex={1}>
                    <Typography variant="h6" fontWeight="bold">
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {member.role}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <FiberManualRecord
                      sx={{
                        fontSize: 12,
                        color: `${getStatusColor(member.status)}.main`,
                        mr: 0.5,
                      }}
                    />
                    <Typography variant="caption" color="textSecondary">
                      {member.status}
                    </Typography>
                  </Box>
                </Box>

                <Box mb={2}>
                  <Box display="flex" justifyContent="space-between" mb={0.5}>
                    <Typography variant="body2" color="textSecondary">
                      Tasks Completed
                    </Typography>
                    <Typography variant="body2" fontWeight="bold">
                      {member.tasksCompleted}
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={(member.tasksCompleted / 35) * 100}
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                </Box>

                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Box>
                    <Typography variant="body2" color="textSecondary">
                      Efficiency
                    </Typography>
                    <Typography variant="h6" fontWeight="bold">
                      {member.efficiency}%
                    </Typography>
                  </Box>
                  <Chip
                    label={`${member.efficiency}%`}
                    color={getEfficiencyColor(member.efficiency)}
                    size="small"
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Team Summary
          </Typography>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={4}>
              <Box textAlign="center">
                <Typography variant="h4" fontWeight="bold" color="primary">
                  {teamMembers.length}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Total Members
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box textAlign="center">
                <Typography variant="h4" fontWeight="bold" color="success.main">
                  {teamMembers.reduce((sum, m) => sum + m.tasksCompleted, 0)}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Total Tasks Completed
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box textAlign="center">
                <Typography variant="h4" fontWeight="bold" color="info.main">
                  {Math.round(teamMembers.reduce((sum, m) => sum + m.efficiency, 0) / teamMembers.length)}%
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Average Efficiency
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Team;

