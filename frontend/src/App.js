import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Replace Switch with Routes
import { Box } from '@mui/material';
import ShortenerPage from './pages/ShortenerPage';
import StatisticsPage from './pages/StatisticsPage';

function App() {
  const [shortenedLinks, setShortenedLinks] = useState([]);

  return (
    <Router>
      <Box>
        <Routes>
          <Route exact path="/" element={<ShortenerPage setShortenedLinks={setShortenedLinks} />} />
          <Route path="/statistics" element={<StatisticsPage shortenedLinks={shortenedLinks} />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;