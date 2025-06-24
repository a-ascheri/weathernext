'use client';

import { useAppContext } from '@/context/AppContext';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import './styles.scss';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const WeatherChart = () => {
  const { lastSearchedCity, hasSearched } = useAppContext();
  const [chartData, setChartData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!hasSearched || !lastSearchedCity) return;

    const fetchWeatherData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/weather?city=${encodeURIComponent(lastSearchedCity)}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Error al obtener datos del clima');
        }

        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const filteredData = data.list.filter((item: any) => {
          const date = new Date(item.dt * 1000);
          return date < tomorrow;
        });

        const labels = filteredData.map((item: any) =>
          new Date(item.dt * 1000).toLocaleTimeString('es-ES', {
            hour: '2-digit',
            minute: '2-digit'
          })
        );
        const temperatures = filteredData.map((item: any) => item.main.temp);

        setChartData({
          labels,
          datasets: [
            {
              label: 'Temperatura (°C)',
              data: temperatures,
              borderColor: '#645be7d2',
              backgroundColor: 'rgba(168, 147, 234, 0.2)',
              tension: 0.4,
              pointBackgroundColor: '#a893ea',
              pointBorderColor: '#f8f8f8',
              pointHoverBackgroundColor: '#f8f8f8',
              pointHoverBorderColor: '#645be7d2',
            },
          ],
        });
      } catch (error) {
        console.error('Error al obtener los datos del clima:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [lastSearchedCity, hasSearched]);

  if (!hasSearched) return null;

  return (
    <div className="weather-chart">
      <h2 className="weather-chart__title">Pronóstico del Clima</h2>
      {loading && (
        <div className="weather-chart__loading">
          <div className="weather-chart__loading-spinner"></div>
        </div>
      )}
      {chartData && !loading && (
        <div className="weather-chart__content">
          <Line
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: 'top' as const,
                  labels: {
                    color: '#f8f8f8',
                    font: {
                      size: 12
                    }
                  }
                },
                tooltip: {
                  backgroundColor: 'rgba(28, 28, 28, 0.9)',
                  titleColor: '#f8f8f8',
                  bodyColor: '#f8f8f8',
                  borderColor: '#645be7d2',
                  borderWidth: 1,
                  padding: 10
                },
                title: {
                  display: true,
                  text: `Temperatura en ${lastSearchedCity}`,
                  color: '#f8f8f8'
                }
              },
              scales: {
                x: {
                  grid: {
                    color: 'rgba(75, 192, 192, 0.1)',
                  },
                  ticks: {
                    color: '#f8f8f8'
                  }
                },
                y: {
                  grid: {
                    color: 'rgba(75, 192, 192, 0.1)',
                  },
                  ticks: {
                    color: '#f8f8f8'
                  }
                }
              }
            }}
          />
        </div>
      )}
    </div>
  );
};

export default WeatherChart;
