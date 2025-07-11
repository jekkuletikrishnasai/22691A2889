import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { shortenUrl } from '../services/api';

const UrlShortenerForm = ({ onShorten }) => {
  const [urls, setUrls] = useState([{ url: '', validity: '', shortcode: '' }]);
  const [results, setResults] = useState([]);

  const handleChange = (index, field, value) => {
    const newUrls = [...urls];
    newUrls[index][field] = value;
    setUrls(newUrls);
  };

  const handleSubmit = async () => {
    const validUrls = urls.filter(u => u.url && isValidUrl(u.url));
    if (validUrls.length > 5) return alert('Maximum 5 URLs allowed');
    const responses = await Promise.all(validUrls.map(u => shortenUrl({
      url: u.url,
      validity: u.validity || 30,
      shortcode: u.shortcode || ''
    })));
    setResults(responses.map(r => r.data));
    onShorten(responses.map(r => r.data));
  };

  const addField = () => setUrls([...urls, { url: '', validity: '', shortcode: '' }]);

  function isValidUrl(string) {
    try { new URL(string); return true; } catch { return false; }
  }

  return (
    <Box>
      {urls.map((u, i) => (
        <Box key={i} sx={{ mb: 2 }}>
          <TextField label="URL" value={u.url} onChange={(e) => handleChange(i, 'url', e.target.value)} fullWidth />
          <TextField label="Validity (minutes)" value={u.validity} onChange={(e) => handleChange(i, 'validity', e.target.value)} sx={{ mt: 2 }} />
          <TextField label="Shortcode" value={u.shortcode} onChange={(e) => handleChange(i, 'shortcode', e.target.value)} sx={{ mt: 2 }} />
        </Box>
      ))}
      <Button onClick={addField} variant="contained" sx={{ mr: 2 }}>Add URL</Button>
      <Button onClick={handleSubmit} variant="contained">Shorten</Button>
      {results.map((r, i) => (
        <Box key={i} sx={{ mt: 2 }}>
          Short Link: {r.shortLink}, Expiry: {r.expiry}
        </Box>
      ))}
    </Box>
  );
};

export default UrlShortenerForm;
