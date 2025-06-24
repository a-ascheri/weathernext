'use client';

import dynamic from 'next/dynamic';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Box } from '@mui/material';
import "./styles.scss";

const SearchWeather = dynamic(() => import('@/components/SearchWeather'), { ssr: false });
const WeatherChart = dynamic(() => import('@/components/WeatherChart'), { ssr: false });

function App() {
  return (
    <main className="app-container">
      <Box className="app-header">
        <h1>FreeWeather</h1>
        <WbSunnyIcon className="weather-icon" />
      </Box>
      <SearchWeather />
      <WeatherChart />
      <p>FW® Todos los derechos reservados.</p>
    </main>
  );
}

export default App;
