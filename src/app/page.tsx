'use client';

import dynamic from 'next/dynamic';
import { AppContextProvider } from '@/context/AppContext';

const App = dynamic(() => import('@/components/App'), { 
  ssr: false,
  loading: () => <div className="loading">Cargando...</div>
});

export default function Home() {
  return (
    <AppContextProvider>
      <App />
    </AppContextProvider>
  );
}
