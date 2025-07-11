import React, { useState, useEffect } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { getUrlStats } from '../services/api';

const UrlStatistics = ({ shortcodes }) => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    const fetchStats = async () => {
      const statsData = {};
      for (const sc of shortcodes) {
        const response = await getUrlStats(sc.split('/').pop());
        statsData[sc] = response.data;
      }
      setStats(statsData);
    };
    fetchStats();
  }, [shortcodes]);

  return (
    <Box>
      {Object.entries(stats).map(([shortLink, data]) => (
        <Box key={shortLink} sx={{ mb: 4 }}>
          <Typography variant="h6">{shortLink}</Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Original URL</TableCell>
                <TableCell>Creation Date</TableCell>
                <TableCell>Expiry Date</TableCell>
                <TableCell>Total Clicks</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{data.originalUrl}</TableCell>
                <TableCell>{new Date(data.creationDate).toLocaleString()}</TableCell>
                <TableCell>{new Date(data.expiryDate).toLocaleString()}</TableCell>
                <TableCell>{data.totalClicks}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          {data.clickData && data.clickData.length > 0 && (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Timestamp</TableCell>
                  <TableCell>Source</TableCell>
                  <TableCell>Location</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.clickData.map((click, i) => (
                  <TableRow key={i}>
                    <TableCell>{new Date(click.timestamp).toLocaleString()}</TableCell>
                    <TableCell>{click.source}</TableCell>
                    <TableCell>{click.location}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default UrlStatistics;
