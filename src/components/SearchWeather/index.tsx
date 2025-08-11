'use client';

import React, { useState, KeyboardEvent } from 'react';
import { useAppContext } from '@/context/AppContext';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import './styles.scss';

export default function SearchWeather() {
  const { setLastSearchedCity, setHasSearched } = useAppContext();
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!city.trim()) {
      setError('Por favor, ingrese una ciudad.');
      setHasSearched(false);
      setLastSearchedCity('');
      return;
    }

    try {
      const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al buscar el clima');
      }

      setHasSearched(true);
      setLastSearchedCity(city);
      setError('');
    } catch {
      setError('No se encontró la ciudad.');
      setHasSearched(false);
      setLastSearchedCity('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-weather">
      <AppBar position="static" className="search-weather__appbar">
        <Toolbar className="search-weather__toolbar">
          <LocationCityIcon className="search-weather__icon" />
          <Box className="search-weather__input-wrapper">
            <InputBase
              className="search-weather__input"
              placeholder="Buscar ciudad..."
              value={city}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value)}
              onKeyDown={handleKeyDown}
              inputProps={{ "aria-label": "buscar ciudad" }}
            />
          </Box>
          <IconButton
            onClick={handleSearch}
            className="search-weather__search-button"
            aria-label="buscar"
          >
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {error && <p className="search-weather__error">{error}</p>}
    </div>
  );
}
