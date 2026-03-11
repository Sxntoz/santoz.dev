import { useState, useEffect } from 'react';
import Intro from './components/Intro';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cálculo do tempo total de animação:
    // atraso (0,1s * 5) + subida (0,8s) + espera (1s) + subida (0,8s)
    // ~ 3.1s para 3.5s
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Intro />}
      <div className={`min-h-screen bg-black text-white flex flex-col items-center justify-center transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <h1 className="text-6xl font-black text-[#ffd400]">Santoz</h1>
        <p className="mt-4 text-xl tracking-[0.2em] uppercase text-gray-500">Em progresso</p>
      </div>
    </>
  );
}

export default App;
