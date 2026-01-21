import React, { useState, useEffect } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
} from '@mui/material';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { TrendingUp, TrendingDown } from '@mui/icons-material';
import { productivityData, weeklyStats } from '../data/dummyData';
import { SkeletonKPICards } from '../components/Common/SkeletonLoader';

const Analytics = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SkeletonKPICards />;
  }

  const currentProductivity = productivityData[productivityData.length - 1];
  const previousProductivity = productivityData[productivityData.length - 2];
  const productivityTrend = ((currentProductivity.productivity - previousProductivity.productivity) / previousProductivity.productivity) * 100;

  return (
    <Box>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Analytics & Insights
      </Typography>
      <Typography variant="body2" color="textSecondary" paragraph>
        Deep dive into your team's productivity metrics and trends
      </Typography>

      {/* Trend Indicators */}
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography variant="body2" color="textSecondary">
                    Productivity Trend
                  </Typography>
                  <Typography variant="h5" fontWeight="bold">
                    {currentProductivity.productivity}%
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" color={productivityTrend >= 0 ? 'success.main' : 'error.main'}>
                  {productivityTrend >= 0 ? <TrendingUp /> : <TrendingDown />}
                  <Typography variant="body2" ml={0.5}>
                    {productivityTrend >= 0 ? '+' : ''}{productivityTrend.toFixed(1)}%
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography variant="body2" color="textSecondary">
                    Efficiency Score
                  </Typography>
                  <Typography variant="h5" fontWeight="bold">
                    {currentProductivity.efficiency}%
                  </Typography>
                </Box>
                <Chip label="Excellent" color="success" size="small" />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box>
                <Typography variant="body2" color="textSecondary">
                  Weekly Average
                </Typography>
                <Typography variant="h5" fontWeight="bold">
                  {Math.round(weeklyStats.reduce((sum, day) => sum + day.completed, 0) / weeklyStats.length)}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  Tasks per day
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box>
                <Typography variant="body2" color="textSecondary">
                  Completion Rate
                </Typography>
                <Typography variant="h5" fontWeight="bold">
                  {Math.round(
                    (weeklyStats.reduce((sum, day) => sum + day.completed, 0) /
                      weeklyStats.reduce((sum, day) => sum + day.tasks, 0)) *
                      100
                  )}%
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  This week
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Charts */}
      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Productivity & Efficiency Trend (6 Months)
              </Typography>
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={productivityData}>
                  <defs>
                    <linearGradient id="colorProductivity" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1976d2" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#1976d2" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorEfficiency" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2e7d32" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#2e7d32" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="productivity"
                    stroke="#1976d2"
                    fillOpacity={1}
                    fill="url(#colorProductivity)"
                    name="Productivity"
                  />
                  <Area
                    type="monotone"
                    dataKey="efficiency"
                    stroke="#2e7d32"
                    fillOpacity={1}
                    fill="url(#colorEfficiency)"
                    name="Efficiency"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Weekly Performance
              </Typography>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={weeklyStats} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="day" type="category" width={60} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="completed" fill="#2e7d32" name="Completed" />
                  <Bar dataKey="tasks" fill="#1976d2" name="Total" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Monthly Comparison
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={productivityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="productivity" stroke="#1976d2" strokeWidth={2} name="Productivity %" />
                  <Line type="monotone" dataKey="efficiency" stroke="#2e7d32" strokeWidth={2} name="Efficiency %" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Analytics;

