import React from 'react';
import { Box, Skeleton, Card, CardContent, Grid } from '@mui/material';

export const SkeletonCard = () => (
  <Card>
    <CardContent>
      <Skeleton variant="text" width="60%" height={24} />
      <Skeleton variant="text" width="40%" height={40} />
      <Skeleton variant="rectangular" width="100%" height={60} sx={{ mt: 2 }} />
    </CardContent>
  </Card>
);

export const SkeletonKPICards = () => (
  <Grid container spacing={3}>
    {[1, 2, 3, 4].map((i) => (
      <Grid item xs={12} sm={6} md={3} key={i}>
        <SkeletonCard />
      </Grid>
    ))}
  </Grid>
);

export const SkeletonTable = () => (
  <Card>
    <CardContent>
      <Skeleton variant="rectangular" width="100%" height={400} />
    </CardContent>
  </Card>
);

