import React from 'react';
import { Box, Typography } from '@mui/material';
import UrlShortenerForm from '../components/UrlShortenerForm';

const ShortenerPage = ({ setShortenedLinks }) => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">URL Shortener</Typography>
      <UrlShortenerForm onShorten={setShortenedLinks} />
    </Box>
  );
};

export default ShortenerPage;