import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Box } from '@mui/material';
import ShortenerPage from './pages/ShortenerPage';
import StatisticsPage from './pages/StatisticsPage';

function App() {
  const [shortenedLinks, setShortenedLinks] = useState([]);

  return (
    <Router>
      <Box>
        <Switch>
          <Route exact path="/">
            <ShortenerPage />
          </Route>
          <Route path="/statistics">
            <StatisticsPage shortenedLinks={shortenedLinks} />
          </Route>
        </Switch>
      </Box>
    </Router>
  );
}

export default App;
