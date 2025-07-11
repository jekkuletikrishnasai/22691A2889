import React from 'react';
import { Box, Typography } from '@mui/material';
import UrlStatistics from '../components/UrlStatistics';

const StatisticsPage = ({ shortenedLinks }) => (
  <Box sx={{ p: 3 }}>
    <Typography variant="h4">URL Statistics</Typography>
    <UrlStatistics shortcodes={shortenedLinks} />
  </Box>
);

export default StatisticsPage;
